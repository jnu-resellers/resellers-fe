import { Flex, Input } from '@chakra-ui/react';
import InputTitle from './InputTitle';
import { ChangeEvent } from 'react';

interface ProductFormInputProps {
  title: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ProductFormInput = ({
  title,
  value,
  placeholder,
  onChange,
}: ProductFormInputProps) => {
  return (
    <Flex align="center" mb={10}>
      <InputTitle title={title} />
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

export default ProductFormInput;
