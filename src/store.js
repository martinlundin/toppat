import React, {createContext, useReducer} from 'react';
import { addTickerCountToUser } from './firebase'

const initialState = {
  username: null,
  showableTickers: [
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
  tickers: {
    '5': 0,
    '5+': 0,
    '6A': 0,
    '6A+': 0,
    '6B': 0,
    '6B+': 0,
    '6C': 0,
    '6C+': 0,
    '7A': 0,
    '7A+': 0,
    '7B': 0,
    '7B+': 0,
    '7C': 0,
    '7C+': 0,
    '8A': 0,
  }
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
      case 'setShowableTickers':
        localStorage.setItem('showableTickers', JSON.stringify(action.showableTickers))
        return {
          ...state,
          showableTickers: action.showableTickers,
        };
      case 'setLocalTickerCount':        
        let localTickers = state.tickers
        localTickers[action.ticker] = action.count

        return {
          ...state,
          tickers: localTickers
        };
      case 'setTickerCount':
        addTickerCountToUser(state.username, action.ticker, action.count)
        
        let tickers = state.tickers
        tickers[action.ticker] = action.count

        return {
          ...state,
          tickers
        };
      default:
        console.log('unkown actiontype: ' + action.type);
    };
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }