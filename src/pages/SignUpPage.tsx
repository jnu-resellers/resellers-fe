import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/common/Header';
import PageTitle from '@/components/Form/PageTitle';
import { Box, Button, theme, Flex, Text, Card } from '@chakra-ui/react';
import FormInput from '@/components/Form/FormInput';
import { useNavigate } from 'react-router-dom';
import useSignUpForm from '@/hooks/SignUp/useSignUpForm';
import { useMutation } from '@tanstack/react-query';
import { getDuplicateId, postSignUp } from 'src/apis/auth';

const SignUpPage = () => {
  const { state, onChange, enableEmail, disableEmail } = useSignUpForm();
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
      isEnableEmail,
      contact,
    } = state;

    if (!isEnableEmail) {
      alert('아이디 중복 확인을 눌러주세요.');
      return;
    }

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!name || !password || !passwordConfirm || !bankName || !accountNumber) {
      alert('빈 칸 없이 입력해주세요.');
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

  const onCheckDuplicated = () => {
    getDuplicateId({ email: state.email }).then((res) => {
      if (res.response === '사용 가능한 아이디입니다.') {
        enableEmail();
        alert('중복확인이 완료되었습니다.');
        return;
      }
      if (res.response === '중복된 아이디입니다.') {
        disableEmail();
        alert('중복된 아이디입니다.');
      }
    });
  };

  return (
    <PageLayout>
      <Header showIconsAndTexts={true} />
      <PageTitle title="회원 가입" />
      <Flex my={12} flexDirection="column">
        <FormInput
          smallSize
          title="닉네임"
          placeholder="닉네임"
          onChange={onChange('name')}
          value={state.name}
        />
        <Flex flexDirection="column">
          <FormInput
            smallSize
            title="아이디"
            placeholder="아이디"
            onChange={onChange('email')}
            value={state.email}
          />
          <Flex
            align={{ base: 'center', md: '' }}
            mb={10}
            gap={{ base: '4', md: '0' }}
          >
            <Button
              color="black"
              bgColor="white"
              border="1px"
              borderColor="gray.300"
              onClick={onCheckDuplicated}
            >
              중복 확인
            </Button>
            <Text
              fontSize="0.8rem"
              mt={2}
              ml={4}
              color={state.isEnableEmail ? 'green' : 'red'}
            >
              {state.isEnableEmail
                ? '중복확인이 완료되었습니다.'
                : 'id 중복확인을 해주세요.'}
            </Text>
          </Flex>
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
        <Button
          color="white"
          bgColor={theme.colors.orange[300]}
          onClick={onSubmitSignUp}
          w={{ base: '15rem', sm: '15rem', md: '15rem', lg: '21.5rem' }}
          alignSelf="center"
        >
          회원가입
        </Button>
      </Flex>
    </PageLayout>
  );
};

export default SignUpPage;
