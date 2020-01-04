import React, {createContext, useReducer} from 'react';

const initialState = {
  username: null,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'login':
        localStorage.setItem('username', action.username)
        return {
          ...state,
          username: action.username,
        };
      case 'logout':
        localStorage.removeItem('username')
        return {
          ...state,
          username: initialState.username,
        };
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }