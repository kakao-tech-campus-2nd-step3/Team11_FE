import { AlignDropDown } from '@components/TextEditor/options/AlignDropDown';
import { FontDropDown } from '@components/TextEditor/options/FontDropDown';
import { FormatButton } from '@components/TextEditor/options/FormatButton';
import { InsertImageButton } from '@components/TextEditor/options/InsertImageButton';
import { TextFormatButtons } from '@components/TextEditor/options/TextFormatButtons';
import { UndoRedoButtons } from '@components/TextEditor/options/UndoRedoButtons';
import {
  INSERT_IMAGE_COMMAND,
  InsertImagePayload,
  getSelectedNode,
} from '@components/TextEditor/utils';
import { HEADER_HEIGHT } from '@components/commons/BasicLayout';

import React, {
  Dispatch,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Flex } from '@chakra-ui/react';
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelectionStyleValueForProperty } from '@lexical/selection';
import { $findMatchingParent, mergeRegister } from '@lexical/utils';
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  CAN_REDO_COMMAND,
  CAN_UNDO_COMMAND,
  COMMAND_PRIORITY_CRITICAL,
  FORMAT_TEXT_COMMAND,
  SELECTION_CHANGE_COMMAND,
  TextFormatType,
} from 'lexical';

// TODO : 더이상 추가할 기능 없을 때 useReducer를 통해 리팩토링하기
export const ToolbarPlugin: React.FC<{
  setIsLinkEditMode: Dispatch<boolean>;
}> = ({ setIsLinkEditMode }) => {
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const [editor] = useLexicalComposerContext();
  const [activeEditor, setActiveEditor] = useState(editor);
  const [isEditable, setIsEditable] = useState(() => editor.isEditable());

  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const [fontSize, setFontSize] = useState<string>('15px');
  const [fontColor, setFontColor] = useState<string>('#000');
  const [fontFamily, setFontFamily] = useState<string>('Arial');

  const [isLink, setIsLink] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const [align, setAlign] = useState('left');

  const updateToolbarOnSelect = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsUnderline(selection.hasFormat('underline'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));

      const node = getSelectedNode(selection);
      const parent = node.getParent();
      setIsLink($isLinkNode(parent) || $isLinkNode(node));
      let matchingParent;
      if ($isLinkNode(parent)) {
        // 노드가 링크면 상위 노드의 포맷을 확인해야함
        matchingParent = $findMatchingParent(
          node,
          (parentNode) => $isElementNode(parentNode) && !parentNode.isInline()
        );
      }
      setAlign(
        $isElementNode(matchingParent)
          ? matchingParent.getFormatType()
          : $isElementNode(node)
            ? node.getFormatType() || 'left'
            : parent?.getFormatType() || 'left'
      );

      setFontColor(
        $getSelectionStyleValueForProperty(selection, 'color', '#000')
      );
      setFontSize(
        $getSelectionStyleValueForProperty(selection, 'font-size', '15px')
      );
      setFontFamily(
        $getSelectionStyleValueForProperty(selection, 'font-family', 'Arial')
      );
    }
  }, [editor, activeEditor]);

  useEffect(() => {
    return editor.registerCommand(
      SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        setActiveEditor(newEditor);
        updateToolbarOnSelect();
        return false;
      },
      COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, updateToolbarOnSelect]);

  useEffect(() => {
    activeEditor.getEditorState().read(() => {
      updateToolbarOnSelect();
    });

    return mergeRegister(
      activeEditor.registerEditableListener((editable) => {
        setIsEditable(editable);
      }),
      activeEditor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbarOnSelect();
        });
      }),
      activeEditor.registerCommand<boolean>(
        CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      ),
      activeEditor.registerCommand<boolean>(
        CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        COMMAND_PRIORITY_CRITICAL
      )
    );
  }, [editor, activeEditor, updateToolbarOnSelect]);

  useEffect(() => {
    const handleScroll = () => {
      if (toolbarRef.current && toolbarRef.current instanceof HTMLDivElement) {
        const top = toolbarRef.current.getBoundingClientRect().top;

        if (top <= HEADER_HEIGHT + 5) {
          toolbarRef.current.style.borderTopLeftRadius = '0';
          toolbarRef.current.style.borderTopRightRadius = '0';
        } else {
          toolbarRef.current.style.borderTopLeftRadius = '15px';
          toolbarRef.current.style.borderTopRightRadius = '15px';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const insertLink = useCallback(() => {
    if (!isLink) {
      setIsLinkEditMode(true);
      activeEditor.dispatchCommand(TOGGLE_LINK_COMMAND, 'https://');

      return;
    }
    setIsLinkEditMode(false);
    activeEditor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
  }, [activeEditor, isLink, setIsLinkEditMode]);

  const dispatchTextFormat = (command: TextFormatType) => () => {
    activeEditor.dispatchCommand(FORMAT_TEXT_COMMAND, command);
  };

  const insertImage = (payload: InsertImagePayload) => {
    activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
  };

  return (
    <Flex
      justifyContent={'space-between'}
      bg={BoomerangColors.white}
      pl={3}
      pr={3}
      borderTopRadius={'15px'}
      borderBottom={`2px solid ${BoomerangColors.deepBlue}`}
      position={'sticky'}
      top={'60px'}
      zIndex={999999}
      ref={toolbarRef}
      transition={'all .3s ease-in-out'}
    >
      <UndoRedoButtons
        editor={activeEditor}
        isEditable={isEditable}
        canRedo={canRedo}
        canUndo={canUndo}
      />
      <FontDropDown
        editor={activeEditor}
        currentFontFamily={fontFamily}
        currentFontSize={fontSize}
        currentFontColor={fontColor}
      />
      <TextFormatButtons
        dispatchTextFormat={dispatchTextFormat}
        isBold={isBold}
        isItalic={isItalic}
        isUnderline={isUnderline}
        isStrikethrough={isStrikethrough}
      />
      <InsertLinkButton isLink={isLink} insertLink={insertLink} />
      <InsertImageButton insertImage={insertImage} />
      <AlignDropDown editor={activeEditor} currentAlign={align} />
    </Flex>
  );
};

const InsertLinkButton: React.FC<{
  isLink: boolean;
  insertLink: () => void;
}> = ({ isLink, insertLink }) => {
  return (
    <FormatButton isActive={isLink} onClick={insertLink}>
      🔗
    </FormatButton>
  );
};
