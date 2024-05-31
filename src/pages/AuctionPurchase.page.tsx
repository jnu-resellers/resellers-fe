import { AuctionPurchase } from '../components/Auction/AuctionPurchase';
import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/common/Header';

export const AuctionPurchasePage = () => {
  return (
    <PageLayout>
      <Header showIconsAndTexts={true} />
      <AuctionPurchase />
    </PageLayout>
  );
};
