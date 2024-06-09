import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
  theme,
} from '@chakra-ui/react';
import { generateImgCloudFrontUrl } from '../../utils/url';
import { useNavigate } from 'react-router-dom';

interface AuctionListItemProps {
  mainImageUrl: string;
  title: string;
  category: string;
  auctionStatus: '판매중' | '유찰' | '낙찰';
  price: number;
  auctionId: number;
}

const generateAuctionStatusBgColor = (
  auctionStatus: '판매중' | '유찰' | '낙찰'
) => {
  switch (auctionStatus) {
    case '판매중':
      return theme.colors.yellow[300];
    case '낙찰':
      return theme.colors.green[600];
    case '유찰':
      return theme.colors.red[500];
    default:
      throw new Error('never reach here ');
  }
};

const AuctionListItem = ({
  mainImageUrl,
  title,
  category,
  auctionStatus,
  price,
  auctionId,
}: AuctionListItemProps) => {
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
            <Flex gap={4} alignItems="center" mb={10}>
              <Box
                px={2}
                color={theme.colors.white}
                bgColor={generateAuctionStatusBgColor(auctionStatus)}
                borderRadius={4}
              >
                {auctionStatus}
              </Box>
              <Text fontSize="x-large">{price.toLocaleString('ko-KR')}원</Text>
            </Flex>
            <Flex gap={4}>
              <Button onClick={onRedirectAuctionDetail}>상세 정보</Button>
            </Flex>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default AuctionListItem;
