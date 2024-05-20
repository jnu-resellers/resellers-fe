import {
  Heading,
  Td,
  Tr,
  Tbody,
  TableContainer,
  Table,
} from '@chakra-ui/react';
import { getSellerInformation } from 'src/apis/materials';
import { useQuery } from '@tanstack/react-query';

const SELLER_INFO = {
  bankName: '카카오뱅크',
  accountNumber: '3333-05-220-8939',
  accountHolder: '곽민준',
};

const SellerInformation = () => {
  const { data: sellerInfo, status } = useQuery({
    queryKey: ['sellerInfo'],
    queryFn: getSellerInformation,
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;
  return (
    <div>
      <Heading mt="12" as="h2" size="md">
        입금 정보
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
              <Td>연락 수단</Td>
              <Td textAlign="right">{sellerInfo.contact}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SellerInformation;
