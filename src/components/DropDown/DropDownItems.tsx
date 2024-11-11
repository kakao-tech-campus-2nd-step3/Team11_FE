import { DropDownContext } from '@components/DropDown/DropDownContext';

import React, {
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { VStack } from '@chakra-ui/react';

import styles from './index.module.css';

interface IDropDownItems {
  children: ReactNode;
  dropDownRef: React.Ref<HTMLDivElement>;
}

export const DropDownItems: React.FC<IDropDownItems> = ({
  children,
  dropDownRef,
}) => {
  const [items, setItems] = useState<RefObject<HTMLButtonElement>[]>();
  const [cursor, setCursor] = useState<RefObject<HTMLButtonElement>>();

  const registerItem = useCallback(
    (itemRef: RefObject<HTMLButtonElement>) => {
      setItems((prev) => (prev ? [...prev, itemRef] : [itemRef]));
    },
    [setItems]
  );

  const contextValue = useMemo(
    () => ({
      registerItem,
    }),
    [registerItem]
  );

  useEffect(() => {
    if (items && !cursor) {
      setCursor(items[0]);
    }

    if (cursor && cursor.current) {
      cursor.current.focus();
    }
  }, [items, cursor]);

  return (
    <DropDownContext.Provider value={contextValue}>
      <VStack ref={dropDownRef} className={styles.basicDropdownItems}>
        {children}
      </VStack>
    </DropDownContext.Provider>
  );
};
