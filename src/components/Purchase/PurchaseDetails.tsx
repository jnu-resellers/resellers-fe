import { Flex, Text, Box, Divider } from '@chakra-ui/react';
import { DescriptionBox } from './DescriptionBox';
import { PurchaseProps } from './Purchase';
import { PurchaseImages } from './PurchaseImages';
import { PriceCheck } from './PriceCheck';

const PRICE_DATA = [
  {
    date: '2024-05-21',
    lowest: 10000,
    average: 12000,
  },
  {
    date: '2024-05-22',
    lowest: 11000,
    average: 13000,
  },
  {
    date: '2024-05-23',
    lowest: 12000,
    average: 14000,
  },
  {
    date: '2024-05-24',
    lowest: 11000,
    average: 16000,
  },
  {
    date: '2024-05-25',
    lowest: 12000,
    average: 17000,
  },
  {
    date: '2024-05-26',
    lowest: 13000,
    average: 18000,
  },
  {
    date: '2024-05-27',
    lowest: 14000,
    average: 19000,
  },
];

const priceFormatter = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const PurchaseDetails = ({
  writer,
  product: { productName, id, preSignedUrl, price, description, defect },
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
      <Box key={id}>
        <Text fontSize="xxx-large">{priceFormatter(price)}원</Text>
        <PurchaseImages preSignedUrl={preSignedUrl} />
        <Text fontSize="x-large" fontWeight="600" marginBottom="2rem">
          설명
        </Text>
        <DescriptionBox description={description} />
        <Text fontSize="x-large" fontWeight="600" marginBottom="2rem">
          결함
        </Text>
        <DescriptionBox description={defect} />
        <PriceCheck data={PRICE_DATA} />
      </Box>
    </Flex>
  );
};
