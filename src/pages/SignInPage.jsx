import PageLayout from '@/layouts/PageLayout';
import styled from 'styled-components';
import { Button, theme, Text } from '@chakra-ui/react';
import Logo from '@/assets/logo.png';
import FormInput from '@/components/Form/FormInput';
import { Link } from 'react-router-dom';

const SigninPage = () => {
  return (
    <PageLayout>
      <CenterContainer>
        <Link to="/">
          <LogoImg src={Logo} />
        </Link>
        <FormInput smallSize="true" title="아이디" placeholder="상품명 작성" />
        <FormInput smallSize title="비밀번호" placeholder="상품명 작성" />
        <Button
          mt={12}
          px={64}
          py={4}
          color="white"
          bgColor={theme.colors.orange[300]}
        >
          로그인
        </Button>
        <Link to="/signup">
          <Text p={2} mt={4} color="#5a5a5a">
            계정 생성하기
          </Text>
        </Link>
      </CenterContainer>
    </PageLayout>
  );
};

export default SigninPage;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

const LogoImg = styled.img`
  width: 15rem;
  height: 2.5rem;
  cursor: pointer;
  margin-bottom: 5rem;
`;
