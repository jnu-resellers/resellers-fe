import https from './https';

interface GetMaterialRes {
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

export const getMaterial = async (id: number): Promise<GetMaterialRes> => {
  const response = await https.get(`/board/materials/${id}`);
  return response.data.response;
};
