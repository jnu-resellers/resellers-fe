import { ChangeEvent, useReducer, useState } from 'react';

export type MentoringStatus = 'yes' | 'no';

interface QuestionAction {
  type: keyof QuestionState;
  payload: string;
}

export interface QuestionState {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

const questionReducer = (state: QuestionState, action: QuestionAction) => {
  return { ...state, [action.type]: action.payload };
};

const useMentoring = () => {
  const [mentoringStatus, setMentoringStatus] = useState<MentoringStatus>('no');
  const [questions, dispatch] = useReducer(questionReducer, {
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
  });

  const onChangeMentoring = (nextValue: MentoringStatus) => {
    setMentoringStatus(nextValue);
  };

  const onChangeQuestionByOrder =
    (type: keyof QuestionState) => (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch({ type, payload: e.target.value });
    };

  const isShow = mentoringStatus === 'yes';

  return {
    mentoringStatus,
    onChangeMentoring,
    isShow,
    onChangeQuestionByOrder,
    questions,
  };
};

export default useMentoring;
