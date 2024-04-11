import MainFeed from '@/components/MainFeed';
import Header from '@/components/Header';
import PageLayout from '@/layouts/PageLayout';

const MainPage = () => {
  return (
    <PageLayout>
      <Header />
      <MainFeed />
    </PageLayout>
  );
};

export default MainPage;
