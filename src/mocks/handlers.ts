import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/question', () => {
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
  }),
];
