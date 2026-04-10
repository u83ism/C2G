import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: 'https://cradle2grave.netlify.app',
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          // 外部リンクに🔗を付加
          content: { type: 'text', value: ' 🔗' },
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
    ],
  },
});
