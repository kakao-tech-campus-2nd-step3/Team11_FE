import { Flex, Image, Text } from '@chakra-ui/react';
import businessman from '@images/businessman.svg';

const MentorDetail = {
  name: '김땡땡',
  matchingCount: 33,
  career: [
    { id: 1, content: '현재 ** 관련 자격 및 관련 종사 설명' },
    { id: 2, content: '현재 ** 관련 자격 및 관련 종사 설명' },
  ],
};

export const MentorDetailCard = () => {
  return (
    <Flex
      alignItems="center"
      w="879px"
      h="206px"
      borderRadius={19}
      bg="#FFF"
      shadow="0px 0px 3.7px rgba(0, 0, 0, 0.31)"
      justifyContent="flex-start"
      pl="133px"
    >
      <Flex gap="85px" alignItems="flex-start">
        <Image src={businessman} w="108px" h="128px" />
        <Flex flexDir="column" mt="10px">
          <Text fontWeight={800} fontSize="20px" color="#5C5C5C">
            {MentorDetail.name}
            <Text fontSize="15px" color="#A2A2A2" as="span">
              ({MentorDetail.matchingCount})
            </Text>
          </Text>
          <Text fontWeight={800} fontSize="20px" color="#383838" mb="8px">
            매칭건수 총
            <Text color="#188EFF" as="span">
              {MentorDetail.matchingCount}
            </Text>
            회
          </Text>
          {MentorDetail.career.map((career) => (
            <Text
              key={career.id}
              fontWeight="bold"
              fontSize="18px"
              color="#383838"
              lineHeight="20px"
            >
              {career.content}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
