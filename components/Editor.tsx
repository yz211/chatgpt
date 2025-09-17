"use client";

import { useCallback, useEffect, useMemo } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import type { Editor as TiptapEditor } from "@tiptap/core";

import {
  DEFAULT_EDITOR_ATTRIBUTES,
  DEFAULT_EDITOR_CONTENT,
  createEditorExtensions
} from "@/lib/tiptap";
import { useSelectionStore } from "@/lib/selection";

export default function Editor() {
  const setSelection = useSelectionStore((state) => state.setSelection);

  const extensions = useMemo(() => createEditorExtensions(), []);

  const handleSelection = useCallback(
    (editor: TiptapEditor) => {
      const { from, to } = editor.state.selection;
      if (from === to) {
        setSelection(null);
        return;
      }
      const text = editor.state.doc.textBetween(from, to, "\n");
      const selectionPayload = { from, to, text };
      setSelection(selectionPayload);
      console.debug("[selection]", selectionPayload);
    },
    [setSelection]
  );

  const editor = useEditor({
    extensions,
    content: DEFAULT_EDITOR_CONTENT,
    editorProps: {
      attributes: {
        class: DEFAULT_EDITOR_ATTRIBUTES
      }
    },
    onSelectionUpdate({ editor }) {
      handleSelection(editor);
    }
  });

  useEffect(() => {
    return () => {
      setSelection(null);
    };
  }, [setSelection]);

  return (
    <div className="flex h-full flex-1 flex-col overflow-hidden p-6">
      <div className="flex-1 overflow-hidden rounded-xl border bg-background shadow-sm">
        {editor ? (
          <EditorContent
            editor={editor}
            className="editor-content h-full w-full overflow-y-auto p-6"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            正在加载编辑器…
          </div>
        )}
      </div>
    </div>
  );
}
