import { Flex, Select } from '@chakra-ui/react';
import { ChangeEvent, memo } from 'react';
import FormInputTitle from './FormInputTitle';

interface FormSelectProps {
  title: string;
  value: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const FormSelect = memo(
  ({ title, value, placeholder, options, onChange }: FormSelectProps) => {
    return (
      <Flex mb={10}>
        <FormInputTitle title={title} />
        <Select
          placeholder={placeholder}
          size="md"
          w={{ base: '20rem', sm: '20rem', md: '20rem', lg: '40rem' }}
          value={value}
          onChange={onChange}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </Flex>
    );
  }
);

export default FormSelect;
