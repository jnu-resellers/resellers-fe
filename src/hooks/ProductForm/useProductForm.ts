import { ChangeEvent, useReducer } from 'react';

interface ProductFormState {
  title: string;
  itemType: string;
  contact: string;
}

interface ProductFormAction {
  type: keyof ProductFormState;
  payload: string;
}

const productFormReducer = (
  state: ProductFormState,
  action: ProductFormAction
) => {
  switch (action.type) {
    case 'title':
      return { ...state, title: action.payload };
    case 'itemType':
      return { ...state, itemType: action.payload };
    case 'contact':
      return { ...state, contact: action.payload };
    default:
      throw new Error(`not valid action type: ${action.type}`);
  }
};

const useProductForm = () => {
  const [state, dispatch] = useReducer(productFormReducer, {
    title: '',
    itemType: '',
    contact: '',
  });

  const onChange = (type: keyof ProductFormState) => {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      dispatch({ type, payload: e.target.value });
    };
  };

  return { state, onChange };
};

export default useProductForm;
