import { Box, Heading } from '@chakra-ui/react';

const AuctionTitle = ({ title }) => {
  return (
    <div>
      <>
        <Box w="100%" mb={9}>
          <Heading as="h2" size="xl">
            {title}
          </Heading>
        </Box>
      </>
    </div>
  );
};

export default AuctionTitle;
