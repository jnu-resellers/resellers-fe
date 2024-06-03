import { SimpleGrid, Text, VStack, HStack } from '@chakra-ui/react';
import styled from 'styled-components';

const Section = ({ title, items, columns, textPosition }) => (
  <>
    <Text as="h3" fontSize={20} fontWeight="bold" my={6}>
      {title}
    </Text>
    <SimpleGrid columns={columns} spacing={6}>
      {items.map((item) =>
        textPosition === 'right' ? (
          <HStack key={item.id} spacing={4} align="flex-start">
            <HImageField />
            <Text width="45%" fontSize={14} fontWeight="medium">
              {item.title}
            </Text>
          </HStack>
        ) : (
          <VStack key={item.id} spacing={4} align="flex-start">
            <VImageField />
            <Text width="100%" fontSize={14} fontWeight="medium">
              {item.title}
            </Text>
          </VStack>
        )
      )}
    </SimpleGrid>
  </>
);

export default Section;

const HImageField = styled.img`
  height: auto;
  width: 55%;
  background-color: #cacaca;
  object-fit: cover;
  padding-bottom: 30%;
  border-radius: 5px;
`;

const VImageField = styled.img`
  height: auto;
  width: 100%;
  background-color: #cacaca;
  object-fit: cover;
  padding-bottom: 50%;
  border-radius: 5px;
`;
