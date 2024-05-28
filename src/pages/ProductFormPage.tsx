import { Box, Button, Flex, Text, theme } from '@chakra-ui/react';
import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/Header';
import useProductForm from '../hooks/ProductForm/useProductForm';
import { useMutation } from '@tanstack/react-query';
import { postMaterials } from '../apis/materials';
import { useNavigate } from 'react-router-dom';
import AddPhotoButton from '@/components/ProductForm/AddPhotoButton';
import useImageUpload from '../hooks/useImageUpload';
import UploadImgList from '../components/ProductForm/UploadImgList';
import SectionTitle from '../components/Form/SectionTitle';
import FormInput from '../components/Form/FormInput';
import FormTextArea from '../components/Form/FormTextArea';
import PageTitle from '../components/Form/PageTitle';
import FormSelect from '../components/Form/FormSelect';
import { MATERIAL_CATEGORYS } from '../constants/options';

// TODO: need validation check
// TODO: image upload logic
const ProductFormPage = () => {
  const { state: productForm, onChange } = useProductForm();
  const { fileNameList, onUploadFile } = useImageUpload();
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
    // This is really bad practice. You should validate the form before submitting.
    if (
      fileNameList.length === 0 ||
      !productForm.contact ||
      !productForm.defect ||
      !productForm.description ||
      !productForm.itemType ||
      !productForm.price ||
      !productForm.productName
    ) {
      alert('모든 항목을 입력해주세요.');
      return;
    }
    mutate({
      ...productForm,
      fileNames: fileNameList,
    });
  };
  return (
    <PageLayout>
      <Header />
      <PageTitle title="기자재 판매 등록" />
      <Box my={12}>
        <FormInput
          title="상품명"
          placeholder="상품명 작성"
          value={productForm.productName}
          onChange={onChange('productName')}
        />
        <FormSelect
          title="물품 카테고리"
          placeholder="카테고리를 선택해주세요"
          value={productForm.itemType}
          onChange={onChange('itemType')}
          options={MATERIAL_CATEGORYS}
        />
      </Box>
      <SectionTitle title="판매 사진" />
      <Box my={12}>
        <Flex gap={4}>
          <AddPhotoButton onUploadFile={onUploadFile} />
          <UploadImgList fileList={fileNameList} />
        </Flex>
        <Text color={theme.colors.blackAlpha[400]} pt={5}>
          상품의 여러부분을 찍어서 올리면 구매율이 높아져요!
        </Text>
      </Box>

      <Box>
        <FormInput
          title="가격"
          placeholder="숫자만 기입해주세요."
          value={productForm.price}
          onChange={onChange('price')}
        />
        <FormTextArea
          title="설명"
          placeholder="상품에 대한 자세한 정보를 작성해주세요!"
          value={productForm.description}
          onChange={onChange('description')}
        />
        <FormTextArea
          title="결함"
          placeholder="결함을 작성해주세요. 작성된 정보 이외의 결함이 발견될 경우 책임은 판매자에게 있습니다. 자세한 사항은 약관을 확인해주세요."
          value={productForm.defect}
          onChange={onChange('defect')}
        />
        <FormInput
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
