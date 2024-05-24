import { useState, useEffect } from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getAuctionList } from 'src/apis/materials';
import AuctionItem from './AuctionItem';
import calculateTimeLeft from 'src/utils/calculateTimeLeft';

const AuctionFeed = ({ selectedCategory }) => {
  const { data: auctions, status } = useQuery({
    queryKey: ['auctions'],
    queryFn: getAuctionList,
  });

  const [timeLefts, setTimeLefts] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      if (auctions) {
        const newTimeLefts = {};
        auctions.forEach((auction) => {
          newTimeLefts[auction.auctionId] = calculateTimeLeft(auction.endAt);
        });
        setTimeLefts(newTimeLefts);
      }
    };

    updateTimes();
    const timer = setInterval(updateTimes, 1000);
    return () => clearInterval(timer);
  }, [auctions]);

  if (status === 'error') return <>에러 상태</>;
  if (status === 'loading') return <>로딩 중 ...</>;

  const filteredAuctions = auctions?.filter(
    (auction) => !selectedCategory || auction.itemType === selectedCategory
  );

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Flex direction="column">
          {filteredAuctions && filteredAuctions.length > 0 ? (
            filteredAuctions.map((auction) => (
              <AuctionItem
                key={auction.auctionId}
                auction={auction}
                timeLeft={timeLefts[auction.auctionId]}
              />
            ))
          ) : (
            <Text mt="20" fontSize="xl">
              상품이 존재하지 않습니다.
            </Text>
          )}
        </Flex>
      </Box>
    </>
  );
};

export default AuctionFeed;