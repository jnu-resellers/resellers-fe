import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { getAuctionPurchase } from 'src/apis/auctions';
import { useQuery } from '@tanstack/react-query';
import { AuctionPurchaseDetails } from './AuctionPurchaseDetails';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export interface AuctionPurchaseProps {
  imageNames: string[];
  itemType: string;
  productName: string;
  bidCount: number;
  startAt: string;
  endAt: string;
  startPrice: number;
  nowPrice: number;
  writer: string;
  description: string;
  defect: string;
  priceUnit: number;
}

export const AuctionPurchase = () => {
  const { id } = useParams();
  const auctionId = Number(id);
  const { data: auction, status } = useQuery({
    queryKey: ['auction', id],
    queryFn: () => getAuctionPurchase(auctionId),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      getAuctionPurchase(auctionId);
    }, 1000);
    return () => clearInterval(interval);
  }, [auction?.nowPrice, auction?.bidCount]);

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

  return (
    <Box w="100%">
      <Flex justifyContent="start" alignItems="center">
        <Text fontSize="xx-large" fontWeight="600" mr="2rem">
          기자재 거래
        </Text>
        <Text fontSize="larger">업종 : {auction.itemType}</Text>
      </Flex>
      <Divider orientation="horizontal" />
      <Flex flexDirection="column">
        <Box w="100%" mr="8rem">
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
          />
        </Box>
      </Flex>
    </Box>
  );
};
