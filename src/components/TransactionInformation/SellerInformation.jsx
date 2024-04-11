import {
  Heading,
  Td,
  Tr,
  Tbody,
  TableContainer,
  Table,
} from '@chakra-ui/react';

const SellerInformation = () => {
  return (
    <div>
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
    </div>
  );
};

export default SellerInformation;
