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
