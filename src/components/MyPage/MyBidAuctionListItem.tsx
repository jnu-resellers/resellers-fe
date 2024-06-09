import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  theme,
  Image,
  Text,
} from '@chakra-ui/react';
import { generateImgCloudFrontUrl } from '../../utils/url';
import { useNavigate } from 'react-router-dom';

interface MyBidAuctionListItemProps {
  mainImageUrl: string;
  title: string;
  category: string;
  auctionStatus: '입찰' | '낙찰' | '패찰';
  nowPrice: number;
  bidPrice: number;
  deadline: string;
  auctionId: number;
}

const generateAuctionStatusBgColor = (
  auctionStatus: '입찰' | '낙찰' | '패찰'
) => {
  switch (auctionStatus) {
    case '낙찰':
      return theme.colors.green[600];
    case '입찰':
      return theme.colors.yellow[300];
    case '패찰':
      return theme.colors.red[500];
    default:
      throw new Error('never reach here ');
  }
};

const renderDateFormat = (dateStr: string) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-indexed
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
};

const MyBidAuctionListItem = ({
  mainImageUrl,
  title,
  category,
  auctionStatus,
  nowPrice,
  bidPrice,
  deadline,
  auctionId,
}: MyBidAuctionListItemProps) => {
  const navigate = useNavigate();

  const onRedirectAuctionDetail = () => {
    navigate(`/auction-purchase/${auctionId}`);
  };

  return (
    <Card>
      <CardBody>
        <Flex gap={8} flexDirection={{ base: 'column', md: 'row' }}>
          <Image
            w={{ base: '100%', md: '150px' }}
            h={{ base: '100%', md: '200px' }}
            src={generateImgCloudFrontUrl(mainImageUrl)}
            alt={title}
          />
          <Box>
            <Heading as="h3" mb={4}>
              {title}
            </Heading>
            <Text color={theme.colors.gray[400]} mb={2}>
              카테고리: {category}
            </Text>
            <Flex gap={4} alignItems="center">
              <Box
                px={2}
                color={theme.colors.white}
                bgColor={generateAuctionStatusBgColor(auctionStatus)}
                borderRadius={4}
              >
                {auctionStatus}
              </Box>
              <Text fontSize="x-large">
                {nowPrice.toLocaleString('ko-KR')}원
              </Text>
            </Flex>
            <Flex gap={4} alignItems="center" mb={4}>
              <Text>입찰한 가격:</Text>
              <Text>{bidPrice.toLocaleString('ko-KR')}원</Text>
            </Flex>
            <Flex
              gap={4}
              alignItems={{ base: '', md: 'center' }}
              justifyContent="space-between"
              flexDirection={{ base: 'column-reverse', md: 'row' }}
            >
              <Button onClick={onRedirectAuctionDetail}>상세 정보</Button>
              <Text color={theme.colors.gray[500]}>
                경매 마감일: {renderDateFormat(deadline)}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MyBidAuctionListItem;
