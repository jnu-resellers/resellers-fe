import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getMyAuctionList } from '../../apis/auctions';
import { Stack, Button, Box, Text } from '@chakra-ui/react';
import MyBidAuctionListItem from './MyBidAuctionListItem';

interface MyBidAuctionListProps {
  userId: number;
}

const MyBidAuctionList = ({ userId }: MyBidAuctionListProps) => {
  const navigate = useNavigate();

  const { data, status } = useQuery({
    queryKey: ['myBidAuctionList', userId],
    queryFn: () => getMyAuctionList({ memberId: userId }),
  });

  const onRedirectHome = () => {
    navigate('/auction');
  };

  if (status === 'pending')
    return (
      <Stack>
        <Box>로딩 중...</Box>
      </Stack>
    );

  if (status === 'error')
    return (
      <Stack>
        <Box>에러가 발생했습니다. 잠시 후 다시 시도 해주세요.</Box>
      </Stack>
    );

  if (!data.response.length)
    return (
      <Stack textAlign="center" w="100%">
        <Text my={8} fontSize={20}>
          아직 구매한 내역이 없습니다.
        </Text>
        <Button onClick={onRedirectHome}>쇼핑하러 가기</Button>
      </Stack>
    );

  return (
    <Stack>
      {data.response.map((auction) => (
        <MyBidAuctionListItem
          key={auction.auctionId}
          title={auction.productName}
          category={auction.itemType}
          mainImageUrl={auction.fileName}
          nowPrice={auction.nowPrice}
          bidPrice={auction.bidPrice}
          auctionStatus={auction.auctionStatus}
          auctionId={auction.auctionId}
          deadline={auction.deadLine}
        />
      ))}
    </Stack>
  );
};

export default MyBidAuctionList;
