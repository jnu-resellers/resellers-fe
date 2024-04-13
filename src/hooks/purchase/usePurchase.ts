import { useState } from 'react';

export const usePurchase = () => {
  const [selectedProductId, setSelectedProductId] = useState<number>(1);

  const onClickProduct = (id: number) => {
    setSelectedProductId(id);
  };

  return {
    selectedProductId,
    onClickProduct,
  };
};
