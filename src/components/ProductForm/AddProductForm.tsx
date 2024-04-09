import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Textarea,
  VStack,
  theme,
} from '@chakra-ui/react';
import InputTitle from './InputTitle';
import SectionTitle from './SectionTitle';
import { useState } from 'react';
import { Product } from '@/hooks/ProductForm/useProducts';

interface AddProductFormProps {
  appendProduct: (product: Product) => void;
}

const AddProductForm = ({ appendProduct }: AddProductFormProps) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  return (
    <>
      <SectionTitle title="상품 추가" />
      <Flex my={8} justify="space-between">
        <Box>
          <Heading as="h4" size="md" mb={8}>
            이미지 추가
          </Heading>
          {/* add img */}
          <Flex
            w="220px"
            h="170px"
            backgroundColor={theme.colors.blackAlpha[100]}
            color={theme.colors.blackAlpha[400]}
            align="center"
            justify="center"
          >
            여기를 클릭해 이미지 추가
          </Flex>
        </Box>
        <VStack spacing={6} w="60%">
          <Flex w="100%">
            <InputTitle title="상품명" />
            <Input
              placeholder="올바른 상품명을 입력해주세요."
              size="md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Flex>
          <Flex w="100%">
            <InputTitle title="가격" />
            <Input
              placeholder="숫자만 입력해주세요"
              size="md"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Flex>
          <Flex w="100%">
            <InputTitle title="설명" />
            <Textarea
              placeholder="상품에 대해 설명해주세요"
              size="md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Flex>
        </VStack>
      </Flex>
      <Flex w="100%" direction="row-reverse" mb={8}>
        <Button
          color="white"
          bgColor={theme.colors.orange[200]}
          px={12}
          py={2}
          onClick={() => {
            appendProduct({
              name,
              price: Number(price),
              description,
              imgFileNames: [],
            });
            setName('');
            setPrice('');
            setDescription('');
          }}
        >
          추가하기
        </Button>
      </Flex>
      <Divider mb={12} />
    </>
  );
};

export default AddProductForm;
