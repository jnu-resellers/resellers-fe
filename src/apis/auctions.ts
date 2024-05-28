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

interface postAuctionBidReq {
  auctionId: number;
  price: number;
}

interface postAuctionBidRes {
  response: number;
}

export const postAuctionBid = async (
  request: postAuctionBidReq
): Promise<postAuctionBidRes> => {
  const response = await https.post('/auction', request);
  return response.data;
};
