import { Box, Heading, Textarea } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

interface MentoringQuestionFormProps {
  question: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
const MentoringQuestionForm = ({
  question,
  placeholder,
  onChange,
  value,
}: MentoringQuestionFormProps) => {
  return (
    <Box w="100%" my={10}>
      <Heading as="h3" size="md" mb={5}>
        {question}
      </Heading>
      <Textarea
        placeholder={placeholder}
        h={32}
        onChange={onChange}
        value={value}
      />
    </Box>
  );
};

export default MentoringQuestionForm;
