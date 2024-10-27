import { RequireDocPropsWithState } from '@/components/Guideline/GuidelineChecklist';
import { Box, Checkbox, Flex, Image, Text, VStack } from '@chakra-ui/react';
import arrowDown from '@images/arrow.svg';
import arrowUp from '@images/arrowUp.svg';

export const RequireDoc: React.FC<RequireDocPropsWithState> = ({
  name,
  subName,
  value,
  description,
  isOpen,
  onToggle,
  onCheck,
}) => (
  <VStack align={'stretch'} spacing={0}>
    <Flex
      pl={'37px'}
      pr={'37px'}
      pt={'20px'}
      pb={'20px'}
      borderBottom="1.3px solid #D4D4D8"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex alignItems="center" gap={17}>
        <Image
          src={isOpen ? arrowUp : arrowDown}
          w={'28px'}
          h={'18px'}
          onClick={onToggle}
          cursor={'pointer'}
        />
        <VStack alignItems={'flex-start'} spacing={0}>
          <Text
            color="#434343"
            fontSize={'19.5px'}
            fontWeight={800}
            lineHeight={'22px'}
            w={250}
          >
            {name}
          </Text>
          <Text fontSize={14} color={'#787878'}>
            {subName}
          </Text>
        </VStack>
      </Flex>

      <Checkbox
        isChecked={value}
        onChange={onCheck}
        iconColor="white"
        colorScheme="#176CFF"
        sx={{
          '& .chakra-checkbox__control': {
            bg: '#D9D9D9',
            border: 'none',
            width: '31px',
            height: '31px',
            borderRadius: 5,
          },
          '& .chakra-checkbox__control[data-checked]': {
            bg: '#176CFF',
          },
          '& .chakra-checkbox__control svg': {
            width: '22px',
            height: '22px',
          },
        }}
      />
    </Flex>

    <Box
      borderBottomRadius={38}
      bg={'#E9E9E9'}
      h={isOpen ? '504px' : '0px'}
      opacity={isOpen ? 1 : 0}
      visibility={isOpen ? 'visible' : 'hidden'}
      transition="all .3s ease-in-out"
      pr={isOpen ? '48px' : '0px'}
      pb={isOpen ? '18px' : '0px'}
      pl={isOpen ? '48px' : '0px'}
      pt={isOpen ? '18px' : '0px'}
    >
      <Text fontSize={'19px'} fontWeight={700}>
        {description}
      </Text>
    </Box>
  </VStack>
);
