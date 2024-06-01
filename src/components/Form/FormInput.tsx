import { Flex, Input } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import FormInputTitle from './FormInputTitle';

interface FormInputProps {
  title: string;
  value: string;
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  smallSize?: boolean;
}

const FormInput = ({
  title,
  value,
  placeholder,
  onChange,
  type,
  smallSize = false,
}: FormInputProps) => {
  return (
    <Flex align="center" mb={10}>
      <FormInputTitle title={title} />
      <Input
        type={!type ? 'text' : type}
        placeholder={placeholder}
        size="md"
        w={
          smallSize
            ? { base: '15rem', sm: '15rem', md: '15rem', lg: '21.5rem' }
            : { base: '20rem', sm: '20rem', md: '20rem', lg: '40rem' }
        }
        value={value}
        onChange={onChange}
      />
    </Flex>
  );
};

export default FormInput;
