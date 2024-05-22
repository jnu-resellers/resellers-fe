import axios, { RawAxiosRequestHeaders } from 'axios';

export const imgUploadAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AWS_LAMBDA_URL,
});

const generateHeaderForPresignedUrl = (
  key: keyof RawAxiosRequestHeaders,
  extension: string
): RawAxiosRequestHeaders => {
  return {
    [key]: `application/${extension}`,
  };
};

export const getPresignedUrl = async (extension: string) => {
  const response = await imgUploadAxiosInstance.get(
    `/default/presignedUrlUpload`,
    {
      headers: {
        ...generateHeaderForPresignedUrl('Content-Type', extension),
        'x-extension': extension,
      },
    }
  );
  return response.data as { presignedUrl: string };
};

export const putImageToS3 = async (
  presignedUrl: string,
  file: File,
  extension: string
) => {
  const instance = axios.create();

  return await instance.put(presignedUrl, file, {
    headers: generateHeaderForPresignedUrl('Content-Type', extension),
  });
};
