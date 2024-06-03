import PageTitle from '@/components/Form/PageTitle';
import Header from '@/components/common/Header';
import PageLayout from '@/layouts/PageLayout';
import Section from '@/components/Info/Section';

const InfoPage = () => {
  const items = [
    {
      id: 1,
      title: '콘텐츠 제목 영역입니다. 몇 글자 제한인지 테스트 중입니다',
    },
    { id: 2, title: '[할인쿠폰 지원+] 착한가격업소 신청 방법부터 혜택까지' },
    { id: 3, title: '콘텐츠 제목 3' },
    { id: 4, title: '콘텐츠 제목 4' },
    { id: 5, title: '콘텐츠 제목 5' },
    { id: 6, title: '콘텐츠 제목 6' },
  ];
  const itemsa = [
    {
      id: 1,
      title: '콘텐츠 제목 영역입니다. 몇 글자 제한인지 테스트 중입니다',
    },
    { id: 2, title: '[할인쿠폰 지원+] 착한가격업소 신청 방법부터 혜택까지' },
  ];
  const itemsb = [
    {
      id: 1,
      title: '콘텐츠 제목 영역입니다. 몇 글자 제한인지 테스트 중입니다',
    },
    { id: 2, title: '[할인쿠폰 지원+] 착한가격업소 신청 방법부터 혜택까지' },
    { id: 3, title: '[할인쿠폰 지원+] 착한가격업소 신청 방법부터 혜택까지' },
  ];

  return (
    <PageLayout>
      <Header showIconsAndTexts={true} />
      <PageTitle title="소상공인 정보" />
      <Section
        title="장사 노하우 🤫"
        items={items}
        columns={3}
        textPosition="right"
      />
      <Section
        title="소상공인 지원 🎁"
        items={itemsa}
        columns={2}
        textPosition="below"
      />
      <Section
        title="지금 뜨는 인기 콘텐츠 🔥"
        items={itemsb}
        columns={3}
        textPosition="right"
      />
      <Section
        title="장사에 도움이 되는 필수 교육 📚"
        items={items}
        columns={3}
        textPosition="below"
      />
    </PageLayout>
  );
};

export default InfoPage;
