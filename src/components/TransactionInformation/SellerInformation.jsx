import {
  Heading,
  Td,
  Tr,
  Tbody,
  TableContainer,
  Table,
} from '@chakra-ui/react';

const SellerInformation = ({ sellerInfo }) => {
  return (
    <div>
      <Heading
        mt={{ base: '6', md: '12' }}
        as="h2"
        size={{ base: 'sm', md: 'md' }}
      >
        입금 정보
      </Heading>
      <TableContainer
        mt="4"
        borderRadius="lg"
        border="1px"
        borderColor="gray.200"
        maxW="100%"
        overflowX="auto"
      >
        <Table mt="2" variant="simple">
          <Tbody>
            <Tr>
              <Td fontSize={{ base: '12', md: '14' }}>은행명</Td>
              <Td textAlign="right" fontSize={{ base: '12', md: '14' }}>
                {sellerInfo.bankName}
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={{ base: '12', md: '14' }}>계좌번호</Td>
              <Td textAlign="right" fontSize={{ base: '12', md: '14' }}>
                {sellerInfo.accountNumber}
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={{ base: '12', md: '14' }}>예금주</Td>
              <Td textAlign="right" fontSize={{ base: '12', md: '14' }}>
                {sellerInfo.name}
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={{ base: '12', md: '14' }}>연락 수단</Td>
              <Td textAlign="right" fontSize={{ base: '12', md: '14' }}>
                {sellerInfo.contact}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SellerInformation;
