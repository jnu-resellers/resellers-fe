import AuctionFeed from '@/components/Auction/AuctionFeed';
import AuctionTitle from '@/components/Auction/AuctionTitle';
import Header from '@/components/common/Header';
import CategorySelect from '@/components/Main/CategorySelect';
import PageLayout from '@/layouts/PageLayout';
import { Button, Flex, Box, theme } from '@chakra-ui/react';
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
      <Header showIconsAndTexts={true} />
      <Flex
        alignItems={{ base: 'flex-start', md: 'center' }}
        justifyContent="space-between"
        mb={4}
        flexDirection={{ base: 'column', md: 'row' }}
        width="100%"
      >
        <Box mb={{ base: 4, md: 0 }}>
          <AuctionTitle title="기자재 경매 목록" />
        </Box>
        <Button
          onClick={navigateToAuctionForm}
          px={16}
          py={4}
          color="white"
          bgColor={theme.colors.orange[300]}
          width={{ base: '100%', md: 'auto' }}
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
