import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/components/store'; 
import Header from './components/Header/Header';  
import Main from './components/Main/Main';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
};

export default App;
