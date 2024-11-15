import {
  ConsultingInfoBox,
  ConsultingInfoItem,
} from '@/components/ConsultingManagement/ConsultingInfoBox';
import { ConsultingManagementHeader } from '@/components/ConsultingManagement/ConsultingManagementHeader';
import { BoomerangColors } from '@/utils/colors';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';

const previousConsultingList: ConsultingInfoItem[] = [
  {
    consultation_date_time: '2024/11/01 오후 2시~ 오후 3시',
    mentor_nick_name: '홍길동',
    consultation_status: 'FINISHED',
    content:
      '주택 전세보증금을 돌려받지 못했습니다. 현재 상황에서 법적 조언이 필요하며, 대응 방안을 알고 싶습니다.',
  },
  {
    consultation_date_time: '2024/11/02 오전 10시~ 오전 11시',
    mentor_nick_name: '박민수',
    consultation_status: 'FINISHED',
    content:
      '상가 임대차 계약서와 관련된 문제로 분쟁이 발생했습니다. 현재 어떻게 해결할 수 있을지 자문이 필요합니다.',
  },
  {
    consultation_date_time: '2024/11/03 오후 4시~ 오후 5시',
    mentor_nick_name: '이영희',
    consultation_status: 'FINISHED',
    content:
      '임대 계약 해지와 관련된 문제가 발생했습니다. 임대인과의 협의가 어려운 상황이라 도움을 받고 싶습니다.',
  },
];

export const PreviousConsulting = () => {
  return (
    <Box flex="1" bg="white">
      <ConsultingManagementHeader category="과거 상담 내용 조회하기" />
      <VStack spacing="34px" mt="48px" pb="281px">
        {previousConsultingList.map((item) => (
          <Accordion key={item.consultation_date_time} allowToggle>
            <AccordionItem border="none">
              <AccordionButton
                bg="#176CFF"
                w="883px"
                h="50px"
                fontWeight="bold"
                fontSize="19px"
                color={BoomerangColors.white}
                pl={0}
                _hover={{ bg: '#176CFF' }}
              >
                <Flex
                  alignItems="center"
                  w="100%"
                  justifyContent="space-between"
                >
                  <Text textAlign="center" flex="1" pl="40px">
                    {item.consultation_date_time} 상담 내역 조회하기
                  </Text>
                  <AccordionIcon
                    justifySelf="flex-end"
                    color={BoomerangColors.white}
                    fontSize={'40px'}
                  />
                </Flex>
              </AccordionButton>
              <AccordionPanel p={0}>
                <ConsultingInfoBox infoList={item} />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </VStack>
    </Box>
  );
};
