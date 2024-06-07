import { Flex, Img } from '@chakra-ui/react';
import { generateImgCloudFrontUrl } from '../../utils/url';
import { PrevArrow, NextArrow } from '../Auction/AuctionPurchaseImages';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export interface PurchaseImagesProps {
  fileNames: string[];
}

export const PurchaseImages = ({ fileNames }: PurchaseImagesProps) => {
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Flex
      flexDirection="row"
      w="100%"
      m={{ base: 4, lg: '2.25rem' }}
      maxW={{ base: '20rem', lg: '32rem' }}
      justify="center"
    >
      <Slider {...settings}>
        {fileNames.map((fileName: string) => (
          <Img
            key={fileName}
            src={generateImgCloudFrontUrl(fileName)}
            alt={fileName}
            w={{ base: '15rem', sm: '20rem', lg: '30rem' }}
            h={{ base: '15rem', sm: '20rem', lg: '30rem' }}
            maxW="30rem"
            maxH="30rem"
          />
        ))}
      </Slider>
    </Flex>
  );
};
