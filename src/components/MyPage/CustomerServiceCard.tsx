import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  Text,
  theme,
} from '@chakra-ui/react';

const CustomerServiceCard = () => {
  return (
    <Card mt={4}>
      <CardHeader>
        <Heading as="h2">도움이 필요하신가요?</Heading>
      </CardHeader>
      <CardBody>
        <Text>
          현재 회원정보 수정은 정책 상 고객센터를 통해 이루어지고 있습니다.
        </Text>
        <Text>아래 고객센터로 연락주시면 빠르게 해결해드릴께요! 😎</Text>
      </CardBody>
      <CardFooter>
        <Stack>
          <Text color={theme.colors.gray[400]}>
            고객센터 전화번호: 061-530-1111
          </Text>
          <Text color={theme.colors.gray[400]}>카카오톡 아이디: resellers</Text>
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default CustomerServiceCard;
