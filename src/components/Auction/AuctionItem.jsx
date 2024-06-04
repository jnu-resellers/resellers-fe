// AuctionItem.js
import { Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';
import { generateImgCloudFrontUrl } from 'src/utils/url';

const AuctionItem = ({ auction, timeLeft, onClick }) => {
  const defaultTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const actualTimeLeft = timeLeft || defaultTimeLeft;

  return (
    <Flex mb={8} onClick={onClick} cursor="pointer">
      <ImageField src={generateImgCloudFrontUrl(auction.imageName)} />
      <TextField>
        <Text mb="1" color="gray.500" fontSize="xl">
          {auction.itemType}
        </Text>
        <Text fontWeight="bold" fontSize="xl">
          {auction.productName}
        </Text>
        <Flex align="end">
          <Text w="35%" mt="52" color="gray.500" fontSize="xl">
            {actualTimeLeft.days === 0 &&
            actualTimeLeft.hours === 0 &&
            actualTimeLeft.minutes === 0 &&
            actualTimeLeft.seconds === 0
              ? '경매 종료'
              : `남은 시간: ${actualTimeLeft.days}일 ${actualTimeLeft.hours}시간 ${actualTimeLeft.minutes}분 ${actualTimeLeft.seconds}초`}
          </Text>
          <FlexContainer>
            <Text
              fontWeight="bold"
              fontSize="xl"
              color={auction.bidCount > 9 ? 'red.500' : 'black'}
            >
              입찰 {auction.bidCount}건
            </Text>
            <Text fontWeight="bold" fontSize="24">
              현재가 {auction.price.toLocaleString()}원
            </Text>
          </FlexContainer>
        </Flex>
      </TextField>
    </Flex>
  );
};

export default AuctionItem;

const ImageField = styled.img`
  height: 23rem;
  width: 18rem;
  background-color: #cacaca;
  border: 0.01rem solid #aaa;
  object-fit: cover;
  &:hover {
    opacity: 0.8;
  }
`;

const TextField = styled.div`
  height: 23rem;
  width: 57rem;
  border: 0.01rem solid #aaa;
  padding: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 68%;
`;
