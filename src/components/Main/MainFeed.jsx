import { Text, Card, CardBody, Grid, Box } from '@chakra-ui/react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getMaterials } from 'src/apis/materials';
import { generateImgCloudFrontUrl } from '../../utils/url';

const MAX_PRODUCT_NAME_LENGTH = 26;

const MainFeed = ({ selectedCategory }) => {
  const navigate = useNavigate();

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

  const handleCardClick = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <Box display="flex" justifyContent="center">
      {filteredMaterials.length > 0 ? (
        <Grid templateColumns="repeat(5, 1fr)" gap="10">
          {filteredMaterials.map((material) => (
            <Card
              key={material.id}
              onClick={() => handleCardClick(material.id)}
            >
              <ImageWrapper>
                <ImageField
                  src={generateImgCloudFrontUrl(material.fileName)}
                  alt={material.productName}
                />
                {material.isSold && <SoldOutText>SOLD OUT</SoldOutText>}
              </ImageWrapper>
              <CardBody
                fontSize="md"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Text mb="3">
                  {material.productName.length > MAX_PRODUCT_NAME_LENGTH
                    ? `${material.productName.substring(
                        0,
                        MAX_PRODUCT_NAME_LENGTH
                      )} ···`
                    : material.productName}
                </Text>
                <Text fontWeight="bold">
                  {material.totalPrice.toLocaleString()}원
                </Text>
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

const ImageWrapper = styled.div`
  position: relative;
  height: 13rem;
  width: 13rem;
`;

const ImageField = styled.img`
  height: 100%;
  width: 100%;
  background-color: #cacaca;
  object-fit: cover;
  &:hover {
    opacity: 0.8;
  }
`;

const SoldOutText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;
