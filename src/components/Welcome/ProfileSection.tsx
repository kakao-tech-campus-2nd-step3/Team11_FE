import { Flex, Image, Input, Text, VStack } from '@chakra-ui/react';
import pen from '@images/pen2.svg';

const user = {
  nickname: '기러기123',
};

export const ProfileSection = () => {
  return (
    <VStack>
      <Text color={'#474747'} fontSize={'30px'} fontWeight={800} mt={'120px'}>
        환영합니다!
      </Text>
      <Flex borderBottom={'1px solid #D4D4D8'} mt={'40px'}>
        <Input
          placeholder={`${user.nickname} 님`}
          fontSize={'20px'}
          border={'none'}
          borderRadius={0}
          _focus={{
            boxShadow: 'none',
          }}
        />
        <Image src={pen} />
      </Flex>
    </VStack>
  );
};
