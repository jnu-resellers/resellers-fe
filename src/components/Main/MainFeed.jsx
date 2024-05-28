import { Text, Card, CardBody, Grid, Box, Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getMaterials } from 'src/apis/materials';
import { generateImgCloudFrontUrl } from '../../utils/url';

const MainFeed = ({ selectedCategory }) => {
  const { data: materials, status } = useQuery({
    queryKey: ['materials', selectedCategory],
    queryFn: () => getMaterials(selectedCategory),
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

  const filteredMaterials = materials.filter(
    (material) =>
      material.itemType === selectedCategory || selectedCategory === ''
  );

  return (
    <Box display="flex" justifyContent="center">
      {filteredMaterials.length > 0 ? (
        <Grid templateColumns="repeat(4, 1fr)" gap="10">
          {filteredMaterials.map((material) => (
            <Card key={material.id}>
              <ImageField
                src={generateImgCloudFrontUrl(material.fileName)}
                alt={material.productName}
              />
              <CardBody fontSize="md">
                <Text mb="3">
                  {material.productName.length > 15
                    ? `${material.productName.substring(0, 15)} ···`
                    : material.productName}
                </Text>
                <Flex justifyContent="space-between">
                  <Text color="gray.500">{material.itemType}</Text>
                  <Text fontWeight="bold">
                    {material.totalPrice.toLocaleString()}원
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </Grid>
      ) : (
        <Text mt="40" fontSize="xl">
          상품이 존재하지 않습니다.
        </Text>
      )}
    </Box>
  );
};

export default MainFeed;

const ImageField = styled.img`
  height: 23rem;
  width: 18rem;
  background-color: #cacaca;
`;
