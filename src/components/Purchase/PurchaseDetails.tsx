import { Flex, Text, Box, Divider } from '@chakra-ui/react';
import { DescriptionBox } from './DescriptionBox';
import { PurchaseProps } from './Purchase';
import { PurchaseImages } from './PurchaseImages';

export const PurchaseDetails = ({
  writer,
  product: { productName, id, preSignedUrl, price, description, defect },
}: PurchaseProps) => {
  const fixedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <Flex flexDirection="column" w="100%" m="2.25rem 2.25rem 0 0">
      <Text fontSize="xx-large" fontWeight="500" mb="1.25rem">
        {productName}
      </Text>
      <Text fontSize="larger" mb="1.25rem">
        {writer}
      </Text>
      <Divider orientation="horizontal" mb="1rem" />
      <Box key={id}>
        <Text fontSize="xxx-large">{fixedPrice}원</Text>
        <PurchaseImages preSignedUrl={preSignedUrl} />
        <Text fontSize="x-large" fontWeight="600" marginBottom="2rem">
          설명
        </Text>
        <DescriptionBox description={description} />
        <Text fontSize="x-large" fontWeight="600" marginBottom="2rem">
          결함
        </Text>
        <DescriptionBox description={defect} />
      </Box>
    </Flex>
  );
};
