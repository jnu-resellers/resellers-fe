import { Box, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useAuction } from '@/hooks/Auction/useAuction';

interface AuctionTimeProps {
  startAt: string;
  endAt: string;
}

export const AuctionTime = ({ startAt, endAt }: AuctionTimeProps) => {
  const { restTimeChecker, timeFormatter } = useAuction();
  const [restTime, setTime] = useState(restTimeChecker(endAt));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(restTimeChecker(endAt));
    }, 1000);
    return () => clearInterval(interval);
  }, [restTime]);

  return (
    <Flex flexDirection="column">
      <Box>시작 시간 : {timeFormatter(startAt)}</Box>
      <Box>종료 시간 : {timeFormatter(endAt)}</Box>
      <Box>남은 시간 : {restTime}</Box>
    </Flex>
  );
};
