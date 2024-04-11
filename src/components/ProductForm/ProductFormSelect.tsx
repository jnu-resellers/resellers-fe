import { Flex, Select } from '@chakra-ui/react';
import InputTitle from './InputTitle';
import { ChangeEvent, memo } from 'react';

interface ProductFormSelectProps {
  title: string;
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const ProductFormSelect = memo(
  ({ title, value, placeholder, onChange }: ProductFormSelectProps) => {
    return (
      <Flex mb={10}>
        <InputTitle title={title} />
        <Select
          placeholder={placeholder}
          size="md"
          w={{ base: '20rem', sm: '20rem', md: '20rem', lg: '40rem' }}
          value={value}
          onChange={onChange}
        >
          {/* TODO: 업종 상수화 */}
          <option value="option1">음식점</option>
          <option value="option2">생활편의</option>
          <option value="option3">학원</option>
          <option value="option4">스포츠/레저/체험</option>
        </Select>
      </Flex>
    );
  },
);

export default ProductFormSelect;
