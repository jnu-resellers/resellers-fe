import { Flex, Text, Box, Divider } from "@chakra-ui/react";
import { PurchaseDetailsProps } from "./Purchase";
import { DescriptionBox } from "./DescriptionBox";

export const PurchaseDetails = ({
  title,
  writer,
  products,
}: PurchaseDetailsProps) => {
  return (
    <Flex flexDirection={"column"} w={"100%"} m={"2.25rem 2.25rem 0 0"}>
      <Text fontSize={"xx-large"} fontWeight={"500"} mb={"1.25rem"}>
        {title}
      </Text>
      <Text fontSize={"larger"} mb={"1.25rem"}>
        {writer}
      </Text>
      <Divider orientation={"horizontal"} mb={"1rem"} />
      {products.map((product) => (
        <Box key={product.id}>
          <Text fontSize="xx-large" mb={"1.25rem"}>
            {product.name}
          </Text>
          <Text fontSize="xxx-large">{product.price}원</Text>
          <DescriptionBox description={product.description} />
        </Box>
      ))}
      <Box>
        <Text fontSize={"x-large"} fontWeight={"600"}>
          멘토링 여부
        </Text>
      </Box>
    </Flex>
  );
};
