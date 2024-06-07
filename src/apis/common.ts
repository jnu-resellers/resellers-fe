export interface GetResponseBody<T> {
  success: boolean;
  response: T;
  error: string | null;
}
