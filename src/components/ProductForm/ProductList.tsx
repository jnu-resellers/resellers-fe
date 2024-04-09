import { Divider, Text, VStack, theme } from '@chakra-ui/react';
import SectionTitle from './SectionTitle';
import { Product } from '@/hooks/ProductForm/useProducts';
import ProductItem from './ProductItem';

interface ProductListProps {
  products: Product[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      <SectionTitle title="판매 상품" />
      <VStack w="100%" spacing={12} my={10}>
        {!products.length && (
          <Text size="xl" color={theme.colors.gray[600]}>
            아래에서 상품을 등록해주세요!
          </Text>
        )}

        {!!products.length &&
          products.map((product) => (
            <ProductItem key={product.name} product={product} />
          ))}
      </VStack>
      <Divider mb={5} />
    </>
  );
};

export default ProductList;
