import PageTitle from '@/components/Form/PageTitle';
import Header from '@/components/common/Header';
import PageLayout from '@/layouts/PageLayout';
import Section from '@/components/Info/Section';
import {
  KNOWHOW_CONTENT,
  SUPPORT_CONTENT,
  HOT_CONTENT,
  EDU_CONTENT,
} from '../constants/info';

const InfoPage = () => {
  return (
    <PageLayout>
      <Header showIconsAndTexts={true} />
      <PageTitle title="소상공인 정보" />
      <Section
        title="장사 노하우 🤫"
        items={KNOWHOW_CONTENT}
        columns={3}
        textPosition="right"
      />
      <Section
        title="소상공인 지원 🎁"
        items={SUPPORT_CONTENT}
        columns={2}
        textPosition="below"
      />
      <Section
        title="지금 뜨는 인기 콘텐츠 🔥"
        items={HOT_CONTENT}
        columns={3}
        textPosition="right"
      />
      <Section
        title="장사에 도움이 되는 필수 교육 📚"
        items={EDU_CONTENT}
        columns={3}
        textPosition="below"
      />
    </PageLayout>
  );
};

export default InfoPage;
