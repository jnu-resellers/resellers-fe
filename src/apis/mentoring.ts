import https from './https';

interface GetQuestionRes {
  question: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
  };
}

export const getMentoringQuestion = async (): Promise<GetQuestionRes> => {
  const response = await https.get('/question');

  return response.data.response;
};
