import { useState, useEffect } from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getAuctionList } from 'src/apis/materials';

const AuctionFeed = ({ selectedCategory }) => {
  const { data: auctions, status } = useQuery({
    queryKey: ['auctions'],
    queryFn: getAuctionList,
  });

  const [timeLefts, setTimeLefts] = useState({});

  useEffect(() => {
    const calculateTimeLeft = (endAt) => {
      const difference = +new Date(endAt) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return timeLeft;
    };

    const updateTimes = () => {
      if (auctions) {
        const newTimeLefts = {};
        auctions.forEach((auction) => {
          newTimeLefts[auction.id] = calculateTimeLeft(auction.endAt);
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
              <Flex key={auction.id} mb={8}>
                <ImageField src={auction.preSignedUrl} />
                <TextField>
                  <Text mb="1" color="gray.500" fontSize="xl">
                    {auction.itemType}
                  </Text>
                  <Text fontWeight="bold" fontSize="xl">
                    {auction.productName}
                  </Text>
                  <S>
                    <Text w="32%" mt="52" color="gray.500" fontSize="xl">
                      남은 시간: {timeLefts[auction.id]?.days}일{' '}
                      {timeLefts[auction.id]?.hours}시간{' '}
                      {timeLefts[auction.id]?.minutes}분{' '}
                      {timeLefts[auction.id]?.seconds}초
                    </Text>
                    <FlexContainer>
                      <Text fontWeight="bold" fontSize="xl">
                        입찰 {auction.bidCount}건
                      </Text>
                      <Text fontWeight="bold" fontSize="24">
                        현재가 {auction.price.toLocaleString()}원
                      </Text>
                    </FlexContainer>
                  </S>
                </TextField>
              </Flex>
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

const ImageField = styled.img`
  height: 23rem;
  width: 18rem;
  background-color: #cacaca;
  object-fit: cover;
`;

const TextField = styled.div`
  height: 23rem;
  width: 60rem;
  border: 0.01rem solid #aaa;
  padding: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 68%;
`;
const S = styled.div`
  display: flex;
  align-items: end;
`;
