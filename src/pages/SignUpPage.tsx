import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/common/Header';
import PageTitle from '@/components/Form/PageTitle';
import { Box, Button, theme, Flex } from '@chakra-ui/react';
import FormInput from '@/components/Form/FormInput';
import { useNavigate } from 'react-router-dom';
import useSignUpForm from '@/hooks/SignUp/useSignUpForm';
import { useMutation } from '@tanstack/react-query';
import { postSignUp } from 'src/apis/auth';

const SignUpPage = () => {
  const { state, onChange } = useSignUpForm();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: postSignUp,
    onSuccess: () => {
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    },
    onError: () => {
      // TODO: 이유 추가
      alert('회원가입에 실패하였습니다.');
    },
  });

  const onSubmitSignUp = () => {
    const {
      name,
      email,
      password,
      passwordConfirm,
      bankName,
      accountNumber,
      contact,
    } = state;
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    mutate({
      name,
      email,
      password,
      bankName,
      accountNumber,
      contact,
    });
  };
  return (
    <PageLayout>
      <Header showIconsAndTexts={true} />
      <PageTitle title="회원 가입" />
      <Box my={12}>
        <FormInput
          smallSize
          title="닉네임"
          placeholder="닉네임"
          onChange={onChange('name')}
          value={state.name}
        />
        <Flex>
          <Box>
            <FormInput
              smallSize
              title="아이디"
              placeholder="아이디"
              onChange={onChange('email')}
              value={state.email}
            />
          </Box>
          <Button
            ml={8}
            color="black"
            bgColor="white"
            border="1px"
            borderColor="gray.300"
          >
            중복 확인
          </Button>
        </Flex>
        <FormInput
          type="password"
          smallSize
          title="비밀번호"
          placeholder="비밀번호"
          onChange={onChange('password')}
          value={state.password}
        />
        <FormInput
          type="password"
          smallSize
          title="비밀번호 확인"
          placeholder="비밀번호"
          onChange={onChange('passwordConfirm')}
          value={state.passwordConfirm}
        />
        <FormInput
          smallSize
          title="은행명"
          placeholder="은행명"
          onChange={onChange('bankName')}
          value={state.bankName}
        />
        <FormInput
          smallSize
          title="계좌번호"
          placeholder="계좌번호"
          onChange={onChange('accountNumber')}
          value={state.accountNumber}
        />
      </Box>

      <Button
        px={64}
        py={4}
        color="white"
        bgColor={theme.colors.orange[300]}
        onClick={onSubmitSignUp}
      >
        회원가입
      </Button>
    </PageLayout>
  );
};

export default SignUpPage;
