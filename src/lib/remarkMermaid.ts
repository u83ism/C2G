import type { Root, Code, Html } from 'mdast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';

// ```mermaid コードブロックを mermaid.js が処理できる
// <pre class="mermaid"> 要素に変換する remark プラグイン。
// Shiki によるシンタックスハイライトの前に変換することで
// コードブロックとして処理されるのを防ぐ。
const remarkMermaid: Plugin<[], Root> = () => (tree) => {
  visit(tree, 'code', (node: Code, index, parent) => {
    if (node.lang !== 'mermaid' || !parent || index === null) return;

    const html: Html = {
      type: 'html',
      value: `<pre class="mermaid">${escapeHtml(node.value)}</pre>`,
    };
    parent.children.splice(index, 1, html);
  });
};

function escapeHtml(str: string): string {
  return str
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

export default remarkMermaid;
