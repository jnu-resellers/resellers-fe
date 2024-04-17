import Header from '@/components/Header';
import { PurchaseCheck } from '@/components/Purchase/PurchaseCheck';
import PageLayout from '@/layouts/PageLayout';

export const PurchaseCheckPage = () => {
  return (
    <PageLayout>
      <Header />
      <PurchaseCheck />
    </PageLayout>
  );
};
