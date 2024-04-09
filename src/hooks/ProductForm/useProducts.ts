import { useState } from 'react';

export interface Product {
  imgFileNames: string[];
  name: string;
  price: number;
  description: string;
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const appendProduct = (product: Product) => {
    setProducts([...products, product]);
  };
  return { products, appendProduct };
};

export default useProducts;
