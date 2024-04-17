import { Box, Divider, Text } from '@chakra-ui/react';

interface DescriptionBoxProps {
  description: string;
}

export const DescriptionBox = ({ description }: DescriptionBoxProps) => {
  return (
    <Box bgColor="#F5F5F5" mb="2rem" borderRadius="0.5rem">
      <Text mb="2rem" p="2rem">
        {description}
      </Text>
      <Divider orientation="horizontal" />
    </Box>
  );
};
