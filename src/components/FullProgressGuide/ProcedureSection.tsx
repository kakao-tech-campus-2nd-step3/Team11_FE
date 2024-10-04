import React from 'react';

import { Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import papersIcon from '@images/papersIcon.svg';
import { ProcedureItems } from '@/components/FullProgressGuide/ProcedureItems';

export const ProcedureSection: React.FC = () => (
  <Flex
    h={1781}
    mt={51}
    borderRadius={19}
    bg="#fff"
    boxShadow="lg"
    flexDirection="column"
    alignItems="center"
  >
    <Flex flexDirection="row" alignItems="center" mt="86px" mb="46px">
      <Image src={papersIcon} alt="문서 아이콘" w={176} h={88} />
      <Text
        color="#363636"
        fontSize={33}
        fontWeight={800}
        display="flex"
        flexDirection="row"
      >
        <Text color="#176CFF" as="span">
          서비스 이해
        </Text>
        를 돕기 위한 절차입니다,
        <br />
        안내에 따라 진행해주세요!
      </Text>
    </Flex>

    <VStack spacing="100px">
      <ProcedureItems
        title="1. 계약 해지 통지서"
        content="계약 해지 통지서 내용..."
      />
      <ProcedureItems
        title="2. 임차권 등기명령 신청"
        content="임차권 등기명령 신청..."
      />
      <ProcedureItems
        title="3. 전제사기 피해자 센터 신청"
        content="전제사기 피해자 센터 신청..."
      />
      <ProcedureItems
        title="4. 보증 이행 청구서류 준비"
        content="보증 이행 청구서류 준비..."
      />
      <ProcedureItems
        title="5. 보증 이행 센터 방문"
        content="보증 이행 센터 방문..."
      />
    </VStack>

    <Button
      w="415px"
      h="113px"
      mt="90px"
      borderRadius="8px"
      bg="#176CFF"
      color="#fff"
      fontSize="35px"
      fontWeight={800}
    >
      다음 단계로 넘어가기
    </Button>
  </Flex>
);
