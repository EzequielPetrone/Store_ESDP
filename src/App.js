import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import Redes from './components/Redes';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import PageNotFound from './components/PageNotFound';
import { getQtyTotal } from './assets/datos'

export default function App() {

  const [counter, setCounter] = useState(getQtyTotal())

  return (
    <BrowserRouter>
      <header className='w-full sticky top-0'>
        <NavBar cartCounter={counter} />
      </header>
      <main className='w-full flex flex-auto'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='shop/:category' element={<ItemListContainer />} />
          <Route exact path='producto/:idprod' element={<ItemDetailContainer updateCounter={setCounter} />} />
          <Route exact path='cart' element={<Cart updateCounter={setCounter} />} />
          <Route exact path='cart/checkout' element={<Checkout />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
      <footer className='w-full sticky bottom-0'>
        <Redes />
      </footer>
    </BrowserRouter>
  )
}
