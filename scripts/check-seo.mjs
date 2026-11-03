import { readdir, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
const host = 'https://www.primelinkaustralia.com.au';
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}
const files = await walk('dist');
const htmlFiles = files.filter(file => file.endsWith('.html') && !file.endsWith('404.html') && !file.includes(path.sep + '404' + path.sep));
const titles = new Set();
const canonicals = new Set();
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  assert.ok(title && !titles.has(title), 'Missing or duplicate title: ' + file);
  titles.add(title);
  assert.ok(canonical?.startsWith(host + '/') && canonical.endsWith('/') && !canonicals.has(canonical), 'Invalid or duplicate canonical: ' + file);
  canonicals.add(canonical);
  assert.match(html, /<meta[^>]*name="description"[^>]*content="[^"]+"/);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, 'Expected one H1: ' + file);
  assert.ok(!html.includes('content="noindex'), 'Unexpected noindex: ' + file);
  const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  assert.ok(scripts.length > 0, 'Missing structured data: ' + file);
  for (const script of scripts) JSON.parse(script[1]);
}
const sitemapFiles = files.filter(file => /sitemap.*\.xml$/.test(file));
assert.ok(sitemapFiles.length > 0, 'Missing sitemap');
const sitemap = (await Promise.all(sitemapFiles.map(file => readFile(file, 'utf8')))).join('\n');
for (const canonical of canonicals) assert.ok(sitemap.includes('<loc>' + canonical + '</loc>'), 'Page absent from sitemap: ' + canonical);
assert.ok(!sitemap.includes('/404/'));
const robots = await readFile('dist/robots.txt', 'utf8');
assert.ok(robots.includes('Allow: /') && robots.includes(host + '/sitemap-index.xml'));
console.log('SEO checks passed for ' + htmlFiles.length + ' pages: unique titles/canonicals, descriptions, H1, structured data and sitemap coverage.');
