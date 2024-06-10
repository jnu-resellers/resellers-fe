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
import { patchAuctionPrice } from 'src/apis/auctions';
import { useAuction } from '@/hooks/Auction/useAuction';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LS_MEMBER_ID } from 'src/constants/lsKey';

interface AuctionPurchaseModalProps {
  priceUnit: number;
  nowPrice: number;
  sellerId: number;
  closeModal: () => void;
}

export const AuctionPurchaseModal = ({
  priceUnit,
  nowPrice,
  sellerId,
  closeModal,
}: AuctionPurchaseModalProps) => {
  const memberId = localStorage.getItem(LS_MEMBER_ID);
  const { id } = useParams();
  const auctionId = Number(id);
  const { addedPrice, addPriceUnit, subtractPriceUnit } = useAuction();
  const queryClient = useQueryClient();
  const sellerIdStr = sellerId.toString();
  const { mutate } = useMutation({
    mutationKey: ['auction'],
    mutationFn: patchAuctionPrice,
    onSuccess: () => {
      alert('입찰에 성공했습니다.');
      queryClient.invalidateQueries({
        queryKey: ['auctionBidList'],
      });
      closeModal();
    },
    onError: (error) => {
      alert(error);
    },
  });

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
              if (!memberId) {
                alert('로그인이 필요한 서비스입니다.');
                return;
              }
              if (nowPrice >= addedPrice) {
                alert('현재 입찰가보다 높은 가격으로 입찰해주세요.');
                return;
              }
              if (memberId === sellerIdStr) {
                alert('기자재의 판매자는 입찰할 수 없습니다.');
                return;
              }
              mutate({
                auctionId,
                price: addedPrice,
                memberId: +memberId,
              });
            }}
          >
            입찰하기
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
