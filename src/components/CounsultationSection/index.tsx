import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

import React, { useRef } from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Button, Image, Text, VStack } from '@chakra-ui/react';
import consult1 from '@images/consult1.svg';
import consult2 from '@images/consult2.svg';
import consult3 from '@images/consult3.svg';
import consult4 from '@images/consult4.svg';

import styles from './index.module.css';

export const ConsultationSection: React.FC = () => {
  const imageRefs = useRef<HTMLImageElement[]>([]);

  useIntersectionObserver(imageRefs, 0.5, '10% 0px -15% 0px');

  const setImageRefAtIndex =
    (index: number) => (el: HTMLImageElement | null) => {
      if (el) {
        imageRefs.current[index] = el;
      }
    };

  return (
    <VStack
      h={470}
      bg={BoomerangColors.white}
      boxShadow="md"
      borderRadius={20}
      pt={30}
      className={styles.block}
      spacing={4}
    >
      <Image
        ref={setImageRefAtIndex(0)}
        mr={200}
        alt="consultation1"
        src={consult1}
      />
      <Image
        ref={setImageRefAtIndex(1)}
        ml={200}
        alt="consultation2"
        src={consult2}
      />
      <Image ref={setImageRefAtIndex(2)} alt="consultation3" src={consult3} />
      <Image ref={setImageRefAtIndex(3)} alt="consultation4" src={consult4} />
      <Button ref={setImageRefAtIndex(4)} bg={BoomerangColors.blue}>
        <Text color={BoomerangColors.white} fontSize="24px">
          전문가와 상담해보기
        </Text>
      </Button>
    </VStack>
  );
};
