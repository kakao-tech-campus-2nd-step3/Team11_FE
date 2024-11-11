import { confirmNickname, useNicknameRecommendation } from '@apis/user';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { BtnBox } from '@/components/Welcome/BtnBox';
import { ROUTER_PATH } from '@/routerPath';
import { VStack } from '@chakra-ui/react';

export const SelectRoleSection: React.FC<{
  nickname: string;
}> = ({ nickname }) => {
  const { data } = useNicknameRecommendation();
  const navigate = useNavigate();

  return (
    <VStack gap={'20px'} mt={'100px'}>
      <BtnBox
        bgColor="#176CFF"
        color="#FFF"
        onClick={() =>
          confirmNickname(
            nickname ? nickname : (data?.nickname ?? 'null')
          ).then((data) => {
            const { nickname } = data;
            if (nickname) {
              localStorage.setItem('Nickname', nickname);
              navigate(ROUTER_PATH.ROOT);
            }
          })
        }
      >
        일반 사용자로 가입하기
      </BtnBox>
      <BtnBox bgColor="F5F5F5" color="#434343">
        멘토 회원이라면?
      </BtnBox>
    </VStack>
  );
};
