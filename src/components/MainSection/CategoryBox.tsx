import React from 'react';
import { Link } from 'react-router-dom';

import { Text, VStack } from '@chakra-ui/react';

import styles from './index.module.css';

export interface ICategoryBox {
  category: string;
  example: string;
  img: string;
  path: string;
}

export const CategoryBox = ({ category, example, img, path }: ICategoryBox) => {
  return (
    <Link
      className={styles['category--box']}
      to={path}
      preventScrollReset={true}
    >
      <VStack spacing={4} alignItems="space-between">
        <Text fontWeight={900} fontSize="20px">
          {category}
        </Text>
        <Text color={'#888888'} fontSize="15px" whiteSpace="nowrap">
          {example}
        </Text>
      </VStack>
      <img alt="category image" src={img} />
    </Link>
  );
};
