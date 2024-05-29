import { Box, Button, Flex, Text, Divider, theme } from '@chakra-ui/react';
import { PurchaseDetails } from './PurchaseDetails';
import { getMaterial } from 'src/apis/materials';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';

export interface PurchaseProps {
  writer: string;
  product: {
    fileNames: string[];
    id: number;
    productName: string;
    price: number;
    description: string;
    defect: string;
    isSold?: boolean;
  };
  itemType: string;
  contact: string;
}

export const Purchase = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const materialId = Number(id);
  const { data: material, status } = useQuery({
    queryKey: ['material', materialId],
    queryFn: () => getMaterial(materialId),
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

  const onOrder = (id: number) => {
    navigate(`/transaction-information/${id}`);
  };

  return (
    <Box w="100%">
      <Flex justifyContent="start" alignItems="center">
        <Text fontSize="xx-large" fontWeight="600" mr="2rem">
          기자재 거래
        </Text>
        <Text fontSize="larger">업종 : {material.itemType}</Text>
      </Flex>
      <Divider orientation="horizontal" />
      <Flex flexDirection="column">
        <Box w="100%" mr="8rem">
          <PurchaseDetails
            itemType={material.itemType}
            writer={material.writer}
            product={material.product}
            contact={material.contact}
          />
          <Button
            px={28}
            py={6}
            color="white"
            bgColor={theme.colors.orange[300]}
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
