import { Box } from '@chakra-ui/react';
import Logo from '../assets/logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box mb={20}>
      <Link to="/">
        <LogoImg src={Logo} />
      </Link>
    </Box>
  );
};

const LogoImg = styled.img`
  width: 15rem;
  height: 2.5rem;
`;
export default Header;
