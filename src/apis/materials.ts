import https from './https';

interface GetMaterialRes {
  fileName: string;
  id: number;
  productName: string;
  itemType: string; // TODO: 유니온 타입으로 제한 필요
  totalPrice: number;
  isSold: string;
}

interface GetProductRes {
  writer: string;
  product: {
    fileNames: string[];
    id: number;
    productName: string;
    price: number;
    description: string;
    defect: string;
    isSold?: boolean;
  };
  itemType: string;
  contact: string;
}

export const getMaterials = async (
  sortType?: string
): Promise<GetMaterialRes[]> => {
  const url = sortType
    ? '/board/materials?sortType=' + sortType
    : '/board/materials';

  const response = await https.get(url);

  return response.data.response.materials;
};

interface GetTradeInformationRes {
  buyProducts: {
    productName: string;
    description: string;
    defect: string;
  };
  sellerInfo: {
    contact: string;
  };

  totalPrice: number;
}

export const getTradeInformation = async (
  id: number
): Promise<GetTradeInformationRes> => {
  const response = await https.get(`/trade/${id}`);

  return response.data.response;
};

export const getMaterial = async (id: number): Promise<GetProductRes> => {
  const response = await https.get(`/board/materials/${id}`);

  return response.data.response;
};

interface PostMaterialRes {
  // FIXME: impl response type
}

// TODO: fileNames 추가해야 함.
// TODO: price가 숫자인지 검증하는 로직이 컴포넌트 단에서 필요
export interface PostMaterialReq {
  productName: string;
  itemType: string; // TODO: change concrete type
  fileNames: string[];
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

interface GetPriceCheckRes {
  date: string;
  lowest: number;
  average: number;
}

export const getTradePrice = async (
  itemType: string
): Promise<GetPriceCheckRes[]> => {
  const queryParams = new URLSearchParams();
  queryParams.set('itemType', itemType);
  const response = await https.get(`/trade/price?${queryParams}`);

  return response.data.response;
};

export interface PostOrderReq {
  productId: number;
  materialId: number;
  quantity: number;
}
interface PostOrderRes {
  tradeId: number;
}
export const postOrder = async (
  postOrderReqest: PostOrderReq
): Promise<PostOrderRes> => {
  const response = await https.post('/trade', postOrderReqest);
  return response.data.response;
};

export const postTradeComplete = async (id: number) => {
  const response = await https.post(`/trade/complete/${id}`);
  return response.data.response;
};
