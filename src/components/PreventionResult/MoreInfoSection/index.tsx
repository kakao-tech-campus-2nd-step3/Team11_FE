import { MoreInfoBox } from '@/components/PreventionResult/MoreInfoSection/MoreInfoBox';
import { Box, Grid, Text } from '@chakra-ui/react';
import bell from '@images/bell.svg';
import clip from '@images/clip.svg';
import homeOwner from '@images/homeowner.svg';
import judgeStick from '@images/judgeStick.svg';

const moreInfoData = [
  {
    title: '집주인은 누구?',
    subtitle: '집주인을 조회해드릴게요.',
    icon: homeOwner,
  },
  {
    title: '전세사기,\n경매 이후라면?',
    subtitle: '부메랑 서비스를 이용해요.',
    icon: judgeStick,
  },
  {
    title: '등기부등본 변경시\n알림 서비스',
    subtitle: '변경 시 알림을 전송해요.',
    icon: bell,
  },
  {
    title: '보증 보험 가입서',
    subtitle: '보험이 없어요.',
    icon: clip,
  },
];
export const MoreInfoSection = () => {
  return (
    <Box h={'503px'} mb={'64px'} p="44px 94px 69px">
      <Text fontSize="35px" fontWeight={800} color="#424242">
        <Text color="#176CFF" as="span">
          더 많은 정보
        </Text>
        가 궁금하다면?
      </Text>
      <Grid
        mt="16px"
        templateColumns="repeat(2, 1fr)"
        rowGap="23px"
        columnGap="87px"
      >
        {moreInfoData.map((data) => (
          <MoreInfoBox
            title={data.title}
            subtitle={data.subtitle}
            icon={data.icon}
          />
        ))}
      </Grid>
    </Box>
  );
};
