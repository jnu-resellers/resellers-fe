import { Box, Button, Flex, Input, Select, theme } from '@chakra-ui/react';
import InputTitle from '@/components/ProductForm/InputTitle';
import ProductList from '@/components/ProductForm/ProductList';
import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/Header';
import AddProductForm from '@/components/ProductForm/AddProductForm';
import MentoringSelect from '@/components/ProductForm/MentoringSelect';
import PageTitle from '@/components/ProductForm/PageTitle';

const ProductFormPage = () => {
  return (
    <PageLayout>
      <Header />
      <PageTitle title="기자재 판매 등록" />
      <Box my={12}>
        <Flex align="center" mb={10}>
          <InputTitle title="제목" />
          <Input
            placeholder="인상깊은 제목을 작성해주세요."
            size="md"
            w={{ base: '20rem', sm: '20rem', md: '20rem', lg: '40rem' }}
          />
        </Flex>
        <Flex>
          <InputTitle title="업종선택" />
          <Select
            placeholder="업종"
            size="md"
            w={{ base: '20rem', sm: '20rem', md: '20rem', lg: '40rem' }}
          >
            {/* TODO: 업종 상수화 */}
            <option value="option1">음식점</option>
            <option value="option2">생활편의</option>
            <option value="option3">학원</option>
            <option value="option4">스포츠/레저/체험</option>
          </Select>
        </Flex>
      </Box>
      <ProductList />
      <AddProductForm />
      <MentoringSelect />
      <Button px={32} py={4} color="white" bgColor={theme.colors.orange[200]}>
        등록
      </Button>
    </PageLayout>
  );
};

export default ProductFormPage;
