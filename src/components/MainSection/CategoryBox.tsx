import { Card } from '@components/commons/Card';

import React from 'react';

import { Text, VStack } from '@chakra-ui/react';

export interface ICategoryBox {
  category: string;
  example: string;
  img: string;
}

export const CategoryBox = ({ category, example, img }: ICategoryBox) => {
  return (
    <Card>
      <VStack spacing={4} alignItems="start">
        <Text as="b" fontSize="20px">
          {category}
        </Text>
        <Text color={'#888888'} fontSize="15px" whiteSpace="nowrap">
          {example}
        </Text>
      </VStack>
      <img alt="category image" src={img} />
    </Card>
  );
};
