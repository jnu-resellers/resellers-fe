import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tooltip,
} from '@chakra-ui/react';

interface CurrentPriceStatProps {
  nowPrice: number;
  startPrice: number;
}
const CurrentPriceStat = ({ nowPrice, startPrice }: CurrentPriceStatProps) => {
  return (
    <Stat>
      <StatLabel>현재 가격</StatLabel>
      <StatNumber>{nowPrice.toLocaleString('ko-KR')}원</StatNumber>
      <Tooltip padding={2} label="시작가 대비 얼마나 올랐는지 알려드려요.">
        <StatHelpText>
          <StatArrow type="increase" />
          {(((nowPrice - startPrice) / startPrice) * 100).toFixed(2)}%
        </StatHelpText>
      </Tooltip>
    </Stat>
  );
};

export default CurrentPriceStat;
