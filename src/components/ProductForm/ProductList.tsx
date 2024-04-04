import { Center, Divider, Text, theme } from '@chakra-ui/react';

const ProductList = () => {
  return (
    <>
      <Center my={10}>
        <Text size="xl" color={theme.colors.gray[600]}>
          상품을 등록해주세요!
        </Text>
      </Center>
      <Divider mb={5} />
    </>
  );
};

export default ProductList;
