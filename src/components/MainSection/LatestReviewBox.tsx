import React, { ReactNode } from 'react';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

import styles from './index.module.css';

export interface ILatestReviewBox {
  comment: string;
  img: string;
  username: string;
}

export const LatestReviewBox = ({
  comment,
  img,
  username,
}: ILatestReviewBox) => (
  <Flex
    p={2}
    w={544}
    h={117}
    alignItems="center"
    justifyContent="space-between"
  >
    <LightBlueCommentBox>
      <Text whiteSpace="pre-line" fontWeight={700}>
        {comment}
      </Text>
    </LightBlueCommentBox>
    <SimpleUserProfile img={img} username={username} />
  </Flex>
);

const LightBlueCommentBox: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <Flex
    w="max-content"
    h={75}
    bg="#E7F4FF"
    borderRadius={34}
    alignItems="center"
    justifyContent="center"
    borderTopLeftRadius={1}
    pl={10}
    pr={10}
    className={styles.jump}
    style={{ animationDelay: `${Math.random().toFixed(1)}s` }} // 딜레이 설정
  >
    {children}
  </Flex>
);

const SimpleUserProfile: React.FC<{ img: string; username: string }> = ({
  img,
  username,
}) => (
  <Box textAlign="center">
    <Image
      boxSize="90px"
      objectFit="cover"
      src={img}
      alt="picture of figure representing reviewer"
    />
    <Text fontSize="11px" as="b">
      {username}
    </Text>
  </Box>
);
