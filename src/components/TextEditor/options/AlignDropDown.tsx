import { DropDown } from '@components/DropDown';
import { DropDownItem } from '@components/DropDown/DropDownItem';

import React from 'react';

import {
  ElementFormatType,
  FORMAT_ELEMENT_COMMAND,
  LexicalEditor,
} from 'lexical';

// TODO : 아이콘으로 변경
const alignOptions: {
  label: string;
  value: ElementFormatType;
  iconClass: string;
}[] = [
  { label: 'left Align', value: 'left', iconClass: 'left-align' },
  { label: 'center Align', value: 'center', iconClass: 'center-align' },
  { label: 'right Align', value: 'right', iconClass: 'right-align' },
  { label: 'justify Align', value: 'justify', iconClass: 'justify-align' },
  { label: 'start Align', value: 'start', iconClass: '' },
  { label: 'end Align', value: 'end', iconClass: '' },
];

export const AlignDropDown: React.FC<{
  isDisabled?: boolean;
  editor: LexicalEditor;
  currentAlign: string;
}> = ({ isDisabled = false, editor, currentAlign = 'left' }) => {
  return (
    <DropDown isDisabled={isDisabled} buttonLabel={currentAlign}>
      {alignOptions.map(({ label, value, iconClass }) => (
        <DropDownItem
          key={value}
          onClick={() => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, value);
          }}
        >
          {iconClass && <i className={`icon ${iconClass}`} />}
          <span className="text">{label}</span>
        </DropDownItem>
      ))}
    </DropDown>
  );
};
