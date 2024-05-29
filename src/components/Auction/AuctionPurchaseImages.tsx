import { Flex, Img } from '@chakra-ui/react';
import { generateImgCloudFrontUrl } from '../../utils/url';
import { SimpleSlider } from './ImageSlider';

export interface PurchaseImagesProps {
  imageNames: string[];
}

export const AuctionPurchaseImages = ({ imageNames }: PurchaseImagesProps) => {
  return (
    <Flex
      flexDirection="row"
      w="100%"
      m="2.25rem 2.25rem 0rem 8rem "
      maxW="20rem"
      justify="center"
    >
      <Flex marginBottom="16rem">
        <SimpleSlider imageNames={imageNames} />
        {imageNames.map((imageName) => (
          <Img
            key={imageName}
            src={generateImgCloudFrontUrl(imageName)}
            alt={imageName}
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
