import PageLayout from '@/layouts/PageLayout';
import styled from 'styled-components';
import { Button, theme, Text, Flex } from '@chakra-ui/react';
import Logo from '@/assets/logo.png';
import FormInput from '@/components/Form/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { PostLoginReq, PostLoginRes, postLogin } from 'src/apis/auth';
import { AxiosError } from 'axios';
import { LS_MEMBER_ID } from 'src/constants/lsKey';

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
      localStorage.setItem(LS_MEMBER_ID, data.response.toString());
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
      <Flex
        w="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={{ base: '12', md: '24' }}
      >
        <Link to="/">
          <LogoImg src={Logo} />
        </Link>
        <FormInput
          smallSize={true}
          title="아이디"
          placeholder="아이디 입력"
          value={id}
          onChange={handleIdChange}
        />
        <FormInput
          smallSize={true}
          title="비밀번호"
          type="password"
          placeholder="비밀번호 입력"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          mt={12}
          color="white"
          bgColor={theme.colors.orange[300]}
          onClick={handleLogin}
          w="70%"
        >
          로그인
        </Button>
        <Link to="/signup">
          <Text p={2} mt={4} color="#5a5a5a">
            계정 생성하기
          </Text>
        </Link>
      </Flex>
    </PageLayout>
  );
};

export default SigninPage;

const LogoImg = styled.img`
  width: 15rem;
  height: 2.5rem;
  cursor: pointer;
  margin-bottom: 5rem;
`;
