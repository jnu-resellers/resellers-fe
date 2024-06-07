import { Box } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { BsFillHousesFill } from 'react-icons/bs';
import { BsPersonCircle } from 'react-icons/bs';
import { RiAuctionFill } from 'react-icons/ri';
import Logo from '@/assets/logo.png';
import styled from 'styled-components';
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

  const onLogin = () => {
    navigate('/signin');
  };
  const redirectToMyPage = () => {
    navigate('/me');
  };

  return (
    <Box mb={24} display="flex" justifyContent="space-between">
      <Link to="/">
        <LogoImg src={Logo} onClick={onLogoClick} />
      </Link>
      {showIconsAndTexts && (
        <Box display="flex" alignItems="center">
          <IconTextLink
            icon={BsPersonCircle}
            text={isNotLogin ? '로그인' : '마이페이지'}
            onClick={isNotLogin ? onLogin : redirectToMyPage}
          />
          <Box h={8} width="2px" bg="gray.600" mx={6} />
          <IconTextLink
            icon={EditIcon}
            text="판매하기"
            onClick={() => navigate('/product-form')}
          />
          <Box h={8} width="2px" bg="gray.600" mx={6} />
          <IconTextLink
            icon={RiAuctionFill}
            text="경매"
            onClick={() => navigate('/auction')}
          />
          <Box h={8} width="2px" bg="gray.600" mx={6} />
          <IconTextLink
            icon={BsFillHousesFill}
            text="커뮤니티"
            onClick={() => navigate('/community')}
          />
          <Box h={8} width="2px" bg="gray.600" mx={6} />
          <IconTextLink
            icon={FaTruck}
            text="배송 제휴"
            onClick={() => navigate('/delivery-partner')}
          />
        </Box>
      )}
    </Box>
  );
};

const LogoImg = styled.img`
  width: 15rem;
  height: 2.5rem;
  cursor: pointer;
`;

export default Header;
