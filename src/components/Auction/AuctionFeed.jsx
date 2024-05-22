import { Flex, Text, Box } from '@chakra-ui/react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getAuctionList } from 'src/apis/materials';

const AuctionFeed = ({ selectedCategory }) => {
  const { data: auctions, status } = useQuery({
    queryKey: ['auctions'],
    queryFn: getAuctionList,
  });

  console.log(auctions);

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
              <Flex key={auction.id} mb={4}>
                <ImageField
                  src={auction.preSignedUrl || 'default-image-url'}
                  alt={auction.productName}
                />
                <TextField>
                  <Text>{auction.productName}</Text>
                  <Text>{auction.price}</Text>
                  <Text>{auction.itemType}</Text>
                  <Text>{auction.bidCount}</Text>
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
`;
