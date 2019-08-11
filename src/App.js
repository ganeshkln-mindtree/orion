import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/header';
import Movielist from './components/movielist';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
       <Header/>
      </header>
      <Movielist/>
    </div>
    </Provider>
  );
}

export default App;
