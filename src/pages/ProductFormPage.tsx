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
  VStack,
  theme,
} from '@chakra-ui/react';
import styled from 'styled-components';

const ProductFormPage = () => {
  return (
    <VStack w="100%">
      <Box w="100%">
        <Heading as="h2" size="2xl">
          기자재 판매 등록
        </Heading>
      </Box>
      <TitleDivider />
      <Flex>
        <Text>제목</Text>
        <Input placeholder="안녕" size="md" />
      </Flex>
      <Flex>
        <Text>업종 선택</Text>
        <Select placeholder="업종" size="md">
          <option value="option1">option1</option>
        </Select>
      </Flex>
      <Heading as="h3" size="lg">
        판매상품
      </Heading>
      <Divider />
      {/* product in here */}
      <Divider />
      <Heading as="h3" size="lg">
        상품추가
      </Heading>
      <Divider />
      <Box>
        <Heading as="h4" size="md">
          이미지 추가
        </Heading>
        <Flex>
          <Text>상품 명</Text>
          <Input placeholder="올바른 상품명을 입력해주세요." size="md" />
        </Flex>
        <Flex>
          <Text>가격</Text>
          <Input placeholder="숫자만 입력해주세요" size="md" />
        </Flex>
        <Flex>
          <Text>설명</Text>
          <Textarea placeholder="상품에 대해 설명해주세요" size="md" />
        </Flex>
        <Button color="white" bgColor={theme.colors.orange[200]}>
          추가하기
        </Button>
        <Divider />
        <Box>
          <Heading as="h3" size="lg">
            멘토링 여부
          </Heading>
          <RadioGroup>
            <Radio colorScheme="orange">예</Radio>
            <Radio colorScheme="orange">아니요</Radio>
          </RadioGroup>
        </Box>
      </Box>
    </VStack>
  );
};

export default ProductFormPage;

const TitleDivider = styled.hr`
  width: 100%;
  border-top: 3px solid #333;
`;
