import { Flex, Text, Box, Divider, Button } from '@chakra-ui/react';
import { DescriptionBox } from '../Purchase/DescriptionBox';
import { AuctionPurchaseImages } from './AuctionPurchaseImages';
import { AuctionPurchaseProps } from './AuctionPurchase';
import { theme } from '@chakra-ui/react';
import { AuctionPurchaseModal } from './AuctionPurchaseModal';
import { useAuction } from '@/hooks/Auction/useAuction';
import { AuctionTime } from './AuctionTime';

export const AuctionPurchaseDetails = ({
  imageNames,
  productName,
  bidCount,
  startAt,
  endAt,
  startPrice,
  nowPrice,
  writer,
  description,
  defect,
  priceUnit,
}: AuctionPurchaseProps) => {
  const { isModalOpen, openModal, closeModal } = useAuction();

  const priceFormatter = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Flex flexDirection="column" w="100%" m="2.25rem 2.25rem 0 0">
      <Text fontSize="xx-large" fontWeight="500" mb="1.25rem">
        {productName}
      </Text>
      <Flex justifyContent="space-between" alignItems="center">
        <Box fontSize="2.5rem" fontWeight="600">
          현재 가격 : {priceFormatter(nowPrice)}원
        </Box>
        <Text fontSize="larger" mb="1.25rem">
          {writer}
        </Text>
      </Flex>
      <Divider orientation="horizontal" mb="1rem" />
      <Box>
        <AuctionPurchaseImages imageNames={imageNames} />
        <Flex justifyContent="space-between" marginBottom="4rem">
          <Flex flexDirection="column">
            <Box fontSize="1.5rem" color={theme.colors.gray[500]}>
              시작가격 : {priceFormatter(startPrice)}원
            </Box>
            <Box fontSize="2rem" fontWeight="600">
              입찰 건수 : {bidCount}
            </Box>
            <Button
              px={28}
              py={6}
              color="white"
              bgColor={theme.colors.orange[300]}
              float="right"
              marginTop="2rem"
              onClick={() => {
                openModal();
              }}
            >
              입찰 하기
            </Button>
            <Box color="red" fontSize="1rem" mt="2rem">
              입찰 및 낙찰 시에는 취소가 되지 않으니 상품 문의 시에는 입찰전
              고객센터를 통해 문의 후 입찰 부탁드립니다
            </Box>
          </Flex>
          <AuctionTime startAt={startAt} endAt={endAt} />
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
      {isModalOpen && (
        <AuctionPurchaseModal
          closeModal={closeModal}
          priceUnit={priceUnit}
          nowPrice={nowPrice}
        />
      )}
    </Flex>
  );
};
