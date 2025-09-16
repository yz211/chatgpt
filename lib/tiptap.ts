import Color from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import type { Extensions } from "@tiptap/core";

export const DEFAULT_EDITOR_CONTENT = `
  <h2>欢迎使用文档智能助手</h2>
  <p>这里是可编辑的富文本区域。您可以直接输入、粘贴内容，或在后续里程碑中通过导入 .docx 文件快速开始。</p>
  <p>选择任意段落即可在左侧聊天区触发智能润色与改写。</p>
`;

export const DEFAULT_EDITOR_ATTRIBUTES =
  "min-h-full w-full whitespace-pre-wrap break-words leading-relaxed focus:outline-none";

export const createEditorExtensions = (): Extensions => [
  Color.configure({ types: ["textStyle"] }),
  TextStyle,
  StarterKit.configure({
    heading: { levels: [1, 2, 3, 4] },
    bulletList: { keepMarks: true, keepAttributes: true },
    orderedList: { keepMarks: true, keepAttributes: true }
  }),
  Underline,
  Link.configure({
    openOnClick: false,
    autolink: true,
    linkOnPaste: true,
    HTMLAttributes: {
      class: "text-primary underline underline-offset-2"
    }
  }),
  Image.configure({
    inline: false,
    allowBase64: true,
    HTMLAttributes: {
      class: "rounded-md"
    }
  })
];
