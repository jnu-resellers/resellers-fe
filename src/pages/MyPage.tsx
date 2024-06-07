import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import PageTitle from '../components/Form/PageTitle';
import Header from '../components/common/Header';
import PageLayout from '../layouts/PageLayout';
import CustomerServiceCard from '../components/MyPage/CustomerServiceCard';
import { LS_MEMBER_ID } from '../constants/lsKey';
import { Navigate } from 'react-router-dom';
import ProfileCard from '../components/MyPage/ProfileCard';
import MyMaterialList from '../components/MyPage/MyMaterialList';
import MyPurchaseList from '../components/MyPage/MyPurchaseList';

const MyPage = () => {
  const rawMemberId = localStorage.getItem(LS_MEMBER_ID);

  if (!rawMemberId) {
    alert('로그인이 필요한 서비스 입니다.');
    return <Navigate to="/" />;
  }

  return (
    <PageLayout>
      <Header showIconsAndTexts={true} />
      <PageTitle title="마이 페이지" />
      <ProfileCard userId={+rawMemberId} />
      <Tabs mt={8}>
        <TabList>
          <Tab>구매 내역</Tab>
          <Tab>판매 내역</Tab>
          <Tab>회원정보 수정</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MyPurchaseList userId={+rawMemberId} />
          </TabPanel>
          <TabPanel>
            <MyMaterialList userId={+rawMemberId} />
          </TabPanel>
          <TabPanel>
            <CustomerServiceCard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </PageLayout>
  );
};

export default MyPage;
