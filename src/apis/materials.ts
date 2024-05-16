import https from './https';

interface GetMaterialRes {
  preSignedUrl: string;
  id: number;
  title: string;
  jobType: string; // TODO: 유니온 타입으로 제한 필요
  totalPrice: number;
}

export const getMaterials = async (): Promise<GetMaterialRes[]> => {
  const response = await https.get('/board/materials');

  return response.data.response.materials;
};

interface PostMaterialRes {
  // FIXME: impl response type
}

// TODO: fileNames 추가해야 함.
// TODO: price가 숫자인지 검증하는 로직이 컴포넌트 단에서 필요
interface PostMaterialReq {
  productName: string;
  itemType: string; // TODO: change concrete type
  price: string;
  description: string;
  defect: string;
  contact: string;
}

export const postMaterials = async (
  postMaterialReqest: PostMaterialReq
): Promise<PostMaterialRes> => {
  const response = await https.post('/board/material', postMaterialReqest);
  return response.data.response;
};
