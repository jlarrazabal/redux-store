import React from "react";
import { reducer } from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);

// const StoreContext = createContext();
// const { Provider } = StoreContext;

const StoreProvider = ({store, ...props }) => {
  // const [state, dispatch] = useProductReducer({
  //   products: [],
  //   cart: [],
  //   cartOpen: false,
  //   categories: [],
  //   currentCategory: '',
  // });

  return <Provider store={store} {...props} />;
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

export { StoreProvider, store};
