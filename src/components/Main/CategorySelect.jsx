import {
  Heading,
  Box,
  Grid,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { getCategoryList } from 'src/apis/materials';
import { useQuery } from '@tanstack/react-query';

const CategorySelect = ({ selectedCategory, onCategorySelect }) => {
  const { data: categoryList, status } = useQuery({
    queryKey: ['categoryList'],
    queryFn: getCategoryList,
  });

  const isMobile = useBreakpointValue({ base: true, md: false });

  if (status === 'error') return <>에러 상태</>;
  if (status === 'pending') return <>로딩 중 ...</>;

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
  };

  return (
    <div>
      <Heading size="md" mb="4" display={{ base: 'none', md: 'block' }}>
        상품 카테고리
      </Heading>
      <Box py={{ base: 0, md: 4 }} bg="blackAlpha.100" w="100%" mb="10">
        {isMobile ? (
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    카테고리 선택
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Grid
                  templateColumns={{
                    base: 'repeat(2, 1fr)',
                    sm: 'repeat(3, 1fr)',
                  }}
                  gap="2"
                  px={{ base: '2', md: '4' }}
                >
                  {categoryList?.map((category, index) => (
                    <Box key={index} p="2">
                      <Text
                        as="span"
                        cursor="pointer"
                        fontWeight={
                          selectedCategory === category ? 'bold' : 'normal'
                        }
                        fontSize={{
                          base: 'sm',
                          md: 'md',
                          lg: 'md',
                        }}
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </Text>
                    </Box>
                  ))}
                </Grid>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ) : (
          <Grid
            templateColumns={{
              base: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(6, 1fr)',
              xl: 'repeat(7, 1fr)',
            }}
            gap="2"
            px={{ base: '2', md: '4' }}
          >
            {categoryList?.map((category, index) => (
              <Box key={index} p="2">
                <Text
                  as="span"
                  cursor="pointer"
                  fontWeight={selectedCategory === category ? 'bold' : 'normal'}
                  fontSize={{
                    base: 'sm',
                    lg: 'sm',
                    xl: 'md',
                  }}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </Text>
              </Box>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default CategorySelect;
