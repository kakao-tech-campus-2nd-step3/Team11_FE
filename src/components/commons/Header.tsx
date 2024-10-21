import React from 'react';
import { Link } from 'react-router-dom';

import { PropH } from '@/components/commons/types';
import { ROUTER_PATH } from '@/router';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import logo from '@images/logo.svg';

export const Header: React.FC<PropH> = ({ h }) => {
  return (
    <Box
      zIndex={99}
      position={'fixed'}
      top={0}
      left={0}
      right={0}
      h={h}
      bg="#fff"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="lg"
    >
      <Link to={ROUTER_PATH.ROOT}>
        <Image src={logo} alt="logo" w={132} h={27} ml={10} />
      </Link>

      <Flex mr={2} color="#4D4D4D" fontSize={20} fontWeight="bold">
        <Link to={ROUTER_PATH.ROOT}>
          <Text
            w={99}
            h={55}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            홈
          </Text>
        </Link>
        <Text
          w={99}
          h={55}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          Q&As
        </Text>
        <Text
          w={204}
          h={55}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          전문가와의 상담
        </Text>
        <Text
          w={102}
          h={55}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          커뮤니티
        </Text>
        <a
          href={'http://13.125.238.177:8080/api/v1/auth/login'}
        >
          <Text
            w={102}
            h={55}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            로그인
          </Text>
        </a>
      </Flex>
    </Box>
  );
};
