import { Flex, Text } from '@chakra-ui/react';

export interface ConsultingInfoItem {
  title: string;
  content: string;
}

//TODO: overflow인 경우 그라이데이션 추가
export const ConsultingInfoBox = ({
  infoList,
}: {
  infoList: ConsultingInfoItem[];
}) => {
  return (
    <Flex
      w="883px"
      h="183px"
      bg="#F3F3F3"
      flexDir="column"
      p="33px 58px"
      gap="13px"
      overflowY="auto"
      position="relative"
    >
      {infoList.map((item) => (
        <ConsultingInfoItem
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}
    </Flex>
  );
};

const ConsultingInfoItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => (
  <Flex fontSize="20px" fontWeight="bold" color="#176CFF" gap="210px">
    <Text w="79px">{title}</Text>
    <Text color="#777" maxW="450px">
      {content}
    </Text>
  </Flex>
);
