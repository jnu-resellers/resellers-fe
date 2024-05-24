import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { getMaterial } from 'src/apis/materials';
import { useQuery } from '@tanstack/react-query';
import { AuctionPurchaseDetails } from './AuctionPurchaseDetails';

export interface AuctionPurchaseProps {
  writer: string;
  product: {
    preSignedUrl: string[];
    id: number;
    productName: string;
    price: number;
    description: string;
    defect: string;
  };
}

export const AuctionPurchase = () => {
  const id = 1; //TODO: list 에서 id 받아오기
  const CATEGORY = '요식업'; //TODO: 카테고리 받아오기 추가

  const { data: material, status } = useQuery({
    queryKey: ['material', id],
    queryFn: () => getMaterial(id),
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

  return (
    <Box w="100%">
      <Flex justifyContent="start" alignItems="center">
        <Text fontSize="xx-large" fontWeight="600" mr="2rem">
          기자재 거래
        </Text>
        <Text fontSize="larger">업종 : {CATEGORY}</Text>
      </Flex>
      <Divider orientation="horizontal" />
      <Flex flexDirection="column">
        <Box w="100%" mr="8rem">
          <AuctionPurchaseDetails
            writer={material.writer}
            product={material.product}
          />
        </Box>
      </Flex>
    </Box>
  );
};
