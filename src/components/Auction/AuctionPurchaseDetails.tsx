import { Flex, Text, Box, Divider, Button } from '@chakra-ui/react';
import { DescriptionBox } from '../Purchase/DescriptionBox';
import { AuctionPurchaseImages } from './AuctionPurchaseImages';
import { AuctionPurchaseProps } from './AuctionPurchase';
import { theme } from '@chakra-ui/react';

const priceFormatter = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const AuctionPurchaseDetails = ({
  writer,
  product: { productName, id, preSignedUrl, description, defect },
}: AuctionPurchaseProps) => {
  return (
    <Flex flexDirection="column" w="100%" m="2.25rem 2.25rem 0 0">
      <Text fontSize="xx-large" fontWeight="500" mb="1.25rem">
        {productName}
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Box fontSize="2.5rem" fontWeight="600">
          현재 가격 : 1,200,000원
        </Box>
        <Text fontSize="larger" mb="1.25rem">
          {writer}
        </Text>
      </Flex>
      <Divider orientation="horizontal" mb="1rem" />
      <Box key={id}>
        <AuctionPurchaseImages preSignedUrl={preSignedUrl} />
        <Flex justifyContent="space-between" marginBottom="4rem">
          <Flex flexDirection="column">
            <Box fontSize="1.5rem" color={theme.colors.gray[500]}>
              시작가격 : 1,200,000원
            </Box>
            <Box fontSize="2rem" fontWeight="600">
              입찰 건수 : 16회
            </Box>
            <Button
              display="flex"
              bgColor={theme.colors.orange[200]}
              color="white"
              w="16rem"
              h="4rem"
              fontSize="1.25rem"
              fontWeight="600"
              justifyContent="center"
              marginTop="2rem"
            >
              입찰 하기
            </Button>
          </Flex>
          <Flex flexDirection="column">
            <Box>시작 시간</Box>
            <Box>종료 시간</Box>
            <Box>남은 시간</Box>
          </Flex>
        </Flex>
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
