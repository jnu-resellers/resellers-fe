import PageLayout from '@/layouts/PageLayout';
import styled from 'styled-components';
import { Button, theme, Text } from '@chakra-ui/react';
import Logo from '@/assets/logo.png';
import FormInput from '@/components/Form/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { PostLoginReq, PostLoginRes, postLogin } from 'src/apis/auth';
import { AxiosError } from 'axios';

const SigninPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const { mutate } = useMutation<PostLoginRes, AxiosError, PostLoginReq>({
    mutationFn: postLogin,
    onSuccess: (data) => {
      localStorage.setItem('userId', data.response.toString());
      navigate('/');
    },
    onError: (error) => {
      const errResponse = error.response?.data as PostLoginRes;
      console.log(errResponse);
      if (!errResponse) {
        alert('서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
        return;
      } else if (errResponse.error.status === '400 BAD_REQUEST') {
        alert('아이디와 비밀번호를 확인해주세요.');
        return;
      }
    },
  });

  const handleLogin = () => {
    mutate({ email: id, password: password });
  };

  return (
    <PageLayout>
      <CenterContainer>
        <Link to="/">
          <LogoImg src={Logo} />
        </Link>
        <FormInput
          smallSize={true}
          title="아이디"
          placeholder="상품명 작성"
          value={id}
          onChange={handleIdChange}
        />
        <FormInput
          smallSize={true}
          title="비밀번호"
          type="password"
          placeholder="상품명 작성"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          mt={12}
          px={64}
          py={4}
          color="white"
          bgColor={theme.colors.orange[300]}
          onClick={handleLogin}
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
  margin-top: 8rem;
`;

const LogoImg = styled.img`
  width: 15rem;
  height: 2.5rem;
  cursor: pointer;
  margin-bottom: 5rem;
`;
