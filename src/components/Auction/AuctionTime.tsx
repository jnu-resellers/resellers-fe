import { Flex, Text, theme } from '@chakra-ui/react';
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
    <Flex flexDirection="column" color={theme.colors.gray[400]}>
      <Text fontSize={{ base: 'small', md: 'medium' }}>
        시작 시간 : {timeFormatter(startAt)}
      </Text>
      <Text fontSize={{ base: 'small', md: 'medium' }}>
        종료 시간 : {timeFormatter(endAt)}
      </Text>
      <Text fontSize={{ base: 'small', md: 'medium' }}>
        남은 시간 : {restTime}
      </Text>
    </Flex>
  );
};
