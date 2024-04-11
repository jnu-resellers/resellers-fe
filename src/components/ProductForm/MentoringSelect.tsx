import { RadioGroup, Radio, Box } from '@chakra-ui/react';
import SectionTitle from './SectionTitle';

interface MentoringSelectProps {
  value: 'yes' | 'no';
  onChange: (nextValue: 'yes' | 'no') => void;
}
const MentoringSelect = ({ value, onChange }: MentoringSelectProps) => {
  return (
    <Box mb={12}>
      <SectionTitle title="멘토링 여부" />
      <RadioGroup my={3} onChange={onChange} value={value}>
        <Radio px={6} colorScheme="orange" value="yes">
          예
        </Radio>
        <Radio px={6} colorScheme="orange" value="no">
          아니요
        </Radio>
      </RadioGroup>
    </Box>
  );
};

export default MentoringSelect;
