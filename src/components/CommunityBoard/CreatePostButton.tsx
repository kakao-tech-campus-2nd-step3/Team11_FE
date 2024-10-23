import React from 'react';

import { Button } from '@chakra-ui/react';

const CreatePostButton: React.FC = () => (
  <Button
    alignSelf="flex-end"
    px={2}
    py={1.5}
    fontSize="lg"
    fontWeight="bold"
    color="white"
    bg="blue.600"
    borderRadius="lg"
    _hover={{ bg: 'blue.500' }}
  >
    게시글 작성하기
  </Button>
);

export default CreatePostButton;
