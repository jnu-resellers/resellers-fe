import { Box, Button, Flex, Text, Divider, theme } from '@chakra-ui/react';
import { PurchaseImages } from './PurchaseImages';
import { PurchaseDetails } from './PurchaseDetails';
import { usePurchase } from '@/hooks/purchase/usePurchase';
import { PRODUCTS_LIST } from './constants';

export interface PurchaseProps {
  title: string;
  writer: string;
  products: {
    presignedUrl: string[];
    id: number;
    name: string;
    price: number;
    description: string;
  }[];
  error: string | null;
}

const CATEGORY = '요식업';
const RESPONSE = PRODUCTS_LIST;
export const Purchase = () => {
  const { selectedProductId, onClickProduct } = usePurchase();

  const selectedProduct = RESPONSE.products.filter(
    (product) => product.id === selectedProductId,
  );

  return (
    <Box w="100%">
      <Flex justifyContent="start" alignItems="center">
        <Text fontSize="xx-large" fontWeight="600" mr="2rem">
          기자재 구매
        </Text>
        <Text fontSize="larger">업종 : {CATEGORY}</Text>
      </Flex>
      <Divider orientation="horizontal" />
      <Flex flexDirection="row">
        <PurchaseImages
          products={RESPONSE.products}
          onClickImage={onClickProduct}
        />
        <Box w="100%" mr="8rem">
          <PurchaseDetails
            title={RESPONSE.title}
            writer={RESPONSE.writer}
            selectedProduct={selectedProduct[0]}
          />
          <Button
            display="flex"
            bgColor={theme.colors.orange[200]}
            color="white"
            w="16rem"
            h="4rem"
            fontSize="1.25rem"
            justifyContent="center"
            float="right"
          >
            거래하러 하기
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
