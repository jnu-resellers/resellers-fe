import { Box, Button, Flex, Text, Divider } from "@chakra-ui/react";
import { PurchaseImages } from "./PurchaseImages";
import { PurchaseDetails } from "./PurchaseDetails";

export interface PurchaseDetailsProps {
  title: string;
  writer: string;
  products: {
    presignedUrl: string[];
    id: number;
    name: string;
    price: number;
    description: string;
  }[];
  error: string | null;
}

const CATEGORY = "요식업";
const RESPONSE: PurchaseDetailsProps = {
  title: "기자재 구매",
  writer: "김기자",
  products: [
    {
      presignedUrl: [
        "https://www.lge.co.kr/kr/images/refrigerators/md10039827/gallery/medium02.jpg",
      ],
      id: 1,
      name: "냉장고",
      price: 100000,
      description: "냉장고입니다.",
    },
    {
      presignedUrl: [
        "https://img.danawa.com/prod_img/500000/416/518/img/13518416_1.jpg?_v=20220517155823",
      ],
      id: 2,
      name: "전자레인지",
      price: 50000,
      description: "전자레인지입니다.",
    },
  ],
  error: null,
};

export const Purchase = () => {
  return (
    <Box w="100%">
      <Flex justifyContent="start" alignItems="center">
        <Text fontSize="xx-large" fontWeight="600" mr="2rem">
          기자재 구매
        </Text>
        <Text fontSize="larger">업종 : {CATEGORY}</Text>
      </Flex>
      <Divider orientation="horizontal" />
      <Flex flexDirection="row">
        <PurchaseImages products={RESPONSE.products} />
        <Box w="100%" mr="8rem">
          <PurchaseDetails
            title={RESPONSE.title}
            writer={RESPONSE.writer}
            products={RESPONSE.products}
            error={RESPONSE.error}
          />
          <Button
            display="flex"
            colorScheme="orange"
            w="16rem"
            h="4rem"
            fontSize="1.25rem"
            justifyContent="center"
            float="right"
          >
            거래하러 하기
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
