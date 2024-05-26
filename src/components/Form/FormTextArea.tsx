import { Flex, Textarea } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import FormInputTitle from './FormInputTitle';

interface FormTextAreaProps {
  title: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormTextArea = ({
  title,
  placeholder,
  value,
  onChange,
}: FormTextAreaProps) => {
  return (
    <Flex align="center" mb={10}>
      <FormInputTitle title={title} />
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

export default FormTextArea;
