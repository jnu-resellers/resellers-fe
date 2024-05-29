import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Flex, Img } from '@chakra-ui/react';
import { generateImgCloudFrontUrl } from '../../utils/url';

export interface PurchaseImagesProps {
  imageNames: string[];
}

export const PrevArrow = (props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  const { className, style, onClick } = props;
  return (
    <div>
      <img
        className={className}
        src="../../../src/assets/prevArrow.svg"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    </div>
  );
};

export const NextArrow = (props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) => {
  const { className, style, onClick } = props;
  return (
    <div>
      <img
        className={className}
        src="../../../src/assets/nextArrow.svg"
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    </div>
  );
};

export const AuctionPurchaseImages = ({ imageNames }: PurchaseImagesProps) => {
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
      m="2.25rem"
      maxW="30rem"
      justify="center"
    >
      <Slider {...settings}>
        {imageNames.map((imageName: string) => (
          <Img
            key={imageName}
            src={generateImgCloudFrontUrl(imageName)}
            alt={imageName}
            w="100%"
            h="100%"
            maxW="30rem"
            maxH="30rem"
          />
        ))}
      </Slider>
    </Flex>
  );
};
