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
import {
  useMutation,
  MutateOptions,
  useQueryClient,
} from '@tanstack/react-query';
import { patchAuctionPrice } from 'src/apis/auctions';
import { patchAuctionBidReq, patchAuctionBidRes } from 'src/apis/auctions';

import { useState } from 'react';

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
  const [addedPrice, setAddedPrice] = useState(0);
  const [priceUnitCount, setPriceUnitCount] = useState(0);

  const addPriceUnit = () => {
    setPriceUnitCount((prevPriceUnitCount) => {
      const newPriceUnitCount = prevPriceUnitCount + priceUnit;
      handleAddedPrice(newPriceUnitCount, nowPrice);
      return newPriceUnitCount;
    });
  };

  const subtractPriceUnit = () => {
    setPriceUnitCount((prevPriceUnitCount) => {
      const newPriceUnitCount = prevPriceUnitCount - priceUnit;
      if (newPriceUnitCount < 0) {
        return prevPriceUnitCount;
      }
      handleAddedPrice(newPriceUnitCount, nowPrice);
      return newPriceUnitCount;
    });
  };

  const handleAddedPrice = (priceUnitCount: number, nowPrice: number) => {
    setAddedPrice(priceUnitCount + nowPrice);
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
                onClick={subtractPriceUnit}
              >
                입찰가 감소
              </Button>
              <Button
                color="white"
                bgColor={theme.colors.green[400]}
                py="1rem"
                px="2rem"
                m="1rem"
                onClick={addPriceUnit}
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
              patchAuctionPrice({ price: nowPrice, auctionId: 1 });
              closeModal();
            }}
          >
            입찰하기
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
