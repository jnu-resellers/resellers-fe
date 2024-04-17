import { PurchaseProps } from './Purchase';

export const PRODUCTS_LIST: PurchaseProps = {
  title: '기자재 구매',
  writer: '김기자',
  products: [
    {
      presignedUrl: [
        'https://www.lge.co.kr/kr/images/refrigerators/md10039827/gallery/medium02.jpg',
      ],
      id: 1,
      name: '냉장고',
      price: 100000,
      description: '냉장고입니다.',
    },
    {
      presignedUrl: [
        'https://img.danawa.com/prod_img/500000/416/518/img/13518416_1.jpg?_v=20220517155823',
      ],
      id: 2,
      name: '전자레인지',
      price: 50000,
      description: '전자레인지입니다.',
    },
  ],
  error: null,
};
