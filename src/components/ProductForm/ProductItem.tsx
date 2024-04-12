import { Product } from '@/hooks/ProductForm/useProducts';
import {
  Box,
  CloseButton,
  Divider,
  Flex,
  Heading,
  Text,
  theme,
} from '@chakra-ui/react';
interface ProductItemProps {
  product: Product;
  removeProductById: (clientId: string) => void;
}

interface ProductItemFieldProps {
  title: string;
  content: string;
}

const ProductItemField = ({ title, content }: ProductItemFieldProps) => {
  return (
    <Box w="100%" mb={6}>
      <Heading as="h4" size="sm" mb={3}>
        {title}
      </Heading>
      <Text>{content}</Text>
    </Box>
  );
};

const ProductItem = ({ product, removeProductById }: ProductItemProps) => {
  return (
    <>
      <Flex w="100%" direction="row-reverse">
        <CloseButton
          color={theme.colors.blackAlpha[400]}
          onClick={() => removeProductById(product.clientId)}
        />
      </Flex>
      <Flex w="100%" justify="space-between">
        {!product.imgFileNames.length ? (
          <Box w="250px" h="170px" backgroundColor={theme.colors.gray[300]} />
        ) : (
          <img src="" />
        )}

        <Box w="50%">
          <ProductItemField title="상품명" content={product.name} />
          <ProductItemField
            title="가격"
            content={`${product.price.toLocaleString()}원`}
          />
          <ProductItemField
            title="설명"
            content={product.description || '이 상품에 대한 설명이 없습니다.'}
          />
        </Box>
      </Flex>
      <Divider />
    </>
  );
};

export default ProductItem;
