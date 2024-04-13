import { Box, Text, Flex, Img, Checkbox } from '@chakra-ui/react';

interface PurchaseCheckDetailProps {
  products: {
    presignedUrl: string[];
    id: number;
    name: string;
    price: number;
  }[];
  totalPrice: number;
}

export const PurchaseCheckDetail = ({
  products,
  totalPrice,
}: PurchaseCheckDetailProps) => {
  return (
    <Box w="100%">
      <Box marginBottom="1rem">
        {products.map((product) => (
          <Flex key={product.id} direction="row">
            <Checkbox size="lg" marginRight="1rem" />
            <Img
              src={product.presignedUrl[0]}
              alt={product.name}
              width="12rem"
              marginRight="1rem"
            />
            <Flex marginTop="2rem" direction="column">
              <Text fontSize="1rem" fontWeight="700">
                상품 명
              </Text>
              <Text fontSize="1.25rem">{product.name}</Text>
              <Text fontSize="1rem" marginTop="1rem" fontWeight="700">
                가격
              </Text>
              <Text fontSize="1.25rem">{product.price}원</Text>
            </Flex>
          </Flex>
        ))}
      </Box>
      <Flex direction="row" align="center">
        <Text marginRight="10rem" fontSize="1.25rem" fontWeight="600">
          총금액
        </Text>
        <Text fontSize="2rem" fontWeight="600">
          {totalPrice}
        </Text>
      </Flex>
    </Box>
  );
};
