export const generateImgCloudFrontUrl = (imgUrl: string) => {
  return `${import.meta.env.VITE_AWS_CLOUDFRONT_URL}/${imgUrl}`;
};

export const generateFullApiUrl = (path: string) => {
  return `${import.meta.env.VITE_API_URL}${path}`;
};
