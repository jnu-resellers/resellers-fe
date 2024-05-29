import Header from '@/components/Header';
import PageLayout from '@/layouts/PageLayout';
import { Heading, Flex, Text, theme, Button } from '@chakra-ui/react';
import ProductInformation from '@/components/TransactionInformation/ProductInformation';
import SellerInformation from '@/components/TransactionInformation/SellerInformation';
import { useNavigate } from 'react-router-dom';
import PageTitle from '@/components/Form/PageTitle';
import { useQuery } from '@tanstack/react-query';
import { getTradeInformation } from 'src/apis/materials';
import { useParams } from 'react-router-dom';

const TransactionInformationPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: tradeInformation, status } = useQuery({
    queryKey: ['tradeInformation', id],
    queryFn: () => getTradeInformation(id),
  });

  if (status === 'loading' || !tradeInformation) return <>로딩 중 ...</>;
  if (status === 'error') return <>에러 상태</>;

  const { buyProducts, sellerInfo, totalPrice } = tradeInformation;

  return (
    <PageLayout>
      <Header showIconsAndTexts={true} />
      <PageTitle title="거래 정보" />
      <Flex direction="column" align="center" justify="center" mt="6">
        <Heading mt="24" as="h2" size="3xl">
          <Text as="span" color="green.500">
            주문 신청이 완료
          </Text>
          되었습니다.
        </Heading>
        <Heading mt="4" as="h3" size="lg">
          아래 계좌정보에 입금해주세요.
        </Heading>
      </Flex>
      <ProductInformation productInfo={buyProducts} totalPrice={totalPrice} />
      <SellerInformation sellerInfo={sellerInfo} />
      <Flex justify="flex-end">
        <Button
          mt="8"
          px="16"
          py="4"
          color="white"
          bgColor={theme.colors.orange[200]}
          onClick={() => {
            navigate('/');
          }}
        >
          홈으로 돌아가기
        </Button>
      </Flex>
    </PageLayout>
  );
};

export default TransactionInformationPage;
