import {
  Flex,
  Text,
  Box,
  Divider,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tooltip,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';
import { DescriptionBox } from '../Purchase/DescriptionBox';
import { AuctionPurchaseImages } from './AuctionPurchaseImages';
import { theme } from '@chakra-ui/react';
import { AuctionPurchaseModal } from './AuctionPurchaseModal';
import { useAuction } from '@/hooks/Auction/useAuction';
import { AuctionTime } from './AuctionTime';
import AuctionBidList from './AuctionBidList';

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
}: AuctionPurchaseDetailProps) => {
  const { isModalOpen, openModal, closeModal } = useAuction();

  const priceFormatter = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Flex flexDirection="column" w="100%" m="2.25rem 2.25rem 0 0">
      <Box>
        <Flex gap={10} mb={8}>
          <AuctionPurchaseImages imageNames={imageNames} />
          <Flex flexDirection="column" justifyContent="center">
            <Text fontSize="2.5rem" fontWeight="500">
              {productName}
            </Text>
            <Text fontSize="larger" mb={4} color={theme.colors.gray[400]}>
              판매자: {writer}
            </Text>
            <Text mb={2} color={theme.colors.gray[400]}>
              시작가격 : {priceFormatter(startPrice)}원
            </Text>
            <Box mb={4}>
              <Stat>
                <StatLabel>현재 가격</StatLabel>
                <StatNumber>{priceFormatter(nowPrice)}원</StatNumber>
                <Tooltip
                  padding={2}
                  label="시작가 대비 얼마나 올랐는지 알려드려요."
                >
                  <StatHelpText>
                    <StatArrow type="increase" />
                    {(((nowPrice - startPrice) / startPrice) * 100).toFixed(2)}%
                  </StatHelpText>
                </Tooltip>
              </Stat>
            </Box>
            <Box fontSize="larger" fontWeight="600">
              입찰 건수 : {bidCount}
            </Box>
            <AuctionTime startAt={startAt} endAt={endAt} />
            <Tooltip
              hasArrow
              label="입찰 및 낙찰 시에는 취소가 되지 않으니 상품 문의 시에는 입찰전
              고객센터를 통해 문의 후 입찰 부탁드립니다."
              bg="red.600"
              padding={4}
            >
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
            </Tooltip>
          </Flex>
        </Flex>
        <Accordion defaultIndex={[0, 1, 2]} mb={4} allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Text
                fontSize="x-large"
                fontWeight="600"
                flex="1"
                textAlign="left"
              >
                입찰현황
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <AuctionBidList auctionId={auctionId} />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Text
                fontSize="x-large"
                fontWeight="600"
                flex="1"
                textAlign="left"
              >
                설명
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <DescriptionBox description={description} />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <Text
                fontSize="x-large"
                fontWeight="600"
                flex="1"
                textAlign="left"
              >
                결함
              </Text>
              <AccordionIcon />
            </AccordionButton>
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
        />
      )}
    </Flex>
  );
};
