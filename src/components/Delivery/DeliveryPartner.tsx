import {
  Img,
  Flex,
  Box,
  Wrap,
  WrapItem,
  Text,
  Divider,
} from '@chakra-ui/react';
import deliveryPanelPc from '../../assets/deliveryPanelPc.svg';
import deliveryPanelMob from '../../assets/deliveryPanelMob.svg';
import { DELIVERY_LIST } from 'src/constants/delivery';
import { DeliveryReview } from './DeliveryReview';
import { DeliveryContact } from './DeliveryContact';

export const DeliveryPartner = () => {
  const onClickDelivery = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <Flex justify="center" flexDirection="column" alignItems="center">
      <Img
        src={deliveryPanelPc}
        alt="delivery panel Pc"
        display={{ base: 'none', md: 'block' }}
      />
      <Img
        src={deliveryPanelMob}
        alt="delivery panel Mob"
        display={{ base: 'block', md: 'none' }}
      />
      <Box
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight="600"
        mt={{ base: '2rem', md: '4rem' }}
      >
        좀 더 쉽고, 빠른 배송
      </Box>
      <Wrap
        mt={{ base: '2rem', md: '4rem' }}
        justify="center"
        spacing="4"
        w={{ base: '90%', md: '80rem' }}
      >
        {DELIVERY_LIST.map((delivery, index) => (
          <WrapItem key={index} width={{ base: '100%', md: '40%' }}>
            <Flex
              alignItems="center"
              cursor="pointer"
              _hover={{ transform: 'scale(1.05)' }}
              width="100%"
              flexDirection={{ base: 'column', md: 'row' }}
              onClick={() => onClickDelivery(delivery.url)}
            >
              <Img
                src={delivery.image}
                alt={delivery.name}
                borderRadius="full"
                boxSize={{ base: '5rem', md: '8rem' }}
                mb={{ base: '1rem', md: '0' }}
              />
              <Flex
                flexDirection="column"
                ml={{ base: '0', md: '4rem' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="600">
                  {delivery.name}
                </Text>
                <Flex flexDirection="column">
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.500">
                    {delivery.description}
                  </Text>
                  <Text fontSize={{ base: 'sm', md: 'sm' }} color="gray.500">
                    리뷰 {delivery.review}개 +
                  </Text>
                  <Divider mt="1rem" />
                </Flex>
              </Flex>
            </Flex>
          </WrapItem>
        ))}
      </Wrap>
      <DeliveryReview />
      <DeliveryContact />
    </Flex>
  );
};
