import { Box, Button, theme } from '@chakra-ui/react';
import ProductList from '@/components/ProductForm/ProductList';
import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/Header';
import AddProductForm from '@/components/ProductForm/AddProductForm';
import MentoringSelect from '@/components/ProductForm/MentoringSelect';
import PageTitle from '@/components/ProductForm/PageTitle';
import useProducts from '@/hooks/ProductForm/useProducts';
import MentoringQuestionList from '../components/ProductForm/MentoringQuestionList';
import useProductForm from '../hooks/ProductForm/useProductForm';
import ProductFormInput from '../components/ProductForm/ProductFormInput';
import ProductFormSelect from '../components/ProductForm/ProductFormSelect';
import useMentoring from '../hooks/ProductForm/useMentoring';

const ProductFormPage = () => {
  const { state: productForm, onChange } = useProductForm();
  const { products, appendProduct, removeProductById } = useProducts();
  const {
    mentoringStatus,
    isShow: isShowMentoring,
    onChangeMentoring,
    questions,
    onChangeQuestionByOrder,
  } = useMentoring();

  return (
    <PageLayout>
      <Header />
      <PageTitle title="기자재 판매 등록" />
      <Box my={12}>
        <ProductFormInput
          title="제목"
          placeholder="인상깊은 제목을 작성해주세요."
          value={productForm.title}
          onChange={onChange('title')}
        />
        <ProductFormSelect
          title="업종선택"
          placeholder="업종"
          value={productForm.itemType}
          onChange={onChange('itemType')}
        />
        <ProductFormInput
          title="연락 수단"
          placeholder="카카오 오픈채팅 링크, 연락처등 구매자와 연락할 수단"
          value={productForm.contact}
          onChange={onChange('contact')}
        />
      </Box>
      <ProductList products={products} removeProductById={removeProductById} />
      <AddProductForm appendProduct={appendProduct} />
      <MentoringSelect onChange={onChangeMentoring} value={mentoringStatus} />
      <MentoringQuestionList
        isShow={isShowMentoring}
        questions={questions}
        onChangeQuestionByOrder={onChangeQuestionByOrder}
      />
      <Button px={32} py={4} color="white" bgColor={theme.colors.orange[300]}>
        등록
      </Button>
    </PageLayout>
  );
};

export default ProductFormPage;
