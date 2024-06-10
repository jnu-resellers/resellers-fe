import { Box, Flex, Text, Divider } from '@chakra-ui/react';
import { PurchaseDetails } from './PurchaseDetails';
import { getMaterial } from 'src/apis/materials';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { postOrder } from 'src/apis/materials';
import { LS_MEMBER_ID } from 'src/constants/lsKey';

export interface PurchaseProps {
  writer: string;
  product: {
    fileNames: string[];
    productId: number;
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
  const memberId = localStorage.getItem(LS_MEMBER_ID);
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

  const { data: material, status } = useQuery({
    queryKey: ['material', materialId],
    queryFn: () => getMaterial(materialId),
  });

  const onSubmitOrder = () => {
    if (!memberId) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    }
    if (material?.product.productId !== undefined) {
      mutate({
        productId: material.product.productId,
        materialId: materialId,
        quantity: 1,
        memberId: +memberId,
      });
    } else {
      alert('서버에 문제가 발생했습니다. 잠시 후 다시 시도 해보세요.');
    }
  };

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
          기자재 거래
        </Text>
        <Text fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}>
          상품 카테고리 : {material.itemType}
        </Text>
      </Flex>
      <Divider orientation="horizontal" />
      <Flex flexDirection="column">
        <Box w="100%">
          <PurchaseDetails
            itemType={material.itemType}
            writer={material.writer}
            product={material.product}
            contact={material.contact}
            onSubmitOrder={onSubmitOrder}
            isSold={material.product.isSold || false}
          />
        </Box>
      </Flex>
    </Box>
  );
};
