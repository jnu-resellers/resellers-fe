import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Input,
  Textarea,
  VStack,
  theme,
} from '@chakra-ui/react';
import InputTitle from './InputTitle';
import SectionTitle from './SectionTitle';

const AddProductForm = () => {
  return (
    <>
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
        <Button color="white" bgColor={theme.colors.orange[200]} px={12} py={2}>
          추가하기
        </Button>
      </Flex>
      <Divider mb={12} />
    </>
  );
};

export default AddProductForm;
