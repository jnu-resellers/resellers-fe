import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  CardBody,
  Box,
  Text,
  theme,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../../apis/auth';
import { useNavigate } from 'react-router-dom';
import { LS_MEMBER_ID } from '../../constants/lsKey';

interface ProfileCardProps {
  userId: number;
}
const ProfileCard = ({ userId }: ProfileCardProps) => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ['memberInfo', userId],
    queryFn: () => getUserInfo({ memberId: userId }),
  });

  const onLogOut = () => {
    localStorage.removeItem(LS_MEMBER_ID);
    alert('로그아웃 되었습니다. 메인 페이지로 이동합니다.');
    navigate('/');
  };

  return (
    <Card mt={12}>
      <CardHeader>
        <Flex justifyContent="space-between" alignItems="start">
          <Flex alignItems="center" gap={4}>
            <Avatar name={data?.response.nickname} src="" size="lg" />
            <Box>
              <Text fontSize="x-large" fontWeight={700}>
                {data?.response.nickname} 님,
              </Text>
              <Text>&nbsp;안녕하세요.</Text>
            </Box>
          </Flex>
          <Text color={theme.colors.gray[400]} onClick={onLogOut}>
            로그아웃
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        아래 메뉴를 통해 구매 내역과 판매 내역을 손쉽게 확인할 수 있어요.
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
