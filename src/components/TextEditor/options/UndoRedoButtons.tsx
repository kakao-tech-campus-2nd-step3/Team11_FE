import React from 'react';

import { Flex, Image } from '@chakra-ui/react';
import arrowIcon from '@images/arrowIcon.svg';
import { LexicalEditor, REDO_COMMAND, UNDO_COMMAND } from 'lexical';

export const UndoRedoButtons: React.FC<{
  canUndo: boolean;
  canRedo: boolean;
  isEditable: boolean;
  editor: LexicalEditor;
}> = ({ canRedo, canUndo, editor, isEditable }) => {
  return (
    <Flex gap={'15px'}>
      <button
        disabled={!canUndo || !isEditable}
        onClick={() => {
          editor.dispatchCommand(UNDO_COMMAND, undefined);
        }}
        type="button"
        aria-label="Undo"
      >
        <Image
          src={arrowIcon}
          transform={'rotate(90deg)'}
          opacity={!canUndo || !isEditable ? 0.5 : 1}
          w={5}
        />
      </button>
      <button
        disabled={!canRedo || !isEditable}
        onClick={() => {
          editor.dispatchCommand(REDO_COMMAND, undefined);
        }}
        type="button"
        aria-label="Redo"
      >
        <Image
          src={arrowIcon}
          transform={'rotate(270deg)'}
          opacity={!canRedo || !isEditable ? 0.5 : 1}
          w={5}
        />
      </button>
    </Flex>
  );
};
