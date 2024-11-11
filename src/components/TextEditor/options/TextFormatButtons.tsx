import { FormatButton } from '@components/TextEditor/options/FormatButton';

import React, { Fragment } from 'react';

import { Text } from '@chakra-ui/react';
import { TextFormatType } from 'lexical';

const createFormatButtonArray = (
  isBold: boolean,
  isItalic: boolean,
  isUnderline: boolean,
  isStrikethrough: boolean
): {
  command: TextFormatType;
  isActive: boolean;
  content: JSX.Element;
}[] => {
  return [
    {
      command: 'bold',
      isActive: isBold,
      content: <b>B</b>,
    },
    {
      command: 'italic',
      isActive: isItalic,
      content: <i>I</i>,
    },
    {
      command: 'underline',
      isActive: isUnderline,
      content: <u>U</u>,
    },
    {
      command: 'strikethrough',
      isActive: isStrikethrough,
      content: <Text textDecoration="line-through">S</Text>,
    },
  ];
};

export const TextFormatButtons: React.FC<{
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isStrikethrough: boolean;
  dispatchTextFormat: (command: TextFormatType) => () => void;
}> = ({
  isBold,
  isItalic,
  isUnderline,
  isStrikethrough,
  dispatchTextFormat,
}) => {
  return (
    <Fragment>
      {createFormatButtonArray(
        isBold,
        isItalic,
        isUnderline,
        isStrikethrough
      ).map(({ command, isActive, content }) => (
        <FormatButton
          key={command}
          isActive={isActive}
          onClick={dispatchTextFormat(command)}
        >
          {content}
        </FormatButton>
      ))}
    </Fragment>
  );
};
