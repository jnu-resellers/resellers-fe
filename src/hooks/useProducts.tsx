import { useEffect, useState } from "react";
import { PurchaseDetailsProps } from "../components/Purchase/Purchase";
import { PurchaseImagesProps } from "../components/Purchase/PurchaseImages";

export const useProducts = () => {
  //default 값은 첫번째 product
  const [currentProduct, setCurrentProduct] = useState<
    PurchaseDetailsProps["products"]
  >([]);

  const setCurrentProductWithId = (id: number) => {
    setCurrentProduct(currentProduct.filter((product) => product.id === id));
  };

  return { currentProduct, setCurrentProductWithId };
};
