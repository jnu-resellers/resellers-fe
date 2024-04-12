import { Purchase } from '../components/Purchase/Purchase';
import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/Header';

export const PurchasePage = () => {
  return (
    <PageLayout>
      <Header />
      <Purchase />
    </PageLayout>
  );
};
