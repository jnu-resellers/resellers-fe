import { Heading, Box, Grid, Text } from '@chakra-ui/react';
import { getCategoryList } from 'src/apis/materials';
import { useQuery } from '@tanstack/react-query';

const CategorySelect = ({ selectedCategory, onCategorySelect }) => {
  const { data: categoryList, status } = useQuery({
    queryKey: ['categoryList'],
    queryFn: getCategoryList,
  });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
  };

  return (
    <div>
      <Heading size="md" mb="4">
        상품 카테고리
      </Heading>
      <Box py="4" bg="blackAlpha.100" w="100%" mb="10">
        <Grid templateColumns="repeat(7, 1fr)" gap="5">
          {categoryList?.map((category, index) => (
            <Box key={index} ml="4" bg="blackAlpha">
              <Text
                as="span"
                cursor="pointer"
                fontWeight={selectedCategory === category ? 'bold' : 'normal'}
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default CategorySelect;
