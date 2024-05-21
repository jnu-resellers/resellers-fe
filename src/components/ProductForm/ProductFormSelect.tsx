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
          <option value="냉장고/냉동고">냉장고/냉동고</option>
          <option value="쇼케이스">쇼케이스</option>
          <option value="가구">가구</option>
          <option value="가스레인지">가스레인지</option>
          <option value="포장기계">포장기계</option>
          <option value="세척기">세척기</option>
          <option value="싱크대/작업대">싱크대/작업대</option>
          <option value="커피머신">커피머신</option>
          <option value="제빙기">제빙기</option>
          <option value="에어컨">에어컨</option>
          <option value="주방잡화">주방잡화</option>
        </Select>
      </Flex>
    );
  }
);

export default ProductFormSelect;
