import { Flex, Textarea } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import InputTitle from './InputTitle';

interface ProductFormTextAreaProps {
  title: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ProductFormTextArea = ({
  title,
  placeholder,
  value,
  onChange,
}: ProductFormTextAreaProps) => {
  return (
    <Flex align="center" mb={10}>
      <InputTitle title={title} />
      <Textarea
        w={{ base: '20rem', sm: '20rem', md: '20rem', lg: '40rem' }}
        placeholder={placeholder}
        h={32}
        value={value}
        onChange={onChange}
      />
    </Flex>
  );
};

export default ProductFormTextArea;
