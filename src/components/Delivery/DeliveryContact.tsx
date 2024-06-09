import { Flex, Box, Text, Img } from '@chakra-ui/react';
import truck from '../../assets/truck.png';

export const DeliveryContact = () => {
  return (
    <Flex
      mt="4rem"
      flexDirection={{ base: 'column', md: 'row' }}
      gap={{ base: 4, md: 6 }}
      background="orange.100"
      p={4}
      borderRadius={8}
      alignItems="center"
      justifyContent="center"
    >
      <Img
        src={truck}
        alt="truck"
        boxSize={{ base: '8rem', md: '10rem' }}
        m={{ base: '1rem', md: '2rem' }}
      />
      <Box flexDirection="column" textAlign={{ base: 'center', md: 'left' }}>
        <Text
          fontSize={{
            base: 'xl',
            md: '3xl',
          }}
          fontWeight="600"
        >
          업체를 운영하고 계신가요?
        </Text>
        <Text
          fontSize={{
            base: 'lg',
            md: '2xl',
          }}
        >
          리셀러스의 배송 파트너로 등록해보세요!
        </Text>
      </Box>
      <Box
        mt={{ base: '2rem', md: '0' }}
        p={{ base: '1rem', md: '2rem' }}
        background="orange.300"
        borderRadius="md"
        textAlign="center"
        ml={{ base: '0', md: '2rem' }}
        mr={{ base: '0', md: '2rem' }}
      >
        <Text
          fontSize={{
            base: 'lg',
            md: '2xl',
          }}
          fontWeight="600"
          color="white"
        >
          ds1234@gmail.com
        </Text>
      </Box>
    </Flex>
  );
};
