import { useState } from 'react';

export interface Product {
  clientId: string;
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
  const removeProductById = (clientId: string) => {
    setProducts(products.filter((product) => product.clientId !== clientId));
  };

  return { products, appendProduct, removeProductById };
};

export default useProducts;
