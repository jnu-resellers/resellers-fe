import { Box, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getAuctionBidList } from 'src/apis/auctions';

interface AuctionBidListProps {
  auctionId: number;
}
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
            <Th>입찰자 닉네임</Th>
            <Th>입찰 가격</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.bids.map((bid, index) => (
            <Tr key={index}>
              <Td>{bid.nickname}</Td>
              <Td>{bid.price.toLocaleString('ko-KR')}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AuctionBidList;
