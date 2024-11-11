import { useState } from 'react';

import { ConsultingItemTitle } from '@/components/ConsultingManagement/ConsultingItemTitle';
import { BoomerangButton } from '@/components/commons/BoomerangButton';
import { BoomerangColors } from '@/utils/colors';
import { Box, Flex, Input, Text, Textarea, VStack } from '@chakra-ui/react';
import document from '@images/document2.svg';

export const ConsultingInformationInputSection = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const consultingDate = '24/10/25 오후 3시 ~ 오후 4시';

  return (
    <Box w="951px">
      <ConsultingItemTitle
        title="상담 신청 정보를 입력해주세요!"
        icon={document}
      />
      <VStack spacing="25px">
        <ConsultingTitleForm title={title} setTitle={setTitle} />
        <ConsultingDateForm date={consultingDate} />
        <Box mt="14px">
          <Text color="434343" fontSize="24px" fontWeight={800} mb="12px">
            상담 내용 작성하기
          </Text>
          <ConsultingContentForm content={content} setContent={setContent} />
        </Box>
      </VStack>
    </Box>
  );
};

const ConsultingTitleForm: React.FC<{
  title: string;
  setTitle: (value: string) => void;
}> = ({ title, setTitle }) => {
  const handleConfirm = () => {
    console.log('title: ', title);
  };

  return (
    <Flex
      w="817px"
      h="82px"
      bg="#EAF0FF"
      borderRadius={4}
      alignItems="center"
      p="0 19px 0 46px"
    >
      <Input
        border="none"
        p={0}
        _focus={{
          boxShadow: 'none',
        }}
        placeholder="제목을 작성해주세요."
        _placeholder={{
          color: 'rgba(23, 108, 255, 0.30)',
          fontSize: '24px',
        }}
        fontSize="24px"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <BoomerangButton
        w="98px"
        h="47px"
        fontSize="24px"
        onClick={handleConfirm}
      >
        확인
      </BoomerangButton>
    </Flex>
  );
};

const ConsultingDateForm = ({ date }: { date: string }) => (
  <Flex
    w="817px"
    h="82px"
    bg="#EAF0FF"
    borderRadius={4}
    alignItems="center"
    justifyContent="space-between"
    p="0 46px"
  >
    <Text color={BoomerangColors.deepBlue} fontSize="24px" fontWeight={800}>
      상담 일시
    </Text>
    <Text color="#484848" fontSize="24px" fontWeight="bold">
      {date}
    </Text>
  </Flex>
);

const ConsultingContentForm: React.FC<{
  content: string;
  setContent: (value: string) => void;
}> = ({ content, setContent }) => {
  const handleConfirm = () => {
    console.log('content: ', content);
  };

  return (
    <Flex
      w="817px"
      h="211px"
      bg="#EAF0FF"
      borderRadius={4}
      p="26px 19px 21px 46px"
      flexDir="column"
      justifyContent="space-between"
    >
      <Textarea
        border="none"
        p={0}
        _focus={{
          boxShadow: 'none',
        }}
        placeholder="상담 내용을 작성해주세요."
        _placeholder={{
          color: 'rgba(23, 108, 255, 0.30)',
          fontSize: '24px',
        }}
        fontSize="24px"
        resize="none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Box alignSelf="flex-end">
        <BoomerangButton
          w="98px"
          h="47px"
          fontSize="24px"
          onClick={handleConfirm}
        >
          확인
        </BoomerangButton>
      </Box>
    </Flex>
  );
};
