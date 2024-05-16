import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface TermsOfUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfUseModal = ({ isOpen, onClose }: TermsOfUseModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>서비스 이용 약관</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          중고 기자재 거래 플랫폼 이용약관 제1장 총칙 제1조 (목적) 이 약관은
          중고 기자재 거래 플랫폼(이하 '플랫폼')이 제공하는 중고 기자재 거래
          서비스의 이용 조건 및 절차, 이용자와 플랫폼의 권리, 의무, 책임사항 및
          기타 필요한 사항을 규정함을 목적으로 합니다. 제2장 구매 및 판매 보증
          제도 제2조 (구매자 보증 제도) 구매자는 플랫폼을 통해 구매한 중고
          기자재에 대하여 6개월간의 보증 기간을 가집니다. 이 기간 동안 구매한
          기자재에 고장이 발생할 경우, 플랫폼은 A/S 위탁업체를 통해 문제를
          해결합니다.판매자는 기자재 판매 가격의 일정 퍼센트(이하 '보증금')를
          플랫폼에 지급해야 합니다. 이 보증금은 구매자 보증 제도의 재원으로
          사용됩니다. 제3조 (보증금 관리) 보증금은 판매자로부터 받은 후, 별도의
          보증금 계정에 보관됩니다. 보증금은 6개월의 보증 기간이 만료되고, 해당
          기간 동안 구매한 기자재에 대한 고장 신고가 없을 경우 판매자에게
          반환됩니다.구매자가 보증 기간 내 기자재 고장을 신고할 경우, 보증금에서
          해당 수리 비용을 차감하여 A/S 위탁업체에 지급합니다. 수리 비용이
          보증금을 초과할 경우, 초과 금액은 판매자의 책임입니다. 제4조 (고장
          신고 및 처리 절차) 구매자는 기자재 고장을 플랫폼에 신고해야 합니다.
          신고는 플랫폼 내 제공되는 고장 신고 시스템을 통해 진행됩니다.플랫폼은
          신고 접수 후, 48시간 내에 A/S 위탁업체를 통해 초기 진단을 진행합니다.
          필요한 경우 현장 점검을 시행할 수 있습니다.수리가 필요한 경우, A/S
          위탁업체는 수리 계획 및 예상 비용을 플랫폼과 구매자에게 통보합니다.
          수리 비용은 보증금에서 차감되며, 수리 완료 후 남은 보증금(있을 경우)은
          판매자에게 반환됩니다. 제5조 (보증금 반환) 보증 기간 만료 후, 고장
          신고가 없을 경우 보증금은 판매자에게 전액 반환됩니다. 반환 절차는 보증
          기간 종료 후 14일 이내에 진행됩니다.보증금 반환 시, 플랫폼은
          판매자에게 반환 절차 및 필요 서류에 대한 안내를 합니다. 제3장 기타
          조항 제6조 (권리 및 의무) 본 약관에 명시되지 않은 사항에 대하여는 관련
          법령 및 일반적인 상거래 관행에 따릅니다. 제7조 (분쟁 해결) 이 약관의
          해석 및 적용에 관한 분쟁은 대한민국 법률을 준거법으로 하며, 분쟁 발생
          시 플랫폼의 소재지 관할 법원을 제1심 관할 법원으로 합니다. 본
          이용약관은 [년도]년 [월]일부터 시행됩니다.
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TermsOfUseModal;
