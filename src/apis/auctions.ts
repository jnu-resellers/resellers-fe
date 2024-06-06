import https from './https';
import { PostMaterialReq } from './materials';

interface PostAuctionReq extends PostMaterialReq {
  period: string;
  priceUnit: string;
}

interface PostAuctionRes {}
export const postAuctions = async (
  request: PostAuctionReq
): Promise<PostAuctionRes> => {
  const response = await https.post('/auction', request);
  return response.data;
};

interface GetAuctionListRes {
  imageName: string;
  itemType: string;
  productName: string;
  bidCount: number;
  startAt: string;
  endAt: string;
  price: number;
  auctionId: number;
}

export const getAuctionList = async (
  sortType?: string
): Promise<GetAuctionListRes> => {
  const url = sortType ? '/auction?sortType=' + sortType : '/auction';

  const response = await https.get(url);

  return response.data.response.auctions;
};

interface GetAuctionPurchaseRes {
  imageNames: string[];
  itemType: string;
  productName: string;
  bidCount: number;
  startAt: string;
  endAt: string;
  startPrice: number;
  nowPrice: number;
  writer: string;
  description: string;
  defect: string;
  priceUnit: number;
}

export const getAuctionPurchase = async (
  id: number
): Promise<GetAuctionPurchaseRes> => {
  const response = await https.get(`/auction/${id}`);

  return response.data.response;
};

export interface patchAuctionBidReq {
  auctionId: number;
  price: number;
  memberId: number;
}

export interface patchAuctionBidRes {
  response: null;
}

export const patchAuctionPrice = async (
  request: patchAuctionBidReq
): Promise<patchAuctionBidRes> => {
  const response = await https.patch('/auction', request);
  return response.data;
};

interface GetAuctionBidListRequest {
  auctionId: number;
}

interface GetAuctionBidListResponse {
  bids: Array<{
    nickname: string;
    price: number;
  }>;
}
export const getAuctionBidList = async ({
  auctionId,
}: GetAuctionBidListRequest) => {
  const response = await https.get(`/auction/${auctionId}/bid`);
  return response.data.response as GetAuctionBidListResponse;
};
