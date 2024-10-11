import React from 'react';

import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react';
import surveyBanner from '@images/surveyBanner.svg';

export const BannerSection: React.FC = () => (
  <Flex
    h={291}
    borderBottomRadius={15}
    bgColor="#2675FF"
    justifyContent="center"
    alignItems="center"
    boxShadow="0 4px 6.5px rgba(0, 0, 0, 0.25)"
    gap={'24px'}
  >
    <Image src={surveyBanner} w={201} h={153} />
    <VStack>
      <Text
        color="rgba(255,255,255,0.74)"
        fontSize="40px"
        fontWeight="bold"
        lineHeight={'44px'}
      >
        반가워요!
        <br />
        <Text color="#FFF" as="span" position="relative">
          <Flex gap={'27px'} position="absolute" right={2} top={-4}>
            {Array.from({ length: 3 }, (_, index) => (
              <Box
                key={index}
                bgColor="#FFF"
                borderRadius={50}
                width={'10px'}
                height={'10px'}
              />
            ))}
          </Flex>
          맞춤형 전세 보증금 반환 솔루션
        </Text>
        을 위한
        <br />
        설문조사를 간략하게 진행할게요!
      </Text>
      <Text fontSize="20px" color="rgba(255,255,255,0.53)">
        최초 가입 시 1회 답변 필수입니다. 정확한 솔루션을 위해 답변
        부탁드릴게요!
      </Text>
    </VStack>
  </Flex>
);
