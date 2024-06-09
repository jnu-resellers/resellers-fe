import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getRegisteredAuctionList } from '../../apis/auctions';
import { Stack, Button, Box, Text } from '@chakra-ui/react';
import AuctionListItem from './AuctionListItem';

interface MyRegisteredAuctionListProps {
  userId: number;
}

const MyRegisteredAuctionList = ({ userId }: MyRegisteredAuctionListProps) => {
  const navigate = useNavigate();

  const { data, status } = useQuery({
    queryKey: ['registeredAuction', userId],
    queryFn: () => getRegisteredAuctionList({ memberId: userId }),
  });

  const onRedirectRegister = () => {
    navigate('/auction-form');
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
          아직 경매를 등록한 내역이 없습니다.
        </Text>
        <Button onClick={onRedirectRegister}>경매 등록하러 가기</Button>
      </Stack>
    );

  return (
    <Stack>
      {data.response.map((auction) => (
        <AuctionListItem
          key={auction.auctionId}
          auctionId={auction.auctionId}
          title={auction.productName}
          category={auction.itemType}
          mainImageUrl={auction.fileName}
          price={auction.nowPrice}
          auctionStatus={auction.auctionStatus}
        />
      ))}
    </Stack>
  );
};

export default MyRegisteredAuctionList;
