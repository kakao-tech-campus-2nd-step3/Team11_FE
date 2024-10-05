import { IFlexBox } from '@components/MainSection/IFlexBox';

import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import Note from '@images/note.svg?react';
import pen from '@images/pen.svg';

import styles from './index.module.css';

export const LatestReviews: React.FC = ({ flex, children }: IFlexBox) => (
  <Box
    flex={flex}
    ml={25}
    borderRadius={20}
    bg={BoomerangColors.white}
    boxShadow="xs"
  >
    <BoxHeader />
    <VStack pt={35}>{children}</VStack>
  </Box>
);

const BoxHeader = () => (
  <Flex
    bg={BoomerangColors.blue}
    pl={12}
    h={75}
    alignItems="center"
    borderTopRadius={20}
    className={styles['review--header']}
  >
    <Text color={BoomerangColors.white} fontSize={24} as="b" pr={1}>
      최신 후기
    </Text>
    <img alt="image of a pen" src={pen} />
    <Note />
  </Flex>
);
