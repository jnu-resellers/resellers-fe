import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/common/Header';
import PageTitle from '@/components/Form/PageTitle';
import { Box, Button, theme, Flex } from '@chakra-ui/react';
import FormInput from '@/components/Form/FormInput';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <PageLayout>
      <Header showIconsAndTexts={true} />
      <PageTitle title="회원 가입" />
      <Box my={12}>
        <FormInput smallSize="true" title="닉네임" placeholder="닉네임" />
        <Flex>
          <Box>
            <FormInput smallSize="true" title="아이디" placeholder="아이디" />
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
        <FormInput smallSize="true" title="비밀번호" placeholder="비밀번호" />
        <FormInput
          smallSize="true"
          title="비밀번호 확인"
          placeholder="비밀번호"
        />
        <FormInput smallSize="true" title="은행명" placeholder="은행명" />
        <FormInput smallSize="true" title="계좌번호" placeholder="계좌번호" />
      </Box>
      <Link to="/signin">
        <Button px={64} py={4} color="white" bgColor={theme.colors.orange[300]}>
          회원가입
        </Button>
      </Link>
    </PageLayout>
  );
};

export default SignUpPage;
