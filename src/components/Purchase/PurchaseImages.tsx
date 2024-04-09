import { Flex, Box, Img } from "@chakra-ui/react";

export interface PurchaseImagesProps {
  products: {
    presignedUrl: string[];
    id: number;
    name: string;
  }[];
}

export const PurchaseImages = ({ products }: PurchaseImagesProps) => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      m="2.25rem 2.25rem 0rem 8rem "
      maxW="20rem"
      justify="center"
    >
      <Box marginBottom="1rem">
        {products.map((product) => (
          <Img
            key={product.id}
            src={product.presignedUrl[0]}
            alt={product.name}
            width="18rem"
            border="1px solid black"
          />
        ))}
      </Box>
    </Flex>
  );
};
