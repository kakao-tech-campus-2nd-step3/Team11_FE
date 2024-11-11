import { EditorTheme } from '@components/TextEditor/Theme';
import { ImageNode } from '@components/TextEditor/nodes/ImageNode';
import { FloatingLinkEditorPlugin } from '@components/TextEditor/plugins/FloatingLinkEditorPlugin';
import { HTMLPlugin } from '@components/TextEditor/plugins/HTMLPlugin';
import { ImagePlugin } from '@components/TextEditor/plugins/ImagePlugin';
import { ToolbarPlugin } from '@components/TextEditor/plugins/ToolbarPlugin';

import React, { forwardRef, memo, useState } from 'react';

import { Box } from '@chakra-ui/react';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';

import './index.css';

const onError = (error: Error) => {
  console.log(error);
};

const initialConfig = {
  namespace: 'boomerang',
  theme: EditorTheme,
  nodes: [AutoLinkNode, LinkNode, ImageNode],
  onError,
};

const TextEditor: React.FC<{
  forwardContent?: (content: string) => void;
}> = ({ forwardContent }) => {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div>
        <ToolbarPlugin setIsLinkEditMode={setIsLinkEditMode} />
        <EditorContainer ref={onRef}>
          <RichTextPlugin
            contentEditable={<ContentEditable className={'content-editable'} />}
            ErrorBoundary={LexicalErrorBoundary}
            placeholder={<EditorPlaceholder />}
          />
          {floatingAnchorElem && (
            <FloatingLinkEditorPlugin
              anchorElem={floatingAnchorElem}
              isLinkEditMode={isLinkEditMode}
              setIsLinkEditMode={setIsLinkEditMode}
            />
          )}
          <LinkPlugin />
          <ImagePlugin />
          <HistoryPlugin />
          {forwardContent && <HTMLPlugin forwardContent={forwardContent} />}
        </EditorContainer>
      </div>
    </LexicalComposer>
  );
};

const EditorContainer = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => {
  const [editor] = useLexicalComposerContext();

  const onClick = () => {
    editor.focus();
  };

  return (
    <Box
      ref={ref as React.Ref<HTMLDivElement>}
      minH={272}
      bg="white"
      borderBottomRadius={15}
      p={10}
      pt={5}
      pb={5}
      position="relative"
      onClick={onClick}
    >
      {children}
    </Box>
  );
});

const EditorPlaceholder: React.FC = () => {
  return (
    <Box top={5} position="absolute" pointerEvents="none" userSelect="none">
      게시글 내용을 작성해 주세요.
    </Box>
  );
};

export default memo(TextEditor);
