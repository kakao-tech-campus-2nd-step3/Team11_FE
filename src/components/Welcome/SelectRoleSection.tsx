import { BtnBox } from '@/components/Welcome/BtnBox';
import { VStack } from '@chakra-ui/react';

export const SelectRoleSection = () => (
  <VStack gap={'20px'} mt={'100px'}>
    <BtnBox bgColor="#176CFF" color="#FFF">
      일반 사용자로 가입하기
    </BtnBox>
    <BtnBox bgColor="F5F5F5" color="#434343">
      멘토 회원이라면?
    </BtnBox>
  </VStack>
);
