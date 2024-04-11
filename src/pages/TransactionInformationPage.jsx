import Header from '@/components/Header';
import PageLayout from '@/layouts/PageLayout';
import PageTitle from '@/components/ProductForm/PageTitle';
import { Heading, Flex, Text, theme, Button } from '@chakra-ui/react';
import ProductInformation from '@/components/TransactionInformation/ProductInformation';
import SellerInformation from '@/components/TransactionInformation/SellerInformation';

const TransactionInformationPage = () => {
  return (
    <PageLayout>
      <Header />
      <PageTitle title="거래 정보" />
      <Flex direction="column" align="center" justify="center" mt="6">
        <Heading mt="24" as="h2" size="3xl">
          <Text as="span" color="green.400">
            거래가 정상적으로 시작
          </Text>
          되었습니다.
        </Heading>
        <Heading mt="4" as="h3" size="lg">
          아래의 정보를 통해 거래를 진행해주세요!
        </Heading>
      </Flex>
      <ProductInformation />
      <SellerInformation />
      <Flex justify="flex-end">
        <Button
          mt="8"
          px="28"
          py="4"
          color="white"
          bgColor={theme.colors.orange[200]}
        >
          등록
        </Button>
      </Flex>
    </PageLayout>
  );
};

export default TransactionInformationPage;
