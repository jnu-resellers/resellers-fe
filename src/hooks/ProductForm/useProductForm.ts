import { ChangeEvent, useReducer } from 'react';
import { isNonNegativeInteger } from 'src/utils/validator';

interface ProductFormState {
  productName: string;
  itemType: string; // TODO: concrete type
  contact: string;
  description: string;
  price: string;
  defect: string;
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
    case 'productName':
      return { ...state, productName: action.payload };
    case 'itemType':
      return { ...state, itemType: action.payload };
    case 'contact':
      return { ...state, contact: action.payload };
    case 'description':
      return { ...state, description: action.payload };
    case 'defect':
      return { ...state, defect: action.payload };
    case 'price':
      if (isNonNegativeInteger(action.payload)) {
        return { ...state, price: action.payload };
      }
      return state;
    default:
      throw new Error(`not valid action type: ${action.type}`);
  }
};

const useProductForm = () => {
  const [state, dispatch] = useReducer(productFormReducer, {
    productName: '',
    itemType: '',
    contact: '',
    description: '',
    price: '',
    defect: '',
  });

  const onChange = (type: keyof ProductFormState) => {
    return (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
    ) => {
      dispatch({ type, payload: e.target.value });
    };
  };

  return { state, onChange };
};

export default useProductForm;
