interface Delivery {
  id: number;
  name: string;
  description: string;
  image: string;
  review: number;
  url: string;
}

interface DeliveryReview {
  id: number;
  name: string;
  reviewCount: number;
  content: string;
  reviewCompany: Delivery;
}

export const DELIVERY_LIST: Delivery[] = [
  {
    id: 1,
    name: '오콜 전국화물',
    description: '전국화물 운송, 중앙일보 브랜드 대상!',
    image: 'https://1577-0005.com/assets/images/element/07.png',
    review: 124,
    url: 'https://1577-0005.com/',
  },
  {
    id: 2,
    name: 'sendy',
    description: '센디로 편리한 운송을 경험해보세요.',
    image:
      'https://sendy.ai/_next/image?url=%2Fimage%2Fwomen-and-truck-pc%402x.webp&w=2048&q=75',
    review: 98,
    url: 'https://sendy.ai/',
  },
  {
    id: 3,
    name: '카고 퀵',
    description: ' 복잡하기만 했던 화물접수는 이제 그만',
    image: 'https://www.1600-7324.com/assets/img/main_merit_img2.png',
    review: 76,
    url: 'https://www.1600-7324.com/',
  },
  {
    id: 4,
    name: '전국 용달',
    description: '장거리 단거리 상관없이 저렴하고 빠르게!',
    image: 'https://www.전국용달.kr/images/logo.png',
    review: 112,
    url: 'https://www.전국용달.kr/',
  },
  {
    id: 5,
    name: '포스트비',
    description: '전국 모든 특급 배송!',
    image: 'http://www.postb.co.kr/image/common/top_logo2.jpg',
    review: 88,
    url: 'http://www.postb.co.kr/',
  },
  {
    id: 6,
    name: '두발 히어로',
    description: '배송 고민은 두발 히어로에게!',
    image: 'https://doobalhero.kr/assets/images/main/logo.png',
    review: 67,
    url: 'https://doobalhero.kr/',
  },
  {
    id: 7,
    name: '통인 익스프레스',
    description: '고품격 용달, 이사! 통인 익스프레스!',
    image: 'https://tonginexp.com/default/img/theme/assets/img/about_01.jpg',
    review: 102,
    url: 'https://tonginexp.com/',
  },
  {
    id: 8,
    name: '용참잘',
    description: '용달 이사 참 잘하는 집!',
    image: 'https://www.용참.com/images/main/cont3.png',
    review: 83,
    url: 'https://www.용참.com/',
  },
];

export const DELIVERY_REVIEW: DeliveryReview[] = [
  {
    id: 1,
    name: 'yunseong',
    reviewCount: 14,
    content: '포스트비는 정말 빠르고 안전한 배송을 해주네요!',
    reviewCompany: DELIVERY_LIST[4],
  },
  {
    id: 2,
    name: '미소 닭갈비',
    reviewCount: 12,
    content: '사장님이 너무 친절하시고 언제든 편한 상담 해주십니다.',
    reviewCompany: DELIVERY_LIST[0],
  },
  {
    id: 3,
    name: '매산곰탕',
    reviewCount: 10,
    content: '빠르게 배송도와주셔서 오픈에 지장이 없었어요.',
    reviewCompany: DELIVERY_LIST[1],
  },
  {
    id: 4,
    name: '민준 반찬',
    reviewCount: 8,
    content: '카고퀵 자주 이용하겠습니다..! 물품도 문제없네요!',
    reviewCompany: DELIVERY_LIST[2],
  },
];
