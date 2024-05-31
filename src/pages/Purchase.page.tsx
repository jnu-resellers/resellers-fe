import { Purchase } from '../components/Purchase/Purchase';
import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/common/Header';

export const PurchasePage = () => {
  return (
    <PageLayout>
      <Header showIconsAndTexts={true} />
      <Purchase />
    </PageLayout>
  );
};
