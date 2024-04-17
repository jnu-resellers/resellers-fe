import { Flex, Text, Box, Divider } from '@chakra-ui/react';
import { DescriptionBox } from './DescriptionBox';

export interface PurchaseDetailsProps {
  title: string;
  writer: string;
  selectedProduct: {
    id: number;
    name: string;
    price: number;
    description: string;
  };
}

export const PurchaseDetails = ({
  title,
  writer,
  selectedProduct,
}: PurchaseDetailsProps) => {
  return (
    <Flex flexDirection="column" w="100%" m="2.25rem 2.25rem 0 0">
      <Text fontSize="xx-large" fontWeight="500" mb="1.25rem">
        {title}
      </Text>
      <Text fontSize="larger" mb="1.25rem">
        {writer}
      </Text>
      <Divider orientation="horizontal" mb="1rem" />
      <Box key={selectedProduct.id}>
        <Text fontSize="xx-large" mb="1.25rem">
          {selectedProduct.name}
        </Text>
        <Text fontSize="xxx-large">{selectedProduct.price}원</Text>
        <DescriptionBox description={selectedProduct.description} />
      </Box>
      <Box>
        <Text fontSize="x-large" fontWeight="600">
          멘토링 여부
        </Text>
      </Box>
    </Flex>
  );
};
