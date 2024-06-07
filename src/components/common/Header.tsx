import {
  Box,
  Flex,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  Image,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { EditIcon, HamburgerIcon } from '@chakra-ui/icons';
import { BsFillHousesFill } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import { RiAuctionFill } from 'react-icons/ri';
import Logo from '@/assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import IconTextLink from './IconTextLink';
import { LS_MEMBER_ID } from 'src/constants/lsKey';
import { FaTruck } from 'react-icons/fa';

interface HeaderProps {
  showIconsAndTexts: boolean;
  onLogoClick?: () => void;
}

const Header = ({ showIconsAndTexts, onLogoClick }: HeaderProps) => {
  const navigate = useNavigate();
  const isNotLogin = !localStorage.getItem(LS_MEMBER_ID);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onLogin = () => {
    navigate('/signin');
  };
  const redirectToMyPage = () => {
    navigate('/me');
  };

  const mb = useBreakpointValue({ base: 4, md: 0 });
  const flexProps = useBreakpointValue({
    base: { w: '100%', justifyContent: 'space-between', alignItems: 'center' },
    md: {},
  });

  return (
    <Box
      mb={{ base: 12, md: 24 }}
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex {...flexProps}>
        <Link to="/">
          <Image
            src={Logo}
            onClick={onLogoClick}
            width={{ base: '12rem', md: '15rem' }}
            height={{ base: '2rem', md: '2.5rem' }}
            cursor="pointer"
          />
        </Link>
        <IconButton
          aria-label="메뉴 열기"
          icon={<HamburgerIcon />}
          fontSize="2rem"
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
          bg="transparent"
          color="#FBD38D"
          mb={1}
          justifyContent="flex-end"
        />
      </Flex>
      {showIconsAndTexts && (
        <>
          <Box
            display={{ base: 'none', md: 'flex' }}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'flex-start', md: 'center' }}
            mt={{ base: 4, md: 0 }}
          >
            <IconTextLink
              icon={BsPersonCircle}
              text={isNotLogin ? '로그인' : '마이페이지'}
              onClick={isNotLogin ? onLogin : redirectToMyPage}
              mb={mb}
            />
            <Box
              h={8}
              width="2px"
              bg="gray.600"
              mx={6}
              display={{ base: 'none', md: 'block' }}
            />
            <IconTextLink
              icon={EditIcon}
              text="판매하기"
              onClick={() => navigate('/product-form')}
              mb={mb}
            />
            <Box
              h={8}
              width="2px"
              bg="gray.600"
              mx={6}
              display={{ base: 'none', md: 'block' }}
            />
            <IconTextLink
              icon={RiAuctionFill}
              text="경매"
              onClick={() => navigate('/auction')}
              mb={mb}
            />
            <Box
              h={8}
              width="2px"
              bg="gray.600"
              mx={6}
              display={{ base: 'none', md: 'block' }}
            />
            <IconTextLink
              icon={BsFillHousesFill}
              text="커뮤니티"
              onClick={() => navigate('/community')}
              mb={mb}
            />
            <Box
              h={8}
              width="2px"
              bg="gray.600"
              mx={6}
              display={{ base: 'none', md: 'block' }}
            />
            <IconTextLink
              icon={FaTruck}
              text="배송 제휴"
              onClick={() => navigate('/delivery-partner')}
              mb={mb}
            />
          </Box>
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton mt={1} />
              <DrawerHeader>메뉴</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="flex-start">
                  <IconTextLink
                    icon={BsPersonCircle}
                    text={isNotLogin ? '로그인' : '마이페이지'}
                    onClick={
                      isNotLogin
                        ? () => {
                            onLogin();
                            onClose();
                          }
                        : () => {
                            redirectToMyPage();
                            onClose();
                          }
                    }
                    mb={mb}
                  />
                  <IconTextLink
                    icon={EditIcon}
                    text="판매하기"
                    onClick={() => {
                      navigate('/product-form');
                      onClose();
                    }}
                    mb={mb}
                  />
                  <IconTextLink
                    icon={RiAuctionFill}
                    text="경매"
                    onClick={() => {
                      navigate('/auction');
                      onClose();
                    }}
                    mb={mb}
                  />
                  <IconTextLink
                    icon={BsFillHousesFill}
                    text="커뮤니티"
                    onClick={() => {
                      navigate('/community');
                      onClose();
                    }}
                    mb={mb}
                  />
                  <IconTextLink
                    icon={FaTruck}
                    text="배송 제휴"
                    onClick={() => {
                      navigate('/delivery-partner');
                      onClose();
                    }}
                    mb={mb}
                  />
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )}
    </Box>
  );
};

export default Header;
