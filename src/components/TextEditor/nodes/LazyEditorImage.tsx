import { ImageResizer } from '@components/ImageResizer';
import { getDirectionStr } from '@components/ImageResizer/utils';
import { ILazyImage, LazyImage } from '@components/LazyImage';
import { $isImageNode } from '@components/TextEditor/nodes/ImageNode';

import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { removeImagePreviewUrl } from '@/templates/Community/utils';
import { Box } from '@chakra-ui/react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import useLexicalEditable from '@lexical/react/useLexicalEditable';
import { useLexicalNodeSelection } from '@lexical/react/useLexicalNodeSelection';
import { mergeRegister } from '@lexical/utils';
import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  BaseSelection,
  CLICK_COMMAND,
  COMMAND_PRIORITY_LOW,
  KEY_BACKSPACE_COMMAND,
  KEY_DELETE_COMMAND,
} from 'lexical';

const LazyEditorImage: React.FC<ILazyImage> = ({
  altText,
  w,
  maxW,
  h,
  src,
  nodeKey,
}) => {
  const [editor] = useLexicalComposerContext();
  const isEditable = useLexicalEditable();
  const editorRootElement = editor.getRootElement();
  const [isSelected, setSelected, clearSelection] =
    useLexicalNodeSelection(nodeKey);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [selection, setSelection] = useState<BaseSelection | null>(null);
  const isFocused = (isSelected || isResizing) && isEditable;

  // TODO : selection이 커서 및 클릭 기반으로 변경되기 때문에 삭제 버튼을 만들기가 까다로움
  const deleteImage = useCallback(
    (payload: KeyboardEvent) => {
      const deleteSelection = $getSelection();
      payload.preventDefault();
      editor.update(() => {
        if (deleteSelection) {
          deleteSelection.getNodes().forEach((node) => {
            if ($isImageNode(node)) {
              removeImagePreviewUrl(node.getSrc());
              node.remove();
            }
          });
        }
      });

      return false;
    },
    [editor, isSelected]
  );

  const onClick = useCallback(
    (event: MouseEvent) => {
      if (isResizing) {
        return true;
      }

      if (event.target === imageRef.current) {
        clearSelection();
        setSelected(true);

        return true;
      }

      return false;
    },
    [isResizing, isSelected, setSelected, clearSelection]
  );

  useEffect(() => {
    let isMounted = true;
    const unregister = mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        if (isMounted) {
          setSelection(editorState.read(() => $getSelection()));
        }
      }),
      editor.registerCommand<MouseEvent>(
        CLICK_COMMAND,
        onClick,
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        KEY_DELETE_COMMAND,
        deleteImage,
        COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        KEY_BACKSPACE_COMMAND,
        deleteImage,
        COMMAND_PRIORITY_LOW
      )
    );

    return () => {
      isMounted = false;
      unregister();
    };
  }, [editor]);

  const onResizeStart = (direction: number) => {
    if (editorRootElement !== null) {
      editorRootElement.style.setProperty(
        'cursor',
        `${getDirectionStr(direction)}-resize`,
        'important'
      );
    }
    setIsResizing(true);
  };

  const onResizeEnd = (
    nextWidth: 'inherit' | number,
    nextHeight: 'inherit' | number
  ) => {
    if (editorRootElement !== null) {
      editorRootElement.style.setProperty('cursor', 'text');
    }
    setIsResizing(false);
    editor.update(() => {
      const node = $getNodeByKey(nodeKey);
      if ($isImageNode(node)) {
        node.setWidthAndHeight(nextWidth, nextHeight);
      }
    });
  };

  const maxWImg = maxW
    ? maxW
    : editorRootElement !== null
      ? editorRootElement.getBoundingClientRect().width - 20
      : 100;
  const maxHImg =
    editorRootElement !== null
      ? editorRootElement.getBoundingClientRect().height - 20
      : 100;

  return (
    <Suspense fallback={null}>
      {isFocused && (
        <Box color={'white'} bg={'black'} position={'absolute'}>
          backspace 또는 del 키를 통해 삭제
        </Box>
      )}
      <LazyImage
        altText={altText}
        w={w}
        maxW={maxW}
        h={h}
        src={src}
        className={isFocused ? 'focused' : undefined}
        imageRef={imageRef}
        nodeKey={nodeKey}
      />
      {isFocused && $isNodeSelection(selection) && (
        <ImageResizer
          imageRef={imageRef}
          maxW={maxWImg}
          maxH={maxHImg}
          onResizeStart={onResizeStart}
          onResizeEnd={onResizeEnd}
        />
      )}
    </Suspense>
  );
};

export default LazyEditorImage;
