import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { getAuctionPurchase } from 'src/apis/auctions';
import { useQuery } from '@tanstack/react-query';
import { AuctionPurchaseDetails } from './AuctionPurchaseDetails';
import { useParams } from 'react-router-dom';

export const AuctionPurchase = () => {
  const { id } = useParams();
  const auctionId = Number(id);
  const { data: auction, status } = useQuery({
    queryKey: ['auction', id],
    queryFn: () => getAuctionPurchase(auctionId),
    refetchInterval: 3000,
    refetchIntervalInBackground: false,
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

  return (
    <Box w="100%" p={{ base: 2, sm: 4, md: 6 }}>
      <Flex justifyContent="start" alignItems="center" flexWrap="wrap" gap={4}>
        <Text
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}
          fontWeight="600"
          mr={{ base: '0', md: '2rem' }}
        >
          기자재 경매
        </Text>
        <Text fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}>
          상품 카테고리 : {auction.itemType}
        </Text>
      </Flex>
      <Divider orientation="horizontal" />
      <Flex flexDirection="column">
        <Box w="100%">
          <AuctionPurchaseDetails
            imageNames={auction.imageNames}
            productName={auction.productName}
            itemType={auction.itemType}
            bidCount={auction.bidCount}
            startAt={auction.startAt}
            endAt={auction.endAt}
            startPrice={auction.startPrice}
            nowPrice={auction.nowPrice}
            writer={auction.writer}
            description={auction.description}
            defect={auction.defect}
            priceUnit={auction.priceUnit}
            auctionId={auctionId}
            sellerId={auction.memberId}
          />
        </Box>
      </Flex>
    </Box>
  );
};
