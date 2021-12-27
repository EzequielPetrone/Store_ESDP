import './App.css';
import { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemList from './components/ItemList';
import Redes from './components/Redes';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import PageNotFound from './components/PageNotFound';

import { getQtyTotal } from './assets/datos'

export default function App() {

  const [counter, setCounter] = useState(getQtyTotal())

  return (
    <BrowserRouter>
      <header className='w-full'>
        <NavBar cartCounter={counter} />
      </header>
      <main className='w-full sm:w-11/12 lg:w-10/12 flex-auto'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='shop/:category' element={<ItemList />} />
          <Route exact path='producto/:idprod' element={<ItemDetailContainer updateCounter={setCounter} />} />
          <Route exact path='cart' element={<Cart updateCounter={setCounter} />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </main>
      <footer className='w-full'>
        <Redes />
      </footer>
    </BrowserRouter>
  )
}
