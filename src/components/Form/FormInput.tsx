import { Flex, Input } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import FormInputTitle from './FormInputTitle';

interface FormInputProps {
  title: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ title, value, placeholder, onChange }: FormInputProps) => {
  return (
    <Flex align="center" mb={10}>
      <FormInputTitle title={title} />
      <Input
        placeholder={placeholder}
        size="md"
        w={{ base: '20rem', sm: '20rem', md: '20rem', lg: '40rem' }}
        value={value}
        onChange={onChange}
      />
    </Flex>
  );
};

export default FormInput;
