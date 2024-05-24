import { Text } from '@chakra-ui/react';

interface FormInputTitleProps {
  title: string;
}
const FormInputTitle = ({ title }: FormInputTitleProps) => {
  return (
    <Text w="13rem" fontSize="xl" fontWeight={600}>
      {title}
    </Text>
  );
};

export default FormInputTitle;
