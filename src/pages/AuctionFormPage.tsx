import { Box, Button, Flex, Text, theme } from '@chakra-ui/react';
import Header from '../components/Header';
import useAuctionForm from '../hooks/AuctionForm/useAuctionForm';
import useProductForm from '../hooks/ProductForm/useProductForm';
import PageLayout from '../layouts/PageLayout';
import useImageUpload from '../hooks/useImageUpload';
import AddPhotoButton from '../components/ProductForm/AddPhotoButton';
import UploadImgList from '../components/ProductForm/UploadImgList';
import { AUCTION_PERIODS, MATERIAL_CATEGORYS } from '../constants/options';
import FormSelect from '../components/Form/FormSelect';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { postAuctions } from '../apis/auctions';
import FormInput from '../components/Form/FormInput';
import FormTextArea from '../components/Form/FormTextArea';
import SectionTitle from '../components/Form/SectionTitle';
import PageTitle from '../components/Form/PageTitle';

const AuctionFormPage = () => {
  const { state: productForm, onChange: onChangeProduct } = useProductForm();
  const { state: auctionForm, onChange: onChangeAuction } = useAuctionForm();
  const { fileNameList, onUploadFile } = useImageUpload();
  const { mutate } = useMutation({
    mutationFn: postAuctions,
    onSuccess: () => {
      alert('정상적으로 등록되었습니다.');
      navigate('/auction');
    },
    onError: () => {
      alert('서버에 문제가 발생했습니다. 잠시 후 다시시도 해보세요.');
    },
  });
  const navigate = useNavigate();

  const onSubmitAuction = () => {
    // This is really bad practice. You should validate the form before submitting.
    if (
      fileNameList.length === 0 ||
      !productForm.contact ||
      !productForm.defect ||
      !productForm.description ||
      !productForm.itemType ||
      !productForm.price ||
      !productForm.productName ||
      !auctionForm.period ||
      !auctionForm.priceUnit
    ) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    mutate({
      ...productForm,
      ...auctionForm,
      fileNames: fileNameList,
    });
  };

  return (
    <PageLayout>
      <Header showIconsAndTexts={false} />
      <PageTitle title="기자재 경매 목록" />
      <Box my={12}>
        <SectionTitle title="경매 정보" />
      </Box>
      <Box my={12}>
        <FormSelect
          title="경매 기간"
          value={auctionForm.period}
          placeholder="선택"
          onChange={onChangeAuction('period')}
          options={AUCTION_PERIODS}
        />
        <FormInput
          title="시작가"
          placeholder="경매를 시작할 금액을 입력해주세요."
          value={productForm.price}
          onChange={onChangeProduct('price')}
        />
        <FormInput
          title="경매 단위"
          placeholder="경매 단위를 작성해주세요. "
          value={auctionForm.priceUnit}
          onChange={onChangeAuction('priceUnit')}
        />
      </Box>
      <SectionTitle title="등록 상품 정보" />
      <Box my={12}>
        <FormInput
          title="상품명"
          placeholder="상품명 작성"
          value={productForm.productName}
          onChange={onChangeProduct('productName')}
        />
        <FormSelect
          title="물품 카테고리"
          placeholder="카테고리를 선택해주세요"
          value={productForm.itemType}
          onChange={onChangeProduct('itemType')}
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
          onChange={onChangeProduct('price')}
        />
        <FormTextArea
          title="설명"
          placeholder="상품에 대한 자세한 정보를 작성해주세요!"
          value={productForm.description}
          onChange={onChangeProduct('description')}
        />
        <FormTextArea
          title="결함"
          placeholder="결함을 작성해주세요. 작성된 정보 이외의 결함이 발견될 경우 책임은 판매자에게 있습니다. 자세한 사항은 약관을 확인해주세요."
          value={productForm.defect}
          onChange={onChangeProduct('defect')}
        />
        <FormInput
          title="연락수단"
          placeholder="카카오톡 오픈채팅 링크, 연락처"
          value={productForm.contact}
          onChange={onChangeProduct('contact')}
        />
      </Box>
      <Button
        px={32}
        py={4}
        color="white"
        bgColor={theme.colors.orange[300]}
        onClick={onSubmitAuction}
      >
        등록
      </Button>
    </PageLayout>
  );
};

export default AuctionFormPage;
