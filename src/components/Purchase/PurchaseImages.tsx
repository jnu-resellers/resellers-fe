import { Flex, Box, Img } from '@chakra-ui/react';

export interface PurchaseImagesProps {
  preSignedUrl: string[];
}

export const PurchaseImages = (preSignedUrl: PurchaseImagesProps) => {
  return (
    <Flex
      flexDirection="row"
      w="100%"
      m="2.25rem 2.25rem 0rem 8rem "
      maxW="20rem"
      justify="center"
    >
      <Box marginBottom="16rem">
        {preSignedUrl.preSignedUrl.map((url, index) => (
          <Img
            key={index}
            src={url}
            alt="product"
            w="100%"
            h="100%"
            maxW="20rem"
            maxH="20rem"
            borderRadius="1rem"
          />
        ))}
      </Box>
    </Flex>
  );
};
