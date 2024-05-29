import { Box, Button, Flex, Text, Divider, theme } from '@chakra-ui/react';
import { PurchaseDetails } from './PurchaseDetails';
import { getMaterial } from 'src/apis/materials';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { postOrder } from 'src/apis/materials';

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
  const { id } = useParams();
  const materialId = Number(id);
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: postOrder,
    onSuccess: (response) => {
      const tradeId = response.tradeId;
      navigate(`/transaction-information/${tradeId}`);
    },
    onError: () => {
      alert('서버에 문제가 발생했습니다. 잠시 후 다시 시도 해보세요.');
    },
  });

  const onSubmitOrder = () => {
    mutate({
      productId: materialId,
      materialId: materialId,
      quantity: 1,
    });
  };

  const { data: material, status } = useQuery({
    queryKey: ['material', materialId],
    queryFn: () => getMaterial(materialId),
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

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
            onClick={onSubmitOrder}
          >
            주문 신청
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
