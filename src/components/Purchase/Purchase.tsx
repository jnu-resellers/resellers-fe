export interface PurchaseDetailsProps {
  title: string;
  writer: string;
  products: {
    presignedUrl: string[];
    id: number;
    name: string;
    price: number;
    description: string;
  }[];
  error: string | null;
}

