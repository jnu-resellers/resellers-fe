import { Text } from '@chakra-ui/react';

interface InputTitleProps {
  title: string;
}
const InputTitle = ({ title }: InputTitleProps) => {
  return (
    <Text w="13rem" fontSize="xl" fontWeight={600}>
      {title}
    </Text>
  );
};

export default InputTitle;
