import { DropDownItems } from '@components/DropDown/DropDownItems';

import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Box, Flex, Image, Text } from '@chakra-ui/react';
import arrowIcon from '@images/arrowIcon.svg';

import styles from './index.module.css';

export interface IDropDown {
  buttonLabel?: string;
  className?: string;
  isDisabled?: boolean;
  children: ReactNode;
}

const dropDownPadding = 4;

export const DropDown: React.FC<IDropDown> = ({
  buttonLabel,
  className = styles.basicDropdown,
  isDisabled = false,
  children,
}) => {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;
    const dropDown = dropDownRef.current;

    if (showDropDown && button && dropDown) {
      const { top, left } = button.getBoundingClientRect();
      dropDown.style.top = `${top + button.offsetHeight + dropDownPadding}px`;
      dropDown.style.left = `${Math.min(left, window.innerWidth - dropDown.offsetWidth - 20)}px`;
    }
  }, [dropDownRef, buttonRef, showDropDown]);

  useEffect(() => {
    const button = buttonRef.current;

    if (button && showDropDown) {
      const onClick = (e: DocumentEventMap['click']) => {
        const target = e.target;
        if (!button.contains(target as Node)) {
          setShowDropDown(false);
        }
      };
      document.addEventListener('click', onClick);

      return () => {
        document.removeEventListener('click', onClick);
      };
    }
  }, [dropDownRef, buttonRef, showDropDown]);

  useEffect(() => {
    const moveDropDownOnScroll = () => {
      if (!showDropDown) {
        return;
      }

      const button = buttonRef.current;
      const dropDown = dropDownRef.current;
      if (button && dropDown) {
        const { top } = button.getBoundingClientRect();
        const to = top + button.offsetHeight + dropDownPadding;
        if (to !== dropDown.getBoundingClientRect().top) {
          dropDown.style.top = `${to}px`;
        }
      }
    };
    document.addEventListener('scroll', moveDropDownOnScroll);

    return () => {
      document.removeEventListener('scroll', moveDropDownOnScroll);
    };
  }, [buttonRef, dropDownRef, showDropDown]);

  const toggleDropDown = () => setShowDropDown(!showDropDown);

  return (
    <Fragment>
      <button
        type="button"
        className={className}
        onClick={toggleDropDown}
        ref={buttonRef}
        disabled={isDisabled}
      >
        {buttonLabel && (
          <Flex gap={'10px'}>
            {buttonLabel.includes('#') ? (
              <Box
                w="16px"
                h="16px"
                bg={buttonLabel}
                border="1px solid"
                borderColor="gray.300"
                borderRadius="4px"
                mr="8px"
              />
            ) : (
              <Text
                fontFamily={
                  buttonLabel.includes('px') ? undefined : buttonLabel
                }
                maxW={'120px'}
                isTruncated
              >
                {buttonLabel}
              </Text>
            )}
            <Image src={arrowIcon} width={4} />
          </Flex>
        )}
      </button>
      {showDropDown &&
        createPortal(
          <DropDownItems dropDownRef={dropDownRef}>{children}</DropDownItems>,
          document.body
        )}
    </Fragment>
  );
};
