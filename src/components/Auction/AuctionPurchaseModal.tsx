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

interface AuctionPurchaseModalProps {
  closeModal: () => void;
}

export const AuctionPurchaseModal = ({
  closeModal,
}: AuctionPurchaseModalProps) => {
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
            <Box fontSize="3rem">1,200,000원</Box>
            <Flex justifyContent="center">
              <Button
                color="white"
                bgColor={theme.colors.red[500]}
                py="1rem"
                px="2rem"
                m="1rem"
              >
                입찰가 감소
              </Button>
              <Button
                color="white"
                bgColor={theme.colors.green[400]}
                py="1rem"
                px="2rem"
                m="1rem"
              >
                입찰가 증가
              </Button>
            </Flex>
          </Flex>
        </ModalBody>
        <Flex justifyContent="flex-end" p="2rem">
          <Button onClick={closeModal} mx="1rem">
            취소
          </Button>
          <Button bgColor={theme.colors.blue[500]} mx="1rem" color="white">
            입찰하기
          </Button>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
