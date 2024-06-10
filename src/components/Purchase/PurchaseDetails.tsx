import { Flex, Text, Box, Divider, Button, theme } from '@chakra-ui/react';
import { DescriptionBox } from './DescriptionBox';
import { PurchaseImages } from './PurchaseImages';
import { PriceCheck } from './PriceCheck';

interface PurchaseDetailsProps {
  writer: string;
  product: {
    productId: number;
    productName: string;
    price: number;
    description: string;
    defect: string;
    fileNames: string[];
  };
  contact: string;
  itemType: string;
  isSold: boolean;
  onSubmitOrder: () => void;
}

const priceFormatter = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const PurchaseDetails = ({
  writer,
  product: { productId, productName, price, description, defect, fileNames },
  contact,
  itemType,
  isSold,
  onSubmitOrder,
}: PurchaseDetailsProps) => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      m={{ base: 2, sm: 4, lg: '2.25rem 2.25rem 0 0' }}
    >
      <Text
        fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
        fontWeight="500"
        mb="1.25rem"
      >
        {productName}
      </Text>
      <Text fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} mb="1.25rem">
        {writer}
      </Text>
      <Divider orientation="horizontal" mb="1rem" />
      <Box key={productId}>
        <Flex justifyContent="space-between">
          <Text fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
            {priceFormatter(price)}원
          </Text>
          <Button
            float="right"
            px={{ base: 4, lg: 28 }}
            py={{ base: 2, lg: 6 }}
            color="white"
            bgColor={theme.colors.orange[300]}
            alignSelf="flex-end"
            isDisabled={isSold}
            onClick={onSubmitOrder}
          >
            주문 신청
          </Button>
        </Flex>
        <PurchaseImages fileNames={fileNames} />
        <Text
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          fontWeight="600"
          m="2rem 0 2rem 0"
        >
          설명
        </Text>
        <DescriptionBox description={description} />
        <Text
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          fontWeight="600"
          marginBottom="2rem"
        >
          결함
        </Text>
        <DescriptionBox description={defect} />
        <Text
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
          fontWeight="600"
          marginBottom="2rem"
        >
          연락처: {contact}
        </Text>
        <PriceCheck itemType={itemType} />
      </Box>
    </Flex>
  );
};
