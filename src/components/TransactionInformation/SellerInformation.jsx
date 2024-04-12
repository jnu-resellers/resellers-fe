import {
  Heading,
  Td,
  Tr,
  Tbody,
  TableContainer,
  Table,
} from '@chakra-ui/react';

const SELLER_INFO = {
  bankName: '카카오뱅크', // TODO: 백엔드로부터 데이터 받아와야 함
  accountNumber: '3333-05-220-8939', // TODO: 백엔드로부터 데이터 받아와야 함
  accountHolder: '곽민준', // TODO: 백엔드로부터 데이터 받아와야 함
  amount: '240,000원', // TODO: 백엔드로부터 데이터 받아와야 함
  contact: '010-0000-0000', // TODO: 백엔드로부터 데이터 받아와야 함
};

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
              <Td textAlign="right">{SELLER_INFO.bankName}</Td>
            </Tr>
            <Tr>
              <Td>계좌번호</Td>
              <Td textAlign="right">{SELLER_INFO.accountNumber}</Td>
            </Tr>
            <Tr>
              <Td>예금주</Td>
              <Td textAlign="right">{SELLER_INFO.accountHolder}</Td>
            </Tr>
            <Tr>
              <Td>입금액</Td>
              <Td textAlign="right">{SELLER_INFO.amount}</Td>
            </Tr>
            <Tr>
              <Td>연락 수단</Td>
              <Td textAlign="right">{SELLER_INFO.contact}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SellerInformation;
