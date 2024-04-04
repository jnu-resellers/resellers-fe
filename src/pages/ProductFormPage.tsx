import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  VStack,
  theme,
} from '@chakra-ui/react';
import SectionTitle from '../components/ProductForm/SectionTitle';
import InputTitle from '../components/ProductForm/InputTitle';
import ProductList from '../components/ProductForm/ProductList';
import TitleDivider from '../components/ProductForm/TitleDivider';
import PageLayout from '../layouts/PageLayout';
import Header from '../components/Header';

const ProductFormPage = () => {
  return (
    <PageLayout>
      <Box w={{ lg: '100%', xl: '80rem' }} p={10}>
        <Header />
        <Box w="100%" mb={9}>
          <Heading as="h2" size="xl">
            기자재 판매 등록
          </Heading>
        </Box>
        <TitleDivider />
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
              <option value="option1">option1</option>
            </Select>
          </Flex>
        </Box>
        <SectionTitle title="판매 상품" />
        <ProductList />
        <SectionTitle title="상품 추가" />
        <Flex my={8} justify="space-between">
          <Box>
            <Heading as="h4" size="md" mb={3}>
              이미지 추가
            </Heading>
            {/* add img */}
            <Box
              w="150px"
              h="150px"
              backgroundColor={theme.colors.gray[300]}
            ></Box>
          </Box>
          <VStack spacing={6} w="60%">
            <Flex w="100%">
              <InputTitle title="상품명" />
              <Input placeholder="올바른 상품명을 입력해주세요." size="md" />
            </Flex>
            <Flex w="100%">
              <InputTitle title="가격" />
              <Input placeholder="숫자만 입력해주세요" size="md" />
            </Flex>
            <Flex w="100%">
              <InputTitle title="설명" />
              <Textarea placeholder="상품에 대해 설명해주세요" size="md" />
            </Flex>
          </VStack>
        </Flex>
        <Flex w="100%" direction="row-reverse" mb={8}>
          <Button
            color="white"
            bgColor={theme.colors.orange[200]}
            px={12}
            py={2}
          >
            추가하기
          </Button>
        </Flex>
        <Divider mb={12} />
        <Box mb={12}>
          <SectionTitle title="멘토링 여부" />
          <RadioGroup my={3}>
            <Radio px={6} colorScheme="orange">
              예
            </Radio>
            <Radio px={6} colorScheme="orange">
              아니요
            </Radio>
          </RadioGroup>
        </Box>
        <Button px={32} py={4} color="white" bgColor={theme.colors.orange[200]}>
          등록
        </Button>
      </Box>
    </PageLayout>
  );
};

export default ProductFormPage;
