import { SimpleGrid, Text, VStack, HStack, Box } from '@chakra-ui/react';
import styled from 'styled-components';

const Section = ({ title, items, columns, textPosition }) => {
  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <Text
        as="h3"
        fontSize={{ base: '18', md: '20' }}
        fontWeight="bold"
        my={6}
      >
        {title}
      </Text>
      <SimpleGrid columns={columns} spacing={6}>
        {items.map((item) => (
          <Box
            key={item.id}
            onClick={() => handleClick(item.url)}
            cursor="pointer"
            _hover={{ opacity: 0.8 }}
          >
            {textPosition === 'right' ? (
              <HStack spacing={4} align="flex-start">
                <HImageField src={item.image} />
                <Text width="45%" fontSize={16} fontWeight="medium">
                  {item.title}
                </Text>
              </HStack>
            ) : (
              <VStack spacing={4} align="flex-start">
                <VImageField src={item.image} />
                <Text width="100%" fontSize={16} fontWeight="medium">
                  {item.title}
                </Text>
              </VStack>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Section;

const HImageField = styled.img`
  height: auto;
  width: 55%;
  background-color: #cacaca;
  object-fit: cover;
  border-radius: 5px;
`;

const VImageField = styled.img`
  height: auto;
  width: 100%;
  background-color: #cacaca;
  object-fit: cover;
  border-radius: 5px;
`;
