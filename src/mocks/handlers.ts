import { http, HttpResponse } from 'msw';

const getMentoringQuestion = http.get('/api/question', () => {
  // ...and respond to them using this JSON response.
  return HttpResponse.json({
    success: true,
    response: {
      questions: {
        '1': '질문',
        '2': '질문',
        '3': '질문',
        '4': '질문',
        '5': '질문',
      },
    },
    error: null,
  });
});

const getMaterials = http.get('/api/board/materials', () => {
  return HttpResponse.json({
    success: true,
    response: {
      materials: [
        {
          preSignedUrl:
            'https://test-bucket.s3.ap-northeast-2.amazonaws.com/1_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240405T134134Z&X-Amz-SignedHeaders=host&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240405%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=d55632edf221054bde206601d44a25f86100017c8a1aa816972fb675dd38ce41',
          id: 1,
          title: '응애글자넘어갔을시화면표시되는부분테스트를위한타이틀',
          jobType: '응애',
          totalPrice: 2000,
        },
        {
          preSignedUrl: null,
          id: 2,
          title: '응애2',
          jobType: '응애2',
          totalPrice: 1000,
        },
        {
          preSignedUrl: null,
          id: 3,
          title: '응애3',
          jobType: '응애3',
          totalPrice: 1000,
        },
        {
          preSignedUrl: null,
          id: 4,
          title: '응애3',
          jobType: '응애3',
          totalPrice: 1000,
        },
        {
          preSignedUrl: null,
          id: 5,
          title: '응애3',
          jobType: '응애3',
          totalPrice: 1000,
        },
      ],
    },
    error: null,
  });
});

const postMaterials = http.post('/api/board/matherial', () => {
  return HttpResponse.json({
    success: true,
    response: {
      products: [
        {
          name: '냉장고',
          presignedUrls: [
            'https://test-bucket.s3.ap-northeast-2.amazonaws.com/13_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=4e081486e21a911f27b7dff27ad5156fb042c3201755493ac8f0a52cd7e3db91',
            'https://test-bucket.s3.ap-northeast-2.amazonaws.com/14_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=8ecdd0ec5e349c2893611907ee6e584f1d7a59816f368f4b804fac89c1c304ea',
          ],
        },
        {
          name: '화덕',
          presignedUrls: [
            'https://test-bucket.s3.ap-northeast-2.amazonaws.com/15_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=1ffcd5686831da5455ac067168b00290cf43b5f47f5ca92502c76827184a7a23',
            'https://test-bucket.s3.ap-northeast-2.amazonaws.com/16_?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T172245Z&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Expires=600&X-Amz-Credential=test-key%2F20240411%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=c08a6915204a8b08d3679a5dc21aee77c68ce7ce9cae774b180bf40c10287f3c',
          ],
        },
      ],
    },
    error: null,
  });
});

export const handlers = [getMentoringQuestion, getMaterials, postMaterials];
