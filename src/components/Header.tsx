import { Box, Icon, Text } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { RiAuctionFill } from 'react-icons/ri';
import Logo from '@/assets/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface HeaderProps {
  showIconsAndTexts: boolean;
}

const Header = ({ showIconsAndTexts }: HeaderProps) => {
  return (
    <Box
      mb={24}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link to="/">
        <LogoImg src={Logo} />
      </Link>
      {showIconsAndTexts && (
        <Box display="flex" alignItems="center">
          <Icon as={EditIcon} w={6} h={6} ml={4} mr={2} />
          <Text fontSize="xl" fontWeight="bold">
            판매하기
          </Text>
          <Box h={8} width="2px" bg="gray.600" mx={6} />
          <Icon as={RiAuctionFill} w={6} h={6} mr={2} />
          <Text fontSize="xl" fontWeight="bold">
            경매
          </Text>
        </Box>
      )}
    </Box>
  );
};

const LogoImg = styled.img`
  width: 15rem;
  height: 2.5rem;
`;

export default Header;
