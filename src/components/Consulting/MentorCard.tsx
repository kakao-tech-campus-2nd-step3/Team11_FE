import { BoomerangButton } from '@/components/commons/BoomerangButton';
import { Flex, Image, Text, VStack } from '@chakra-ui/react';
import businessman from '@images/businessman.svg';

interface MentorCardProps {
  name: string;
  matchingCount: number;
}

export const MentorCard: React.FC<
  MentorCardProps & { w: string; h: string }
> = ({ w, h, name, matchingCount }) => {
  const navigateConsulting = () => {
    console.log('navigateConsulting');
  };

  return (
    <VStack
      w={w}
      h={h}
      borderRadius={19}
      bg="#FFF"
      shadow="0px 0px 3.7px rgba(0, 0, 0, 0.31)"
      p="20px 0"
    >
      <Flex gap="20px">
        <Image src={businessman} />
        <Flex flexDir="column" gap="5px" mt="10px">
          <Text fontWeight={800} fontSize="20px" color="#5C5C5C">
            {name}
            <Text fontSize="15px" color="#A2A2A2" as="span">
              ({matchingCount})
            </Text>
          </Text>
          <Text fontWeight={800} fontSize="20px" color="#383838" mb="15px">
            매칭건수 총
            <Text color="#188EFF" as="span">
              {matchingCount}
            </Text>
            회
          </Text>
          <BoomerangButton
            w="127px"
            h="41px"
            fontSize="16px"
            onClick={navigateConsulting}
          >
            상담하러 가기
          </BoomerangButton>
        </Flex>
      </Flex>
    </VStack>
  );
};
