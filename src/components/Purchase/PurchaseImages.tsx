import { Flex, Img } from '@chakra-ui/react';
import { generateImgCloudFrontUrl } from '../../utils/url';
export interface PurchaseImagesProps {
  fileNames: string[];
}

export const PurchaseImages = ({ fileNames }: PurchaseImagesProps) => {
  return (
    <Flex
      flexDirection="row"
      w="100%"
      m="2.25rem 2.25rem 0rem 8rem "
      maxW="20rem"
      justify="center"
    >
      <Flex marginBottom="16rem">
        {fileNames.map((fileName) => (
          <Img
            key={fileName}
            src={generateImgCloudFrontUrl(fileName)}
            alt={fileName}
            w="100%"
            h="100%"
            maxW="20rem"
            maxH="20rem"
            objectFit="cover"
          />
        ))}
      </Flex>
    </Flex>
  );
};
