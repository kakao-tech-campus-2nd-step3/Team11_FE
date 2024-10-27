import { BarGraphBox } from '@/components/Guideline/GuidelineStatistics/BarGraph';
import { StatisticsHeader } from '@/components/Guideline/GuidelineStatistics/StatisticsHeader';
import { PropH } from '@/components/commons/types';
import { Flex, Image, Text } from '@chakra-ui/react';
import logo from '@images/logo2.svg';

export const GuidelineStatistics: React.FC<PropH> = ({ h }) => (
  <Flex
    bgGradient={'linear(to-b,#C8E6FF 6%, #D6ECFF 21%, #F7F7F7 100%)'}
    h={h}
    borderRadius={45}
    flexDirection={'column'}
    pl={71}
    pr={71}
  >
    <StatisticsHeader />
    <Flex mt={'52px'} gap={'28px'} flexDir={'column'}>
      <BarGraphBox period={2}>
        <Image src={logo} />
      </BarGraphBox>
      <BarGraphBox period={4}>
        <Text
          fontSize={'22px'}
          fontWeight={800}
          color={'#565656'}
          w={'166.22px'}
          textAlign={'center'}
        >
          일반인
        </Text>
      </BarGraphBox>
    </Flex>
  </Flex>
);
