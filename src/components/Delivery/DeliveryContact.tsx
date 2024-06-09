import { Flex, Box, Text, Img, Button } from '@chakra-ui/react';
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

      <Button
        fontSize={{ base: 'lg', md: '2xl' }}
        fontWeight="600"
        color="white"
        background="orange.500"
        p={{ base: 4, md: 8 }}
        m={{ base: '1rem', md: '2rem' }}
      >
        문의하기
      </Button>
    </Flex>
  );
};
