export const generateImgCloudFrontUrl = (imgUrl: string) => {
  return `${import.meta.env.VITE_AWS_CLOUDFRONT_URL}/${imgUrl}`;
};
