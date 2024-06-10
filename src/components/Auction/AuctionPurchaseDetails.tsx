import {
  Flex,
  Text,
  Box,
  Button,
  Accordion,
  AccordionItem,
  AccordionPanel,
  Tooltip,
} from '@chakra-ui/react';
import { DescriptionBox } from '../Purchase/DescriptionBox';
import { AuctionPurchaseImages } from './AuctionPurchaseImages';
import { theme } from '@chakra-ui/react';
import { AuctionPurchaseModal } from './AuctionPurchaseModal';
import { useAuction } from '@/hooks/Auction/useAuction';
import { AuctionTime } from './AuctionTime';
import AuctionBidList from './AuctionBidList';
import CurrentPriceStat from './CurrentPriceStat';
import AuctionAccordionHeader from './AuctionAccordionHeader';

interface AuctionPurchaseDetailProps {
  imageNames: string[];
  itemType: string;
  productName: string;
  bidCount: number;
  startAt: string;
  endAt: string;
  startPrice: number;
  nowPrice: number;
  writer: string;
  description: string;
  defect: string;
  priceUnit: number;
  auctionId: number;
  sellerId: number;
}

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
  auctionId,
  sellerId,
}: AuctionPurchaseDetailProps) => {
  const { isModalOpen, openModal, closeModal } = useAuction();

  const priceFormatter = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Flex flexDirection="column" w="100%" p={{ base: 2, sm: 4, lg: '2.25rem' }}>
      <Box>
        <Flex gap={10} mb={8} flexWrap="wrap">
          <AuctionPurchaseImages imageNames={imageNames} />
          <Flex flexDirection="column" justifyContent="center">
            <Text
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
              fontWeight="500"
            >
              {productName}
            </Text>
            <Text
              fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
              mb={4}
              color={theme.colors.gray[400]}
            >
              판매자: {writer}
            </Text>
            <Text mb={2} color={theme.colors.gray[400]}>
              시작가격 : {priceFormatter(startPrice)}원
            </Text>
            <Box mb={4}>
              <CurrentPriceStat nowPrice={nowPrice} startPrice={startPrice} />
            </Box>
            <Box fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} fontWeight="600">
              입찰 건수 : {bidCount}
            </Box>
            <AuctionTime startAt={startAt} endAt={endAt} />
            <Tooltip
              hasArrow
              label="입찰 및 낙찰 시에는 취소가 되지 않으니 상품 문의 시에는 입찰전 고객센터를 통해 문의 후 입찰 부탁드립니다."
              bg="red.600"
              padding={4}
            >
              <Button
                px={{ base: 4, lg: 28 }}
                py={{ base: 2, lg: 6 }}
                color="white"
                bgColor={theme.colors.orange[300]}
                mt={{ base: '1rem', lg: '2rem' }}
                onClick={openModal}
              >
                입찰 하기
              </Button>
            </Tooltip>
          </Flex>
        </Flex>
        <Accordion defaultIndex={[0, 1, 2]} mb={4} allowMultiple>
          <AccordionItem>
            <AuctionAccordionHeader title="입찰 현황" />
            <AccordionPanel>
              <AuctionBidList auctionId={auctionId} />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AuctionAccordionHeader title="설명" />
            <AccordionPanel>
              <DescriptionBox description={description} />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AuctionAccordionHeader title="결함" />
            <AccordionPanel>
              <DescriptionBox description={defect} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      {isModalOpen && (
        <AuctionPurchaseModal
          closeModal={closeModal}
          priceUnit={priceUnit}
          nowPrice={nowPrice}
          sellerId={sellerId}
        />
      )}
    </Flex>
  );
};
