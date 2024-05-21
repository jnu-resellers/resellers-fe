import { Box, Button, Text, theme } from '@chakra-ui/react';
import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/Header';
import PageTitle from '@/components/ProductForm/PageTitle';
import useProductForm from '../hooks/ProductForm/useProductForm';
import ProductFormInput from '../components/ProductForm/ProductFormInput';
import ProductFormSelect from '../components/ProductForm/ProductFormSelect';
import { useMutation } from '@tanstack/react-query';
import { postMaterials } from '../apis/materials';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '@/components/ProductForm/SectionTitle';
import AddPhotoButton from '@/components/ProductForm/AddPhotoButton';
import ProductFormTextArea from '@/components/ProductForm/ProductFormTextArea';

// TODO: need validation check
// TODO: image upload logic
const ProductFormPage = () => {
  const { state: productForm, onChange } = useProductForm();
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
    mutate({
      ...productForm,
    });
  };
  return (
    <PageLayout>
      <Header />
      <PageTitle title="기자재 판매 등록" />
      <Box my={12}>
        <ProductFormInput
          title="상품명"
          placeholder="상품명 작성"
          value={productForm.productName}
          onChange={onChange('productName')}
        />
        <ProductFormSelect
          title="물품 카테고리"
          placeholder="카테고리를 선택해주세요"
          value={productForm.itemType}
          onChange={onChange('itemType')}
        />
      </Box>
      <SectionTitle title="판매 사진" />
      <Box my={12}>
        <AddPhotoButton />
        <Text color={theme.colors.blackAlpha[400]} pt={5}>
          상품의 여러부분을 찍어서 올리면 구매율이 높아져요!
        </Text>
      </Box>

      <Box>
        <ProductFormInput
          title="가격"
          placeholder="숫자만 기입해주세요."
          value={productForm.price}
          onChange={onChange('price')}
        />
        <ProductFormTextArea
          title="설명"
          placeholder="상품에 대한 자세한 정보를 작성해주세요!"
          value={productForm.description}
          onChange={onChange('description')}
        />
        <ProductFormTextArea
          title="결함"
          placeholder="결함을 작성해주세요. 작성된 정보 이외의 결함이 발견될 경우 책임은 판매자에게 있습니다. 자세한 사항은 약관을 확인해주세요."
          value={productForm.defect}
          onChange={onChange('defect')}
        />
        <ProductFormInput
          title="연락수단"
          placeholder="카카오톡 오픈채팅 링크, 연락처"
          value={productForm.contact}
          onChange={onChange('contact')}
        />
      </Box>
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
