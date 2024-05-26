import { Flex, Img } from '@chakra-ui/react';

export interface PurchaseImagesProps {
  preSignedUrl: string[];
}

export const AuctionPurchaseImages = (preSignedUrl: PurchaseImagesProps) => {
  return (
    <Flex
      flexDirection="row"
      w="100%"
      m="2.25rem 2.25rem 0rem 8rem "
      maxW="20rem"
      justify="center"
    >
      <Flex marginBottom="16rem">
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
            flexDirection="row"
          />
        ))}
      </Flex>
    </Flex>
  );
};
