import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import remarkMermaid from './src/lib/remarkMermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://cradle2grave.netlify.app',
  markdown: {
    remarkPlugins: [
      // ```mermaid ブロックを <pre class="mermaid"> に変換（Shiki より前に処理）
      remarkMermaid,
    ],
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
