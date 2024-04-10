import React, { useState, useEffect } from 'react';
import { Text, Card, CardBody, Grid, Box, Flex } from '@chakra-ui/react';
import styled from 'styled-components';

const MainFeed = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('api/products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.response.materials);
      })
      .catch((error) => console.error('에러 발생', error));
  }, []);

  return (
    <Box display="flex" justifyContent="center">
      <Grid templateColumns="repeat(4, 1fr)" gap="10">
        {products.map((product) => (
          <Card key={product.id}>
            <ImageField />
            <CardBody fontSize="md">
              <Text mb="3">
                {product.title.length > 15
                  ? `${product.title.substring(0, 15)} ···`
                  : product.title}
              </Text>
              <Flex justifyContent="space-between">
                <Text color="gray.400">{product.jobType}</Text>
                <Text fontWeight="bold">
                  {product.totalPrice.toLocaleString()}원
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
  height: 16rem;
  background-color: #cacaca;
`;
