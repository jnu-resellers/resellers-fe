import { Box, Button, Flex, Text, theme } from '@chakra-ui/react';
import Header from '../components/Header';
import PageTitle from '../components/ProductForm/PageTitle';
import ProductFormInput from '../components/ProductForm/ProductFormInput';
import useAuctionForm from '../hooks/AuctionForm/useAuctionForm';
import useProductForm from '../hooks/ProductForm/useProductForm';
import PageLayout from '../layouts/PageLayout';
import ProductFormSelect from '../components/ProductForm/ProductFormSelect';
import SectionTitle from '../components/ProductForm/SectionTitle';
import useImageUpload from '../hooks/useImageUpload';
import AddPhotoButton from '../components/ProductForm/AddPhotoButton';
import UploadImgList from '../components/ProductForm/UploadImgList';
import ProductFormTextArea from '../components/ProductForm/ProductFormTextArea';
import { AUCTION_PERIODS } from '../constants/options';
import FormSelect from '../components/Form/FormSelect';

const AuctionFormPage = () => {
  const { state: productForm, onChange: onChangeProduct } = useProductForm();
  const { state: auctionForm, onChange: onChangeAuction } = useAuctionForm();
  const { fileNameList, onUploadFile } = useImageUpload();
  const onSubmitAuction = () => {};

  return (
    <PageLayout>
      <Header />
      <PageTitle title="기자재 경매 목록" />
      <SectionTitle title="경매 정보" />
      <Box my={12}>
        <FormSelect
          title="경매 기간"
          value={auctionForm.period}
          placeholder="선택"
          onChange={onChangeAuction('period')}
          options={AUCTION_PERIODS}
        />
        <ProductFormInput
          title="시작가"
          placeholder="경매를 시작할 금액을 입력해주세요."
          value={productForm.price}
          onChange={onChangeProduct('price')}
        />
        <ProductFormInput
          title="경매 단위"
          placeholder="경매 단위를 작성해주세요. "
          value={auctionForm.priceUnit}
          onChange={onChangeAuction('priceUnit')}
        />
      </Box>
      <SectionTitle title="등록 상품 정보" />
      <Box my={12}>
        <ProductFormInput
          title="상품명"
          placeholder="상품명 작성"
          value={productForm.productName}
          onChange={onChangeProduct('productName')}
        />
        <ProductFormSelect
          title="물품 카테고리"
          placeholder="카테고리를 선택해주세요"
          value={productForm.itemType}
          onChange={onChangeProduct('itemType')}
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
        <ProductFormInput
          title="가격"
          placeholder="숫자만 기입해주세요."
          value={productForm.price}
          onChange={onChangeProduct('price')}
        />
        <ProductFormTextArea
          title="설명"
          placeholder="상품에 대한 자세한 정보를 작성해주세요!"
          value={productForm.description}
          onChange={onChangeProduct('description')}
        />
        <ProductFormTextArea
          title="결함"
          placeholder="결함을 작성해주세요. 작성된 정보 이외의 결함이 발견될 경우 책임은 판매자에게 있습니다. 자세한 사항은 약관을 확인해주세요."
          value={productForm.defect}
          onChange={onChangeProduct('defect')}
        />
        <ProductFormInput
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
