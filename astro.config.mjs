import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Guide tables stack into records on phones, where the header row is hidden.
// Copy each column heading onto its cells as data-label so the stacked cells keep their meaning.
function tableLabels() {
  const text = (n) => (n.type === 'text' ? n.value : (n.children || []).map(text).join(''));
  const find = (n, tag, out = []) => {
    for (const c of n.children || []) {
      if (c.type !== 'element') continue;
      if (c.tagName === tag) out.push(c);
      else find(c, tag, out);
    }
    return out;
  };
  const walk = (n) => {
    if (n.type === 'element' && n.tagName === 'table') {
      const heads = find(n, 'th').map((th) => text(th).trim());
      for (const tr of find(n, 'tr')) {
        find(tr, 'td').forEach((td, i) => {
          if (heads[i]) td.properties = { ...td.properties, dataLabel: heads[i] };
        });
      }
      return;
    }
    (n.children || []).forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: 'https://landcontrol.co.uk',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: { rehypePlugins: [tableLabels] },
  integrations: [sitemap({ filter: (p) => !/\/(thanks|privacy|terms)\/?$/.test(p) })],
  redirects: {
    '/housebuilders': '/professionals/housebuilders/',
    '/landowners': '/professionals/landowners/',
    '/conveyancers': '/professionals/conveyancers/',
    '/analysts': '/professionals/lenders/',
    '/professionals/developers': '/professionals/housebuilders/',
  },
});
