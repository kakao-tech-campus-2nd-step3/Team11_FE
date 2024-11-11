import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { PropH } from '@/components/commons/types';
import { ROUTER_PATH } from '@/routerPath';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import logo from '@images/logo.svg';

const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${import.meta.env.VITE_REST_API_KEY}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;

export const Header: React.FC<PropH> = ({ h }) => {
  const navigate = useNavigate();

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

      <Flex
        mr={'37px'}
        color="#4D4D4D"
        fontSize={'20px'}
        fontWeight={800}
        gap={'70px'}
      >
        <Link to={ROUTER_PATH.ROOT}>
          <Text>홈</Text>
        </Link>
        <Text>Q&As</Text>
        <Text>전문가와의 상담</Text>
        <Link to={`${ROUTER_PATH.COMMUNITY}/open-forum`}>
          <Text cursor={'pointer'}>커뮤니티</Text>
        </Link>
        {localStorage.getItem('Authorization') ? (
          <Text
            cursor={'pointer'}
            onClick={() => {
              localStorage.removeItem('Authorization');
              localStorage.removeItem('Nickname');
              navigate(ROUTER_PATH.ROOT);
            }}
          >
            {localStorage.getItem('Nickname')}
          </Text>
        ) : (
          <a href={kakaoLoginUrl}>
            <Text>로그인</Text>
          </a>
        )}
      </Flex>
    </Box>
  );
};
