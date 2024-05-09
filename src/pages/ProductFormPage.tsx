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
import { useMutation } from '@tanstack/react-query';
import { postMaterials } from '../apis/materials';
import { useNavigate } from 'react-router-dom';

// TODO: need validation check
// TODO: image upload logic
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
  const { mutate } = useMutation({
    mutationFn: postMaterials,
    onSuccess: () => {
      alert('정상적으로 등록되었습니다.');
      navigate('/');
    },
    onError: () => {
      alert('서버에 문제가 발생했습니다. 잠시 후 다시시도 해보세요.');
    },
  });
  const navigate = useNavigate();
  const onSubmitMaterial = () => {
    const { title, jobType } = productForm;
    const requestProducts = products.map(
      ({ description, price, name, imgFileNames }) => ({
        fileNames: imgFileNames,
        name,
        price,
        description,
      })
    );
    const { first, second, third, fourth, fifth } = questions;
    mutate({
      title,
      jobType,
      products: requestProducts,
      answers: {
        isMentoring: isShowMentoring,
        first,
        second,
        third,
        fourth,
        fifth,
      },
    });
  };
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
          value={productForm.jobType}
          onChange={onChange('jobType')}
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
      <Button
        px={32}
        py={4}
        color="white"
        bgColor={theme.colors.orange[300]}
        onClick={onSubmitMaterial}
      >
        등록
      </Button>
    </PageLayout>
  );
};

export default ProductFormPage;
