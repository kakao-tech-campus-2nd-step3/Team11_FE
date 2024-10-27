import { GuidelineProgressBarProps } from '@/components/Guideline/GuidelineProgressBar';
import { Box, Text } from '@chakra-ui/react';

export const Percentage: React.FC<GuidelineProgressBarProps> = ({
  percent,
}) => (
  <Box>
    <Text fontSize={'20px'} fontWeight="bold" color="rgba(255, 255, 255, 0.89)">
      현재 진행 상황도
    </Text>
    <Text fontSize={'45px'} fontWeight={800} color="#FFF" lineHeight={'60px'}>
      {percent}%
    </Text>
  </Box>
);
