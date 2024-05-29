import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Flex,
  Box,
  Button,
  theme,
} from '@chakra-ui/react';
import { useAuctionMutate } from '@/hooks/Auction/useAuctionMutate';
import { useAuction } from '@/hooks/Auction/useAuction';

interface AuctionPurchaseModalProps {
  priceUnit: number;
  nowPrice: number;
  closeModal: () => void;
}

export const AuctionPurchaseModal = ({
  priceUnit,
  nowPrice,
  closeModal,
}: AuctionPurchaseModalProps) => {
  const id = 1;
  const auctionId = id;
  const { addedPrice, addPriceUnit, subtractPriceUnit } = useAuction();
  const { patchAuctionPrice } = useAuctionMutate();
  const submitPrice = () => {
    if (addedPrice === 0) {
      alert('현재가 보다 높은 입찰가를 설정해주세요.');
      return;
    }
    patchAuctionPrice(auctionId, addedPrice || nowPrice);
    closeModal();
    window.location.reload();
  };

  return (
    <Modal isOpen={true} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>입찰하기</ModalHeader>
        <ModalBody>
          <Flex
            justifyContent="center"
            textAlign="center"
            flexDirection="column"
          >
            <Box fontSize="3.75rem" fontWeight="600">
              입찰가 선정
            </Box>
            {addedPrice ? (
              <Box fontSize="3rem">{addedPrice}원</Box>
            ) : (
              <Box fontSize="3rem">{nowPrice}원</Box>
            )}
            <Flex justifyContent="center">
              <Button
                color="white"
                bgColor={theme.colors.red[500]}
                py="1rem"
                px="2rem"
                m="1rem"
                onClick={() => subtractPriceUnit(priceUnit, nowPrice)}
              >
                입찰가 감소
              </Button>
              <Button
                color="white"
                bgColor={theme.colors.green[400]}
                py="1rem"
                px="2rem"
                m="1rem"
                onClick={() => addPriceUnit(priceUnit, nowPrice)}
              >
                입찰가 증가
              </Button>
            </Flex>
            <Flex justifyContent="flex-end" mr="2rem">
              단위 : {priceUnit}원
            </Flex>
          </Flex>
        </ModalBody>
        <Flex justifyContent="flex-end" p="2rem">
          <Button onClick={closeModal} mx="1rem">
            취소
          </Button>
          <Button
            bgColor={theme.colors.blue[500]}
            mx="1rem"
            color="white"
            onClick={() => {
              submitPrice();
            }}
          >
            입찰하기
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
