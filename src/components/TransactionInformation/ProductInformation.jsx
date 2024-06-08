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
} from '@chakra-ui/react';

const ProductInformation = ({ productInfo, totalPrice }) => {
  return (
    <div>
      <Heading
        mt={{ base: '6', md: '24' }}
        as="h2"
        size={{ base: 'sm', md: 'md' }}
      >
        구매 상품 정보
      </Heading>
      <TableContainer
        mt="4"
        ml={{ base: '4', md: '0' }}
        display={{ base: 'none', md: 'block' }}
        borderRadius="lg"
        border="1px"
        borderColor="gray.200"
        maxW="100%"
        overflowX="auto"
      >
        <Table mt="2" variant="simple">
          <Thead>
            <Tr>
              <Th fontSize={{ base: '12', md: '16' }} fontWeight="900">
                제품명
              </Th>
              <Th fontSize={{ base: '12', md: '16' }} fontWeight="900">
                설명
              </Th>
              <Th
                width={{ base: '50%', md: '33%' }}
                fontSize={{ base: '12', md: '16' }}
                fontWeight="900"
              >
                결함
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td whiteSpace="normal" fontSize={{ base: '10', md: '14' }}>
                {productInfo.productName}
              </Td>
              <Td whiteSpace="normal" fontSize={{ base: '10', md: '14' }}>
                {productInfo.description}
              </Td>
              <Td whiteSpace="normal" fontSize={{ base: '10', md: '14' }}>
                {productInfo.defect}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer
        mt="4"
        display={{ base: 'block', md: 'none' }}
        borderRadius="lg"
        border="1px"
        borderColor="gray.200"
        maxW="100%"
        overflowX="auto"
      >
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td fontSize={{ base: '12', md: '16' }} fontWeight="900">
                제품명
              </Td>
              <Td whiteSpace="normal" fontSize={{ base: '10', md: '14' }}>
                {productInfo.productName}
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={{ base: '12', md: '16' }} fontWeight="900">
                설명
              </Td>
              <Td whiteSpace="normal" fontSize={{ base: '10', md: '14' }}>
                {productInfo.description}
              </Td>
            </Tr>
            <Tr>
              <Td fontSize={{ base: '12', md: '16' }} fontWeight="900">
                결함
              </Td>
              <Td whiteSpace="normal" fontSize={{ base: '10', md: '14' }}>
                {productInfo.defect}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex mt="4" justify="flex-end">
        <Heading as="h2" size={{ base: 'sm', md: 'md' }}>
          <Text as="span" mr={{ base: '2', md: '24' }}>
            총 금액
          </Text>
          {totalPrice.toLocaleString()}원
        </Heading>
      </Flex>
    </div>
  );
};

export default ProductInformation;
