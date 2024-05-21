import AuctionTitle from '@/components/Auction/AuctionTitle';
import Header from '@/components/Header';
import PageLayout from '@/layouts/PageLayout';
import { Button, Flex, theme } from '@chakra-ui/react';

const AuctionListPage = () => {
  return (
    <PageLayout>
      <Header />
      <Flex alignItems="center" justifyContent="space-between" mb={4}>
        <AuctionTitle title="기자재 경매 목록" />
        <Button
          px={16}
          py={4}
          mb={4}
          color="white"
          bgColor={theme.colors.orange[300]}
        >
          경매 등록하기
        </Button>
      </Flex>
    </PageLayout>
  );
};

export default AuctionListPage;
