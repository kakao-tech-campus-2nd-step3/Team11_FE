import {
  $createImageNode,
  ImageNode,
} from '@components/TextEditor/nodes/ImageNode';
import {
  INSERT_IMAGE_COMMAND,
  InsertImagePayload,
} from '@components/TextEditor/utils';

import { useEffect } from 'react';

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $wrapNodeInElement, mergeRegister } from '@lexical/utils';
import {
  $createParagraphNode,
  $insertNodes,
  $isRootOrShadowRoot,
  COMMAND_PRIORITY_EDITOR,
} from 'lexical';

export const ImagePlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!editor.hasNode(ImageNode)) {
      throw new Error('에디터에 이미지 노드를 추가해야합니다.');
    }

    return mergeRegister(
      editor.registerCommand<InsertImagePayload>(
        INSERT_IMAGE_COMMAND,
        (payload) => {
          const imgNode = $createImageNode(payload);
          $insertNodes([imgNode]);
          if ($isRootOrShadowRoot(imgNode.getParentOrThrow())) {
            $wrapNodeInElement(imgNode, $createParagraphNode).selectEnd();
          }

          return true;
        },
        COMMAND_PRIORITY_EDITOR
      )
    );
  }, [editor]);

  return null;
};
