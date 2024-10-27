import { GuidelineProgressBarProps } from '@/components/Guideline/GuidelineProgressBar';
import { Box, Flex } from '@chakra-ui/react';

export const ProgressBar: React.FC<GuidelineProgressBarProps> = ({
  percent,
}) => (
  <Box h={'36px'} w={924} bgColor="#F1F1F1" borderRadius={199.8}>
    <Box
      h={'36px'}
      w={percent * 9.24}
      borderRadius={65}
      bgColor="#0042B6"
      position="absolute"
    />
    <Flex justifyContent="center" alignItems="center" gap={135.25} h={'36px'}>
      {Array.from({ length: 5 }, (_, index) => (
        <Box
          zIndex={3}
          key={index}
          bgColor="#C5DFFF"
          borderRadius={50}
          width={'22.5px'}
          height={'22.5px'}
        />
      ))}
    </Flex>
  </Box>
);
