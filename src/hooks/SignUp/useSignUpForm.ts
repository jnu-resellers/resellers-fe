import { ChangeEvent, useReducer } from 'react';

interface SignUpFormState {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  bankName: string;
  accountNumber: string;
  contact: string;
}

interface ProductFormAction {
  type: keyof SignUpFormState;
  payload: string;
}

const signUpFormReducer = (
  state: SignUpFormState,
  action: ProductFormAction
) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.payload };
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'bankName':
      return { ...state, bankName: action.payload };
    case 'accountNumber':
      return { ...state, accountNumber: action.payload };
    case 'contact':
      return { ...state, contact: action.payload };
    case 'passwordConfirm':
      return { ...state, passwordConfirm: action.payload };
    default:
      throw new Error(`not valid action type: ${action.type}`);
  }
};

const useSignUpForm = () => {
  const [state, dispatch] = useReducer(signUpFormReducer, {
    name: '',
    email: '',
    password: '',
    bankName: '',
    accountNumber: '',
    contact: '',
    passwordConfirm: '',
  });

  const onChange = (type: keyof SignUpFormState) => {
    return (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
    ) => {
      dispatch({ type, payload: e.target.value });
    };
  };

  return { state, onChange };
};

export default useSignUpForm;
