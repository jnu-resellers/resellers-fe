import { Box, Button, Flex, Text, Divider, theme } from '@chakra-ui/react';
import { PurchaseDetails } from './PurchaseDetails';
import { getMaterial } from 'src/apis/materials';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

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
  const navigate = useNavigate();
  const { id } = useParams();
  // const id = 1;
  const materialId = Number(id);

  const CATEGORY = '요식업'; //TODO: 카테고리 받아오기 추가
  const { data: material, status } = useQuery({
    queryKey: ['material', materialId],
    queryFn: () => getMaterial(materialId),
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

  console.log(material);
  const onOrder = (id: number) => {
    navigate(`/transaction-information/${id}`);
  };

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
            onClick={() => onOrder(materialId)}
          >
            주문 신청
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
