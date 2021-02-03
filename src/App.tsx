import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { useSelector } from 'react-redux';
import ShoppingBasket from './Components/Basket/ShoppingBasket';

function App() {

  const islit = useSelector((state: any) => {
    return state.themes.value
  });

  return (
    <div className={`${islit?'':'dark'} App`}>
      <Header />
      <ShoppingBasket />
    </div>
  );
}

export default App;
