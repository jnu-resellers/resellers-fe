import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Flex, Img } from '@chakra-ui/react';
import { generateImgCloudFrontUrl } from '../../utils/url';

interface ImageSliderProps {
  imageNames: string[];
}

export const SimpleSlider = (imageNames: ImageSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Flex className="slider-container" marginBottom="16rem" flexDirection="row">
      <Slider {...settings}>
        {imageNames.imageNames.map((imageName: string) => (
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
      </Slider>
    </Flex>
  );
};
