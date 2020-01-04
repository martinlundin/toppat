import React from 'react';
import './App.css';
import { StateProvider } from './store.js';

import Home from './components/Home';
import Header from './components/Header';

function App() {

  return (
    <StateProvider>
      <Home />
    </StateProvider>
  );
}

export default App;
