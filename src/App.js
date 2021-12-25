import './App.css';
import { useState } from 'react';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import NavBar from './components/NavBar';
import Main from './components/Main';
import Redes from './components/Redes';
import ItemDetailContainer from './components/ItemDetailContainer';
import PageNotFound from './components/PageNotFound';

import {getQtyTotal} from './assets/datos'

export default function App() {

  const [counter, setCounter] = useState(getQtyTotal())
 
  // const updateCounter = (n) => setCounter(Math.max(counter + n, 0))

  return (
    <BrowserRouter>
      <header className='w-full'>
        <NavBar cartCounter={counter}/>  
      </header>
      <main className='w-full sm:w-11/12 lg:w-10/12 flex-auto'>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='producto/:idprod' element={<ItemDetailContainer updateCounter={setCounter}/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </main>
      <footer className='w-full'>
        <Redes/>
      </footer>
    </BrowserRouter>
  )
}
