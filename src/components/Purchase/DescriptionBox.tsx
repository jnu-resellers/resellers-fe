import { Box, Text } from '@chakra-ui/react';

interface DescriptionBoxProps {
  description: string;
}

export const DescriptionBox = ({ description }: DescriptionBoxProps) => {
  return (
    <Box bgColor="#F5F5F5" mb="2rem" borderRadius="0.5rem">
      <Text
        mb={{ base: 2, lg: 4 }}
        p={{ base: 2, lg: 4 }}
        fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
      >
        {description}
      </Text>
    </Box>
  );
};
