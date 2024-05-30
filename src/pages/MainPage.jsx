import MainFeed from '@/components/Main/MainFeed';
import Header from '@/components/Header';
import PageLayout from '@/layouts/PageLayout';
import CategorySelect from '@/components/Main/CategorySelect';
import { useState } from 'react';

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleLogoClick = () => {
    setSelectedCategory('');
  };

  return (
    <PageLayout>
      <Header showIconsAndTexts={true} onLogoClick={handleLogoClick} />
      <CategorySelect onCategorySelect={handleCategorySelect} />
      <MainFeed selectedCategory={selectedCategory} />
    </PageLayout>
  );
};

export default MainPage;
