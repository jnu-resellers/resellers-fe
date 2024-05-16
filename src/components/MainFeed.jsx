import { Text, Card, CardBody, Grid, Box, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getMaterials } from 'src/apis/materials';

const MainFeed = () => {
  const { data: materials, status } = useQuery({
    queryKey: ['materials'],
    queryFn: getMaterials,
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

  return (
    <Box display="flex" justifyContent="center">
      <Grid templateColumns="repeat(4, 1fr)" gap="10">
        {materials.map((material) => (
          <Card key={material.id}>
            <ImageField />
            <CardBody fontSize="md">
              <Text mb="3">
                {material.title.length > 15
                  ? `${material.title.substring(0, 15)} ···`
                  : material.title}
              </Text>
              <Flex justifyContent="space-between">
                <Text color="gray.400">{material.jobType}</Text>
                <Text fontWeight="bold">
                  {material.totalPrice.toLocaleString()}원
                </Text>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default MainFeed;

const ImageField = styled.img`
  height: 21rem;
  background-color: #cacaca;
`;
