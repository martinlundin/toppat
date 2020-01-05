import React, {createContext, useReducer} from 'react';

const initialState = {
  username: null,
  tickers: [
    {name: '5', checked: true},
    {name: '5+', checked: true},
    {name: '6A', checked: true},
    {name: '6A+', checked: true},
    {name: '6B', checked: true},
    {name: '6B+', checked: true},
    {name: '6C', checked: true},
    {name: '6C+', checked: true},
    {name: '7A', checked: true},
    {name: '7A+', checked: true},
    {name: '7B', checked: true},
    {name: '7B+', checked: true},
    {name: '7C', checked: true},
    {name: '7C+', checked: true},
    {name: '8A', checked: true},
  ],
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
      case 'setTickers':
        localStorage.setItem('tickers', JSON.stringify(action.tickers))
        return {
          ...state,
          tickers: action.tickers,
        };  
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }