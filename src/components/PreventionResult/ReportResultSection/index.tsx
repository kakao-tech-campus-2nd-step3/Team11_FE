import { Flex, Image, Text, VStack } from '@chakra-ui/react';
import checklistIcon from '@images/checklist.svg';
import heartFaceIcon from '@images/heartFace.svg';
import preventResultBg from '@images/preventResultBg.svg';

const result = {
  userName: '한성익',
  address:
    '연제구 쌍미천로152번길 9 드림스카이동 206호 부산광역시 연제구 쌍미천로152번길 9',
  isSafe: true,
  date: '2024.08.23 02:29',
};

export const ReportResultSection = () => {
  return (
    <VStack
      h={'682px'}
      bg="#176CFF"
      mt={'44px'}
      borderTopRadius={20}
      spacing={0}
    >
      <Image src={preventResultBg} position="absolute" />
      <Flex mt="70px" alignItems="center" gap="20px">
        <Image src={checklistIcon} />
        <Text
          color={'#FFF'}
          fontSize={'46px'}
          fontWeight={'regular'}
          lineHeight="55px"
        >
          부메랑이{' '}
          <Text fontWeight={800} as="span">
            {result.userName}
          </Text>
          님의 정보를
          <br /> 종합하여 분석한{' '}
          <Text fontWeight={800} as="span">
            리포트 결과
          </Text>
          입니다!
        </Text>
      </Flex>
      <VStack
        w={609}
        h={394}
        p="43px 0px"
        borderRadius={37}
        bgColor="#F6FBFF"
        mt="20px"
        spacing={0}
      >
        <Text
          fontWeight="bold"
          fontSize="21px"
          color="#4B4B4B"
          w="400px"
          textAlign="center"
          lineHeight="27px"
        >
          {result.address}
        </Text>
        <Image src={heartFaceIcon} />
        <Text fontWeight="bold" fontSize="20px" color="#979797">
          모든 정보를 종합해보았을 때,
        </Text>
        <Text fontWeight={800} fontSize="36px" color="#005DFF">
          {result.isSafe ? '내 보증금은 안전해요!' : '보증금이 위험해요'}
        </Text>
        <Text fontSize="19px" color="#979797">
          {result.date} 기준
        </Text>
      </VStack>
    </VStack>
  );
};
