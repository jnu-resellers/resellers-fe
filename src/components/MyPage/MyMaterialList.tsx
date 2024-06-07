import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { getRegisteredMaterial } from '../../apis/materials';
import MyMaterialListItem from './MyMaterialListItem';
import { useNavigate } from 'react-router-dom';

interface MyMaterialListProps {
  userId: number;
}
const MyMaterialList = ({ userId }: MyMaterialListProps) => {
  const navigate = useNavigate();

  const { data, status } = useQuery({
    queryKey: ['registeredMaterial', userId],
    queryFn: () => getRegisteredMaterial({ memberId: userId }),
  });
  const onRedirectRegister = () => {
    navigate('/product-form');
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

  if (!data.response.materials.length)
    return (
      <Stack textAlign="center" w="100%">
        <Text my={8} fontSize={20}>
          아직 판매한 내역이 없습니다.
        </Text>
        <Button onClick={onRedirectRegister}>물품 등록하러 가기</Button>
      </Stack>
    );

  const materials = data.response.materials.sort((a) => {
    return a.isSold ? 1 : -1;
  });

  return (
    <Stack>
      {materials.map((material) => (
        <MyMaterialListItem
          key={material.id}
          id={material.id}
          title={material.productName}
          category={material.itemType}
          mainImageUrl={material.fileName}
          price={material.totalPrice}
          isSold={material.isSold}
        />
      ))}
    </Stack>
  );
};

export default MyMaterialList;
