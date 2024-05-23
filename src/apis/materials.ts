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

export const getMaterial = async (id: number): Promise<GetProductRes> => {
  const response = await https.get(`/board/materials/${id}`);

  return response.data.response;
};

interface PostMaterialRes {
  // FIXME: impl response type
}

interface PostMaterialReq {
  title: string;
  itemType: string; // TODO: change concrete type
  products: Array<{
    fileNames: string[];
    name: string;
    price: number;
    description: string;
  }>;
  answers: {
    isMentoring: boolean;
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
  };
}

export const postMaterials = async (
  postMaterialReqest: PostMaterialReq
): Promise<PostMaterialRes> => {
  const response = await https.post('/board/material', postMaterialReqest);
  return response.data.response;
};

interface GetPriceCheckRes {
  date: string;
  lowest: number;
  average: number;
}

export const getTradePrice = async (): Promise<GetPriceCheckRes[]> => {
  const response = await https.get('/trade/price');

  return response.data.response;
};
