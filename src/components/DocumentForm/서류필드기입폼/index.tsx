import { DocumentAcionButton } from '@/components/DocumentForm/서류필드기입폼/DocumentAcionButton';
import { HoverBox } from '@/components/DocumentForm/서류필드기입폼/HoverBox';
import { FormProps } from '@/pages/DocumentForm';
import { BoomerangColors } from '@/utils/colors';
import { Box, Flex, Image, Input, Text, VStack } from '@chakra-ui/react';
import mesasgeIcon from '@images/questionMessage.svg';

export const 서류필드기입폼: React.FC<FormProps> = ({
  title,
  description,
  image,
  fields,
}) => {
  return (
    <Box mt="20px">
      <VStack h="75px" bg="#176CFF" justifyContent="center">
        <Text fontSize="32px" fontWeight="bold" color={BoomerangColors.white}>
          {title} 서류 작성
        </Text>
      </VStack>
      <Flex bg={BoomerangColors.white} p="49px 41px 0" gap="64px">
        <Image w="335px" h="480px" src={image} mt="58px" mb="50px" />
        <Flex flexDir="column" justifyContent="space-between">
          <Box>
            <Flex gap="15px" mb="24px" position="relative" role="group">
              <Image src={mesasgeIcon} w={27} />
              <Text fontSize="20px" fontWeight="bold" color="#303030">
                {title}는 어떤 서류인가요?
              </Text>
              <HoverBox description={description} />
            </Flex>
            <VStack gap="22px">
              {fields.map((field) => (
                <DocumentInput key={field.id} label={field.label} />
              ))}
            </VStack>
          </Box>
          <Box alignSelf="flex-end" mt="30px" mb="16px">
            <DocumentAcionButton w="139px" h="49px" fontSize="24px">
              저장하기
            </DocumentAcionButton>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

const DocumentInput: React.FC<{ label: string }> = ({ label }) => (
  <Box>
    <Text fontSize="14px" fontWeight={800} color={BoomerangColors.deepBlue}>
      {label}
    </Text>
    <Flex borderBottom="1.5px solid #7FADFF" w="533px" mt="3px" pr="17px">
      <Input
        fontSize={'20px'}
        border={'none'}
        borderRadius={0}
        _focus={{
          boxShadow: 'none',
        }}
      />
      <DocumentAcionButton w="58px" h="29px" fontSize="16px">
        확인
      </DocumentAcionButton>
    </Flex>
  </Box>
);
