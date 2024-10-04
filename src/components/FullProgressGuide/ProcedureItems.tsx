import React from 'react';

import { Box, Image, Text } from '@chakra-ui/react';
import arrowIcon from '@images/arrowIcon.svg';

export const ProcedureItems: React.FC<{ title: string; content: string }> = ({
  title,
  content,
}) => (
  <Box w={856}>
    <Text color="#4B4B4B" fontSize={22} fontWeight={800} mb="10px">
      {title}
    </Text>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      h={131}
      borderRadius={12}
      bg="#E7F4FF"
      border="2px solid"
      borderColor="rgba(23, 108, 255, 0.69)"
    >
      <Text
        color="rgba(23, 108, 255, 0.51)"
        fontSize={20}
        fontWeight="bold"
        mt={5}
        mr={10}
        ml={10}
      >
        {content}
      </Text>
      <Box
        color="#176CFF"
        fontSize={20}
        fontWeight={800}
        alignSelf="flex-end"
        mt={2}
        mr={3}
        mb={2}
      >
        <Text display="inline" mr={3}>
          더보기
        </Text>
        <Image
          w="27px"
          h="16px"
          src={arrowIcon}
          alt="더보기 버튼"
          display="inline"
        />
      </Box>
    </Box>
  </Box>
);
