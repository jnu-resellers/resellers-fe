import { Box } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { RiAuctionFill } from 'react-icons/ri';
import Logo from '@/assets/logo.png';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import IconTextLink from './IconTextLink';
import { useState } from 'react';
import { LS_MEMBER_ID } from 'src/constants/lsKey';

interface HeaderProps {
  showIconsAndTexts: boolean;
  onLogoClick?: () => void;
}

const Header = ({ showIconsAndTexts, onLogoClick }: HeaderProps) => {
  const navigate = useNavigate();
  const [isNotLogin, setIsNotLogin] = useState<boolean>(
    !localStorage.getItem(LS_MEMBER_ID)
  );
  const onLogin = () => {
    navigate('/signin');
  };
  const onLogout = () => {
    localStorage.removeItem(LS_MEMBER_ID);
    setIsNotLogin(true);
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <Box mb={24} display="flex" justifyContent="space-between">
      <Link to="/">
        <LogoImg src={Logo} onClick={onLogoClick} />
      </Link>
      {showIconsAndTexts && (
        <Box display="flex" alignItems="center">
          <IconTextLink
            icon={IoPersonCircleOutline}
            text={isNotLogin ? '로그인' : '로그아웃'}
            onClick={isNotLogin ? onLogin : onLogout}
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
