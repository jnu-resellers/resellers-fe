import Header from '@/components/Header';
import PageLayout from '@/layouts/PageLayout';
import PageTitle from '@/components/ProductForm/PageTitle';
import {
  Heading,
  Flex,
  Text,
  Th,
  Td,
  Tr,
  Thead,
  Tbody,
  TableContainer,
  Table,
  theme,
  Button,
} from '@chakra-ui/react';

const TransactionInformationPage = () => {
  return (
    <PageLayout>
      <Header />
      <PageTitle title="거래 정보" />
      <Flex direction="column" align="center" justify="center" mt="6">
        <Heading mt="24" as="h2" size="3xl">
          <Text as="span" color="green.400">
            거래가 정상적으로 시작
          </Text>
          되었습니다.
        </Heading>
        <Heading mt="4" as="h3" size="lg">
          아래의 정보를 통해 거래를 진행해주세요!
        </Heading>
      </Flex>
      <Heading mt="24" as="h2" size="md">
        구매 상품 정보
      </Heading>
      <TableContainer
        mt="4"
        borderRadius="lg"
        border="1px"
        borderColor="gray.200"
      >
        <Table mt="2" variant="simple">
          <Thead>
            <Tr>
              <Th fontSize="16" fontWeight="900">
                제품명
              </Th>
              <Th fontSize="16" fontWeight="900">
                가격
              </Th>
              <Th textAlign="right" fontSize="16" fontWeight="900">
                설명
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>레전드 냉장고</Td>
              <Td>240,000원</Td>
              <Td textAlign="right">국가권력급 냉장고입니다.</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex mt="4" justify="flex-end">
        <Heading as="h2" size="md">
          <Text as="span" mr="24">
            총 금액
          </Text>
          240,000원
        </Heading>
      </Flex>
      <Heading mt="12" as="h2" size="md">
        판매자 정보
      </Heading>
      <TableContainer
        mt="4"
        borderRadius="lg"
        border="1px"
        borderColor="gray.200"
      >
        <Table mt="2" variant="simple">
          <Tbody>
            <Tr>
              <Td>은행명</Td>
              <Td textAlign="right">카카오뱅크</Td>
            </Tr>
            <Tr>
              <Td>계좌번호</Td>
              <Td textAlign="right">3333-05-220-8939</Td>
            </Tr>
            <Tr>
              <Td>예금주</Td>
              <Td textAlign="right">곽민준</Td>
            </Tr>
            <Tr>
              <Td>입금액</Td>
              <Td textAlign="right">240,000원</Td>
            </Tr>
            <Tr>
              <Td>연락 수단</Td>
              <Td textAlign="right">010-0000-0000</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justify="flex-end">
        <Button
          mt="8"
          px="28"
          py="4"
          color="white"
          bgColor={theme.colors.orange[200]}
        >
          등록
        </Button>
      </Flex>
    </PageLayout>
  );
};

export default TransactionInformationPage;
