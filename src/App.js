import React from 'react';
import './App.css';
import { StateProvider } from './store.js';

import Home from './components/Home';

function App() {
  return (
    <StateProvider>
      <Home />
    </StateProvider>
  );
}

export default App;
