import { Box, Heading, Textarea } from '@chakra-ui/react';

interface MentoringQuestionFormProps {
  question: string;
  placeholder: string;
}
const MentoringQuestionForm = ({
  question,
  placeholder,
}: MentoringQuestionFormProps) => {
  return (
    <Box w="100%" my={10}>
      <Heading as="h3" size="md" mb={5}>
        {question}
      </Heading>
      <Textarea placeholder={placeholder} h={32} />
    </Box>
  );
};

export default MentoringQuestionForm;
