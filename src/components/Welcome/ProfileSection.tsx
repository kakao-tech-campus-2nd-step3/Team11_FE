import { useNicknameRecommendation } from '@apis/user';

import React from 'react';

import { Flex, Image, Input, Text, VStack } from '@chakra-ui/react';
import pen from '@images/pen2.svg';

export const ProfileSection: React.FC<{
  setNickname: (nickname: string) => void;
}> = ({ setNickname }) => {
  const { data, isLoading, isError } = useNicknameRecommendation();

  return (
    <VStack>
      <Text color={'#474747'} fontSize={'30px'} fontWeight={800} mt={'120px'}>
        환영합니다!
      </Text>
      <Flex borderBottom={'1px solid #D4D4D8'} mt={'40px'}>
        <Input
          placeholder={`${isLoading && !isError && !data ? '추천 받는중' : (data?.nickname ?? '추천 받지 못했습니다')}`}
          fontSize={'20px'}
          border={'none'}
          borderRadius={0}
          _focus={{
            boxShadow: 'none',
          }}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Image src={pen} />
      </Flex>
    </VStack>
  );
};
