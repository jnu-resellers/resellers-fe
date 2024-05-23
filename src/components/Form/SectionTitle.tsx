import { Box, Divider, Heading } from '@chakra-ui/react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <Box>
      <Heading as="h3" size="lg" mb={5}>
        {title}
      </Heading>
      <Divider />
    </Box>
  );
};

export default SectionTitle;
