import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { getAuctionPurchase } from 'src/apis/materials';
import { useQuery } from '@tanstack/react-query';
import { AuctionPurchaseDetails } from './AuctionPurchaseDetails';

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
}

export const AuctionPurchase = () => {
  const id = 1; //TODO: list 에서 id 받아오기

  const { data: auction, status } = useQuery({
    queryKey: ['auction', id],
    queryFn: () => getAuctionPurchase(id),
  });

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
          />
        </Box>
      </Flex>
    </Box>
  );
};
