import { useState } from "react";
import { PurchaseDetailsProps } from "../components/Purchase/Purchase";

export const useProducts = () => {
  const [currentProduct, setCurrentProduct] = useState<
    PurchaseDetailsProps["products"]
  >([]);

  const setCurrentProductWithId = (id: number) => {
    setCurrentProduct(currentProduct.filter((product) => product.id === id));
  };

  return { currentProduct, setCurrentProductWithId };
};
