import { Box, Button, Flex, Text, Divider, theme } from '@chakra-ui/react';
import { PurchaseDetails } from './PurchaseDetails';
import { getMaterial } from 'src/apis/materials';
import { useQuery } from '@tanstack/react-query';

export interface PurchaseProps {
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

export const Purchase = () => {
  const id = 1; //TODO: main 에서 id 받아오기
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
          <PurchaseDetails
            writer={material.writer}
            product={material.product}
          />
          <Button
            display="flex"
            bgColor={theme.colors.orange[200]}
            color="white"
            w="16rem"
            h="4rem"
            fontSize="1.25rem"
            fontWeight="600"
            justifyContent="center"
            float="right"
          >
            주문 신청
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
