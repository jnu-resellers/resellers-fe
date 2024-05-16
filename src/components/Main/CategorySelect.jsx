import { Heading, Box, Grid, Text } from '@chakra-ui/react';

const CategorySelect = ({ onCategorySelect }) => {
  const categories = [
    '냉장고/냉동고',
    '쇼케이스',
    '가구',
    '가스레인지/인덕션',
    '포장기계',
    '세척기',
    '싱크대/작업대',
    '커피머신',
    '제빙기',
    '에어컨',
    '주방잡화',
  ];

  return (
    <div>
      <Heading size="md" mb="4">
        상품 카테고리
      </Heading>
      <Box py="4" bg="blackAlpha.100" w="100%" mb="10">
        <Grid templateColumns="repeat(7, 1fr)" gap="5">
          {categories.map((category, index) => (
            <Box key={index} ml="4" bg="blackAlpha">
              <Text
                as="span"
                cursor="pointer"
                onClick={() => onCategorySelect(category)}
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
