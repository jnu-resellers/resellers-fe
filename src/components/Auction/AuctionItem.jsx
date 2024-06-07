import { Flex, Text, Box, Image } from '@chakra-ui/react';
import { generateImgCloudFrontUrl } from 'src/utils/url';

const AuctionItem = ({ auction, timeLeft, onClick }) => {
  const defaultTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const actualTimeLeft = timeLeft || defaultTimeLeft;

  return (
    <Flex
      mb={8}
      onClick={onClick}
      cursor="pointer"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
    >
      <Image
        src={generateImgCloudFrontUrl(auction.imageName)}
        height={{ base: '20rem', md: '23rem' }}
        width={{ base: '100%', md: '18rem' }}
        bg="gray.300"
        border="1px solid #aaa"
        objectFit="cover"
        _hover={{ opacity: 0.8 }}
      />
      <Box
        height={{ base: 'auto', md: '23rem' }}
        width={{ base: '100%', md: '57rem' }}
        border="1px solid #aaa"
        p={{ base: 4, md: 8 }}
        mt={{ base: 0, md: 0 }}
      >
        <Text mb="1" color="gray.500" fontSize={{ base: 'lg', md: 'xl' }}>
          {auction.itemType}
        </Text>
        <Text fontWeight="bold" fontSize={{ base: 'xl', md: 'xl' }}>
          {auction.productName}
        </Text>
        <Flex
          align={{ base: 'flex-start', md: 'end' }}
          flexDirection={{ base: 'column', md: 'row' }}
          mt={{ base: 2, md: 8 }}
        >
          <Text
            w={{ base: '100%', md: '35%' }}
            color="gray.500"
            fontSize={{ base: 'lg', md: 'xl' }}
          >
            {actualTimeLeft.days === 0 &&
            actualTimeLeft.hours === 0 &&
            actualTimeLeft.minutes === 0 &&
            actualTimeLeft.seconds === 0
              ? '경매 종료'
              : `남은 시간: ${actualTimeLeft.days}일 ${actualTimeLeft.hours}시간 ${actualTimeLeft.minutes}분 ${actualTimeLeft.seconds}초`}
          </Text>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ base: 'flex-start', md: 'flex-end' }}
            width={{ base: '100%', md: '65%' }}
            mt={{ base: 4, md: 36 }}
          >
            <Text
              fontWeight="bold"
              fontSize={{ base: 'lg', md: 'xl' }}
              color={auction.bidCount > 9 ? 'red.500' : 'black'}
            >
              입찰 {auction.bidCount}건
            </Text>
            <Text fontWeight="bold" fontSize={{ base: 'xl', md: '24px' }}>
              현재가 {auction.price.toLocaleString()}원
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AuctionItem;
