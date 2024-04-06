import { RadioGroup, Radio, Box } from '@chakra-ui/react';
import SectionTitle from './SectionTitle';

const MentoringSelect = () => {
  return (
    <Box mb={12}>
      <SectionTitle title="멘토링 여부" />
      <RadioGroup my={3}>
        <Radio px={6} colorScheme="orange">
          예
        </Radio>
        <Radio px={6} colorScheme="orange">
          아니요
        </Radio>
      </RadioGroup>
    </Box>
  );
};

export default MentoringSelect;
