import { AuctionPurchase } from '../components/Auction/AuctionPurchase';
import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/Header';

export const AuctionPurchasePage = () => {
  return (
    <PageLayout>
      <Header />
      <AuctionPurchase />
    </PageLayout>
  );
};
