import { DeliveryPartner } from '@/components/Delivery/DeliveryPartner';
import PageLayout from '@/layouts/PageLayout';
import Header from '@/components/common/Header';

export const DeliveryPartnerPage = () => {
  return (
    <PageLayout>
      <Header showIconsAndTexts={true} />
      <DeliveryPartner />
    </PageLayout>
  );
};
