import React from 'react';

import { BoomerangColors } from '@/utils/colors';
import { Button, ButtonGroup } from '@chakra-ui/react';

interface SortButtonProps {
  label: string;
  isActive: boolean;
}

const SortButton: React.FC<SortButtonProps> = ({ label, isActive }) => (
  <Button
    px={6}
    py={3.5}
    borderRadius="3xl"
    fontWeight="bold"
    bg={isActive ? BoomerangColors.deepBlue : 'blue.50'}
    color={isActive ? 'white' : BoomerangColors.deepBlue}
    borderColor={BoomerangColors.deepBlue}
    borderWidth={isActive ? '0' : '2px'}
    _hover={{ bg: isActive ? BoomerangColors.deepBlue : 'blue.100' }}
  >
    {label}
  </Button>
);

const SortButtons: React.FC = () => (
  <ButtonGroup spacing={2.5} flexShrink={0}>
    <SortButton label="최신 순" isActive />
    <SortButton label="댓글 순" isActive={false} />
    <SortButton label="추천 순" isActive={false} />
  </ButtonGroup>
);

export default SortButtons;
