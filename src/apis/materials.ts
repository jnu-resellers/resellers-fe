import https from './https';

interface GetMaterialRes {
  preSignedUrl: string;
  id: number;
  title: string;
  itemType: string; // TODO: 유니온 타입으로 제한 필요
  totalPrice: number;
}

interface GetProductRes {
  writer: string;
  product: {
    preSignedUrl: string[];
    id: number;
    productName: string;
    price: number;
    description: string;
    defect: string;
  };
}

export const getMaterials = async (): Promise<GetMaterialRes[]> => {
  const response = await https.get('/board/materials');

  return response.data.response.materials;
};

export const getMaterial = async (id: number): Promise<GetProductRes> => {
  const response = await https.get(`/board/materials/${id}`);
  return response.data.response;
};
