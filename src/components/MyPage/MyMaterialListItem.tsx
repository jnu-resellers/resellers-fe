import {
  Card,
  CardBody,
  Flex,
  Box,
  Text,
  Heading,
  theme,
  Button,
  Image,
} from '@chakra-ui/react';
import { generateImgCloudFrontUrl } from '../../utils/url';
import { useNavigate } from 'react-router-dom';

interface MyMaterialListItemProps {
  id: number;
  mainImageUrl: string;
  title: string;
  category: string;
  isSold: boolean;
  price: number;
  tradeId?: number;
}

const MyMaterialListItem = ({
  id,
  mainImageUrl,
  title,
  category,
  isSold,
  price,
  tradeId,
}: MyMaterialListItemProps) => {
  const navigate = useNavigate();
  const onRedirectMaterialDetail = () => {
    navigate(`/purchase/${id}`);
  };

  const onRedirectTransaction = () => {
    if (!tradeId) {
      return;
    }
    navigate(`/transaction-information/${tradeId}`);
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
                bgColor={
                  isSold ? theme.colors.green[600] : theme.colors.yellow[300]
                }
                borderRadius={4}
              >
                {isSold ? '판매 완료' : '판매중'}
              </Box>
              <Text fontSize="x-large">{price.toLocaleString('ko-KR')}원</Text>
            </Flex>
            <Flex gap={4}>
              <Button onClick={onRedirectMaterialDetail}>등록 상세 정보</Button>
              {tradeId && (
                <Button
                  onClick={onRedirectTransaction}
                  color={theme.colors.white}
                  backgroundColor={
                    isSold ? theme.colors.green[300] : theme.colors.green[500]
                  }
                >
                  {isSold ? '거래 완료된 주문' : '주문 상세 정보'}
                </Button>
              )}
            </Flex>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MyMaterialListItem;
