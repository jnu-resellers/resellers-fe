import AuctionFeed from '@/components/Auction/AuctionFeed';
import AuctionTitle from '@/components/Auction/AuctionTitle';
import Header from '@/components/common/Header';
import CategorySelect from '@/components/Main/CategorySelect';
import PageLayout from '@/layouts/PageLayout';
import { Button, Flex, theme } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuctionListPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const navigateToAuctionForm = () => {
    navigate(`/auction-form`);
  };

  return (
    <PageLayout>
      <Header showIconsAndTexts={false} />
      <Flex alignItems="center" justifyContent="space-between" mb={4}>
        <AuctionTitle title="기자재 경매 목록" />
        <Button
          onClick={navigateToAuctionForm}
          px={16}
          py={4}
          mb={4}
          color="white"
          bgColor={theme.colors.orange[300]}
        >
          경매 등록하기
        </Button>
      </Flex>
      <CategorySelect onCategorySelect={handleCategorySelect} />
      <AuctionFeed selectedCategory={selectedCategory} />
    </PageLayout>
  );
};

export default AuctionListPage;
