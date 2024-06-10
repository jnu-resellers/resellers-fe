import { GetResponseBody } from './common';
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
  memberId: number;
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
    createdAt: string;
  }>;
}
export const getAuctionBidList = async ({
  auctionId,
}: GetAuctionBidListRequest) => {
  const response = await https.get(`/auction/${auctionId}/bid`);
  return response.data.response as GetAuctionBidListResponse;
};

interface GetRegisteredAuctionListRequest {
  memberId: number;
}

interface GetRegisteredAuctionListResponse {
  fileName: string;
  productName: string;
  itemType: string;
  nowPrice: number;
  auctionStatus: '판매중' | '유찰' | '낙찰';
  auctionId: number;
}

export const getRegisteredAuctionList = async ({
  memberId,
}: GetRegisteredAuctionListRequest) => {
  const response = await https.get(`/auction/member/${memberId}`);
  return response.data as GetResponseBody<GetRegisteredAuctionListResponse[]>;
};

interface GetMyAuctionListRequest {
  memberId: number;
}

interface GetMyAuctionListResponse {
  fileName: string;
  productName: string;
  deadLine: string; // "2024-06-10T13:00:28"
  itemType: string;
  nowPrice: number;
  bidPrice: number;
  auctionStatus: '입찰' | '낙찰' | '패찰';
  auctionId: number;
}

export const getMyAuctionList = async ({
  memberId,
}: GetMyAuctionListRequest) => {
  const response = await https.get(`/auction/member/${memberId}/bid`);
  return response.data as GetResponseBody<GetMyAuctionListResponse[]>;
};
