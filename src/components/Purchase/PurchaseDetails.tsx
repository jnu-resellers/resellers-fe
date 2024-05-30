import { Flex, Text, Box, Divider } from '@chakra-ui/react';
import { DescriptionBox } from './DescriptionBox';
import { PurchaseProps } from './Purchase';
import { PurchaseImages } from './PurchaseImages';
import { PriceCheck } from './PriceCheck';

const priceFormatter = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const PurchaseDetails = ({
  writer,
  product: { productId, productName, price, description, defect, fileNames },
  contact,
  itemType,
}: PurchaseProps) => {
  return (
    <Flex flexDirection="column" w="100%" m="2.25rem 2.25rem 0 0">
      <Text fontSize="xx-large" fontWeight="500" mb="1.25rem">
        {productName}
      </Text>
      <Text fontSize="larger" mb="1.25rem">
        {writer}
      </Text>
      <Divider orientation="horizontal" mb="1rem" />
      <Box key={productId}>
        <Text fontSize="xxx-large">{priceFormatter(price)}원</Text>
        <PurchaseImages fileNames={fileNames} />
        <Text fontSize="x-large" fontWeight="600" marginBottom="2rem">
          설명
        </Text>
        <DescriptionBox description={description} />
        <Text fontSize="x-large" fontWeight="600" marginBottom="2rem">
          결함
        </Text>
        <DescriptionBox description={defect} />
        <Text fontSize="x-large" fontWeight="600" marginBottom="2rem">
          연락처: {contact}
        </Text>
        <PriceCheck itemType={itemType} />
      </Box>
    </Flex>
  );
};
