import { VStack } from '@chakra-ui/react';
import MentoringQuestionForm from './MentoringQuestionForm';

interface MentoringQuestionListProps {
  isShow: boolean;
}

const QUESTIONS = [
  {
    order: 1,
    question: '첫 번째 질문입니다.',
    placeholder: '질문에 대한 답변을 작성해주세요.',
  },
  {
    order: 2,
    question: '두 번째 질문입니다.',
    placeholder: '질문에 대한 답변을 작성해주세요.',
  },
  {
    order: 3,
    question: '세 번째 질문입니다.',
    placeholder: '질문에 대한 답변을 작성해주세요.',
  },
  {
    order: 4,
    question: '네 번째 질문입니다.',
    placeholder: '질문에 대한 답변을 작성해주세요.',
  },
  {
    order: 5,
    question: '다섯 번째 질문입니다.',
    placeholder: '질문에 대한 답변을 작성해주세요.',
  },
] as const;

const MentoringQuestionList = ({ isShow }: MentoringQuestionListProps) => {
  if (!isShow) return <></>;

  return (
    <VStack w="100%">
      {QUESTIONS.map(({ order, question, placeholder }) => (
        <MentoringQuestionForm
          key={order}
          question={question}
          placeholder={placeholder}
        />
      ))}
    </VStack>
  );
};

export default MentoringQuestionList;
