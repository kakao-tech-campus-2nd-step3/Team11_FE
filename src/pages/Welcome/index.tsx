import { BasicLayout } from '@components/commons/BasicLayout';

import React, { useState } from 'react';

import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import pen from '@images/pen2.svg';

const user = {
  nickname: '기러기123',
};

export const Welcome: React.FC = () => {
  return (
    <BasicLayout maxW={1024}>
      <VStack maxW={1024} h={800} bg={'#FFF'} borderRadius={24} mt={'80px'}>
        <NicknameSection />
        <BtnSection />
      </VStack>
    </BasicLayout>
  );
};

const NicknameSection = () => (
  <VStack>
    <Text color={'#474747'} fontSize={'30px'} fontWeight={800} mt={'120px'}>
      환영합니다!
    </Text>
    <Flex borderBottom={'1px solid #D4D4D8'} mt={'40px'}>
      <Input
        placeholder={`${user.nickname} 님`}
        fontSize={'20px'}
        border={'none'}
        borderRadius={0}
        _focus={{
          boxShadow: 'none',
        }}
      />
      <Image src={pen} />
    </Flex>
  </VStack>
);

const BtnSection = () => (
  <VStack>
    <Button
      mt={'100px'}
      color={'#FFF'}
      fontSize={'22px'}
      w={'250px'}
      h={'80px'}
      bg={'#176CFF'}
      borderRadius={8}
      shadow={'0px 0px 5px rgba(0,0,0,0.25)'}
    >
      일반 사용자로
      <br />
      가입 완료하기
    </Button>
    <Button
      mt={'10px'}
      color={'#111'}
      fontSize={'22px'}
      w={'250px'}
      h={'80px'}
      bg={'#F5F5F5'}
      borderRadius={8}
      shadow={'0px 0px 5px rgba(0,0,0,0.25)'}
    >
      멘토 회원이라면?
    </Button>
  </VStack>
);
