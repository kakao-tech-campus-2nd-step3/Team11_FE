import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MentorCharge } from '@/components/Sidebar/sidebarIcons/MentorCharge';
import { MentorEmergency } from '@/components/Sidebar/sidebarIcons/MentorEmergency';
import { MentorMessage } from '@/components/Sidebar/sidebarIcons/MentorMessage';
import { MentorPeople } from '@/components/Sidebar/sidebarIcons/MentorPeople';
import { MentorSearch } from '@/components/Sidebar/sidebarIcons/MentorSearch';
import { ROUTER_PATH } from '@/routerPath';
import { BoomerangColors } from '@/utils/colors';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import SidebarArrowClose from '@images/SidebarArrowClose.svg?react';
import blueArrow2 from '@images/blueArrow2.svg';
import profileImg from '@images/profileImg.svg';

export const Sidebar: React.FC<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}> = ({ isOpen, setIsOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const sidebarCategories = [
    {
      title: '멘토 선택하기',
      icon: MentorPeople,
      path: ROUTER_PATH.SELECT_MENTOR,
    },
    {
      title: '상담 진행하기',
      icon: MentorMessage,
      path: ROUTER_PATH.CONSULTING_START,
    },
    {
      title: '과거 상담 내용 조회하기',
      icon: MentorSearch,
      path: '',
    },
    {
      title: '불편 사항 신고',
      icon: MentorEmergency,
      path: '',
    },
    {
      title: '포인트 충전하기',
      icon: MentorCharge,
      path: '',
    },
  ];

  const handleButtonClick = (category: string, path: string) => {
    setSelectedCategory(category);
    navigate(path);
  };

  return (
    <Box
      as="nav"
      bg="#EBF1F5"
      w={isOpen ? '353px' : '0'}
      transition="width 0.5s"
      h="calc(100vh - 55px)"
      position="sticky"
      top="55px"
      left="0"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <VStack spacing={0}>
        <IconButton
          icon={<SidebarArrowClose />}
          aria-label="사이드바 닫기"
          onClick={() => setIsOpen(!isOpen)}
          alignSelf="flex-end"
          mt="25px"
          mr="20px"
          opacity={isHovered ? 1 : 0}
        />
        <UserProfileSection />
        <Box height="59px" w="100%" borderBottom="0.8px solid #BCD1DF" />
        {sidebarCategories.map((category) => (
          <Button
            key={category.title}
            w="100%"
            h="72px"
            gap="8px"
            borderBottom="0.8px solid #BCD1DF"
            borderRadius={0}
            onClick={() => handleButtonClick(category.title, category.path)}
            bg={category.title === selectedCategory ? '#B1D7F1' : 'none'}
          >
            <category.icon
              color={
                category.title === selectedCategory ? '#005DFF' : '#6B6B6B'
              }
            />
            <Text
              fontWeight="bold"
              fontSize="20px"
              color={
                category.title === selectedCategory ? '#005DFF' : '#6B6B6B'
              }
            >
              {category.title}
            </Text>
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

const UserProfileSection = () => {
  const user = {
    name: '유저 닉네임',
    type: '일반',
    profile: profileImg,
  };

  return (
    <Box mt="23px">
      <Flex alignItems="center" gap="15px">
        <Image src={user.profile ? user.profile : profileImg} />
        <Box>
          <Text fontWeight={800} fontSize="20px" color="#4D4D4D">
            {user.name}
          </Text>
          <Text fontSize="15px" color="#4D4D4D">
            {user.type} 사용자
          </Text>
        </Box>
      </Flex>
      <Button
        borderRadius="7px"
        bg={BoomerangColors.white}
        border="1px solid #BFBFBF"
        w="266px"
        h="52px"
        mt="28px"
      >
        <Text fontSize="18px" fontWeight="bold" color="#6B6B6B">
          {user.type} 사용자
        </Text>
        <Image src={blueArrow2} position="absolute" top="13px" right="17px" />
      </Button>
    </Box>
  );
};
