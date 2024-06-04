import https from './https';

export interface PostLoginReq {
  email: string;
  password: string;
}

export interface PostLoginRes {
  success: boolean;
  response: number;
  error: {
    code: string;
    reason: string;
    status: string;
  };
}
export const postLogin = async (request: PostLoginReq) => {
  const response = await https.post('/member/login', request);
  return response.data as PostLoginRes;
};

interface PostSignUpReq {
  name: string;
  email: string;
  password: string;
  bankName: string;
  accountNumber: string;
  contact: string;
}

export const postSignUp = async (request: PostSignUpReq) => {
  const response = await https.post('/member', request);
  return response.data;
};

interface GetDuplicateIdRequest {
  email: string;
}

interface GetDuplicateIdResponse {
  success: boolean;
  response: string;
  error: null | string;
}
export const getDuplicateId = async ({ email }: GetDuplicateIdRequest) => {
  const response = await https.get(`/member/duplication?email=${email}`);
  return response.data as GetDuplicateIdResponse;
};
