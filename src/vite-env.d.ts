/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_AWS_LAMBDA_URL: string;
  readonly VITE_AWS_CLOUDFRONT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
