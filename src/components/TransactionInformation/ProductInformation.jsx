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
import { getTradeInformation } from 'src/apis/materials';
import { useQuery } from '@tanstack/react-query';

const ProductInformation = () => {
  const { data: productInfo, status } = useQuery({
    queryKey: ['productInfo'],
    queryFn: getTradeInformation,
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;
  return (
    <div>
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
                설명
              </Th>
              <Th width="33%" fontSize="16" fontWeight="900">
                결함
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{productInfo.productName}</Td>
              <Td>{productInfo.description}</Td>
              <Td>{productInfo.defect}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex mt="4" justify="flex-end">
        <Heading as="h2" size="md">
          <Text as="span" mr="24">
            총 금액
          </Text>
          {new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW',
          }).format(productInfo.price)}
        </Heading>
      </Flex>
    </div>
  );
};

export default ProductInformation;
