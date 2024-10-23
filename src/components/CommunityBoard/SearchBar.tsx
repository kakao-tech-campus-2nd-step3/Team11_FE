import React from 'react';

import { SearchIcon } from '@chakra-ui/icons';
import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

const SearchBar: React.FC = () => (
  <InputGroup flex="auto">
    <InputLeftElement pointerEvents="none">
      <Icon as={SearchIcon} color="blue.500" />
    </InputLeftElement>
    <Input
      type="text"
      placeholder="궁금한 주제를 검색해보고, 원하는 답을 찾아보세요!"
      bg="gray.200"
      borderColor="blue.400"
      borderWidth="2px"
      borderRadius="full"
      pl={10}
      py={2.5}
    />
  </InputGroup>
);

export default SearchBar;
