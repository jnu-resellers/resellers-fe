import MainFeed from '@/components/Main/MainFeed';
import Header from '@/components/Header';
import PageLayout from '@/layouts/PageLayout';
import CategorySelect from '@/components/Main/CategorySelect';

const MainPage = () => {
  return (
    <PageLayout>
      <Header />
      <CategorySelect />
      <MainFeed />
    </PageLayout>
  );
};

export default MainPage;
