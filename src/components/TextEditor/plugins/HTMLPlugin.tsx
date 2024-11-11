import React, { useEffect } from 'react';

import { $generateHtmlFromNodes } from '@lexical/html';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export const HTMLPlugin: React.FC<{
  forwardContent: (content: string) => void;
}> = ({ forwardContent }) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const htmlString = $generateHtmlFromNodes(editor, null);
        forwardContent(htmlString);
      });
    });
  }, [editor]);

  return null;
};
