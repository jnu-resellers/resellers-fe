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

interface GetTradeInformationRes {
  productName: string;
  itemType: string;
  price: number;
  description: string;
  defect: string;
  contact: string;
}

export const getTradeInformation =
  async (): Promise<GetTradeInformationRes> => {
    const response = await https.get('/board/material');

    return response.data.response;
  };

interface GetSellerInformationRes {
  contact: string;
}

export const getSellerInformation =
  async (): Promise<GetSellerInformationRes> => {
    const response = await https.get('/seller');

    return response.data.response;
  };
