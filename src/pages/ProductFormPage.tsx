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
  Text,
  Textarea,
  theme,
} from '@chakra-ui/react';
import styled from 'styled-components';
import SectionTitle from '../components/ProductForm/SectionTitle';
import InputTitle from '../components/ProductForm/InputTitle';

const ProductFormPage = () => {
  return (
    <Box w="100%">
      <Box w="100%" mb={9}>
        <Heading as="h2" size="2xl">
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
      {/* product in here */}
      <SectionTitle title="상품 추가" />
      <Box>
        <Heading as="h4" size="md">
          이미지 추가
        </Heading>
        <Flex>
          <InputTitle title="상품명" />
          <Input placeholder="올바른 상품명을 입력해주세요." size="md" />
        </Flex>
        <Flex>
          <InputTitle title="가격" />
          <Input placeholder="숫자만 입력해주세요" size="md" />
        </Flex>
        <Flex>
          <InputTitle title="설명" />
          <Textarea placeholder="상품에 대해 설명해주세요" size="md" />
        </Flex>
        <Button color="white" bgColor={theme.colors.orange[200]}>
          추가하기
        </Button>
        <Divider />
        <Box>
          <SectionTitle title="멘토링 여부" />
          <RadioGroup>
            <Radio colorScheme="orange">예</Radio>
            <Radio colorScheme="orange">아니요</Radio>
          </RadioGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductFormPage;

const TitleDivider = styled.hr`
  width: 100%;
  border-top: 3px solid #333;
`;
