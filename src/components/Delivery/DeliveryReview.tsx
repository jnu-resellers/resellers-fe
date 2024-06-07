import { Flex, Box, Text, Wrap, WrapItem, Img } from '@chakra-ui/react';
import { DELIVERY_REVIEW } from 'src/constants/delivery';

export const DeliveryReview = () => {
  return (
    <Flex
      mt="4rem"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        fontSize={{ base: 'xl', md: '4xl' }}
        fontWeight="600"
        mt={{ base: '2rem', md: '4rem' }}
      >
        사장님들이 남긴 후기를 찾아보세요.
      </Text>
      <Wrap
        mt={{ base: '2rem', md: '4rem' }}
        justify="center"
        spacing="4"
        w={{ base: '90%', md: '80rem' }}
      >
        {DELIVERY_REVIEW.map((review, index) => (
          <WrapItem key={index} width={{ base: '90%', sm: '45%', md: '40%' }}>
            <Box
              p={{ base: '1rem', md: '2rem' }}
              border="1px solid #E2E8F0"
              borderRadius="md"
              width="100%"
            >
              <Flex flexDirection="column">
                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="600">
                  {review.name}
                </Text>
                <Text
                  fontSize={{ base: 'md', md: 'xl' }}
                  color="gray.500"
                  mt="0.75rem"
                >
                  {review.content}
                </Text>
                <Flex
                  _hover={{ transform: 'scale(1.05)' }}
                  cursor="pointer"
                  p={{ base: '1rem', md: '2rem' }}
                  border="1px solid #E2E8F0"
                  mt="1rem"
                >
                  <Img
                    src={review.reviewCompany.image}
                    alt={review.reviewCompany.name}
                    borderRadius="full"
                    boxSize={{ base: '2rem', md: '3rem' }}
                    mr="1rem"
                  />
                  <Flex flexDirection="column">
                    <Text fontSize={{ base: 'lg', md: 'xl' }}>
                      {review.reviewCompany.name}
                    </Text>
                    <Text fontSize={{ base: 'sm', md: 'lg' }} color="gray.500">
                      {review.reviewCompany.description}
                    </Text>
                    <Text fontSize={{ base: 'sm', md: 'lg' }} color="gray.500">
                      {review.reviewCompany.review}개의 후기
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};
