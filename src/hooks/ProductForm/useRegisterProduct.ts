import { ChangeEvent, useReducer } from 'react';

interface RegisterProductState {
  name: string;
  price: string;
  description: string;
}

interface RegisterProductAction {
  type: keyof RegisterProductState | 'clearAll';
  payload: string;
}

const registerProductReducer = (
  state: RegisterProductState,
  action: RegisterProductAction,
) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'price':
      return { ...state, price: action.payload };
    case 'description':
      return { ...state, description: action.payload };
    case 'clearAll':
      return { name: '', price: '', description: '' };
    default:
      throw new Error(`invalid action type: ${action.type}`);
  }
};
const useRegisterProduct = () => {
  const [state, dispatch] = useReducer(registerProductReducer, {
    name: '',
    price: '',
    description: '',
  });

  const onChange =
    (type: keyof RegisterProductState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch({ type, payload: e.target.value });
    };

  const clearAll = () => {
    dispatch({ type: 'clearAll', payload: '' });
  };

  return { state, onChange, clearAll };
};

export default useRegisterProduct;
