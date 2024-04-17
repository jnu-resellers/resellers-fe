import { Box, Text, Flex, Divider, Button, theme } from '@chakra-ui/react';
import { PurchaseCheckDetail } from './PurchaseCheckDetail';
import { PRODUCTS_LIST } from './constants';

export const PurchaseCheck = () => {
  const totalPrice = PRODUCTS_LIST.products.reduce(
    (acc, cur) => acc + cur.price,
    0,
  );

  return (
    <Box w="100%">
      <Flex justifyContent="start" alignItems="center">
        <Text fontSize="xx-large" fontWeight="600" mr="2rem">
          기자재 구매
        </Text>
      </Flex>
      <Divider orientation="horizontal" />
      <PurchaseCheckDetail
        products={PRODUCTS_LIST.products}
        totalPrice={totalPrice}
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
        거래 시작
      </Button>
    </Box>
  );
};
