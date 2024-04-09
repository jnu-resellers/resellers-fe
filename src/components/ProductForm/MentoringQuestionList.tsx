import { VStack } from '@chakra-ui/react';
import MentoringQuestionForm from './MentoringQuestionForm';
import { QuestionState } from '../../hooks/ProductForm/useMentoring';
import { ChangeEvent } from 'react';

interface MentoringQuestionListProps {
  isShow: boolean;
  questions: QuestionState;
  onChangeQuestionByOrder: (
    type: keyof QuestionState,
  ) => (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const QUESTIONS = [
  {
    order: 'first',
    question: '첫 번째 질문입니다.',
    placeholder: '질문에 대한 답변을 작성해주세요.',
  },
  {
    order: 'second',
    question: '두 번째 질문입니다.',
    placeholder: '질문에 대한 답변을 작성해주세요.',
  },
  {
    order: 'third',
    question: '세 번째 질문입니다.',
    placeholder: '질문에 대한 답변을 작성해주세요.',
  },
  {
    order: 'fourth',
    question: '네 번째 질문입니다.',
    placeholder: '질문에 대한 답변을 작성해주세요.',
  },
  {
    order: 'fifth',
    question: '다섯 번째 질문입니다.',
    placeholder: '질문에 대한 답변을 작성해주세요.',
  },
] as const;

const MentoringQuestionList = ({
  isShow,
  questions,
  onChangeQuestionByOrder,
}: MentoringQuestionListProps) => {
  if (!isShow) return <></>;

  return (
    <VStack w="100%">
      {QUESTIONS.map(({ order, question, placeholder }) => (
        <MentoringQuestionForm
          key={order}
          question={question}
          placeholder={placeholder}
          value={questions[order]}
          onChange={onChangeQuestionByOrder(order)}
        />
      ))}
    </VStack>
  );
};

export default MentoringQuestionList;
