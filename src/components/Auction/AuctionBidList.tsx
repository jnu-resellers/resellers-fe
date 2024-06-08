import { Box, Table, Tbody, Td, Th, Thead, Tr, theme } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getAuctionBidList } from 'src/apis/auctions';

interface AuctionBidListProps {
  auctionId: number;
}

const parseCratedAt = (createdAt: string) => {
  const [date, time] = createdAt.split('T');
  const [month, day] = date.split('-');
  const [hour, minute] = time.split(':');

  return `${month}월${day}일 ${hour}:${minute}`;
};

const AuctionBidList = ({ auctionId }: AuctionBidListProps) => {
  const { data, status } = useQuery({
    queryKey: ['auctionBidList', auctionId],
    queryFn: () => getAuctionBidList({ auctionId }),
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

  return (
    <Box>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>입찰 시간</Th>
            <Th>입찰 가격</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.bids.map((bid, index) => (
            <Tr key={index}>
              <Td color={theme.colors.gray[400]}>
                {parseCratedAt(bid.createdAt)}
              </Td>
              <Td>{bid.price.toLocaleString('ko-KR')}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AuctionBidList;
