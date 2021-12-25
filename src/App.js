import './App.css';
import { Fragment, useState } from 'react';

import {
  BrowserRouter,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

import NavBar from './components/NavBar';
import Main from './components/Main';
// import Branding from './components/Branding';
import Redes from './components/Redes';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';

export default function App() {

  const [counter, setCounter] = useState(0)
 
  const updateCounter = (n) => setCounter(Math.max(counter + n, 0))

  return (
    <BrowserRouter>
      <header className='w-full'>
        <NavBar cartCounter={counter}/>  
      </header>
      <main className='w-full sm:w-11/12 lg:w-10/12 flex-auto'>
        <Routes>
          <Route exact path='/' element={<Main updateCounter={updateCounter}/>}/>
          <Route path='producto/:idprod' element={<ItemDetail/>}/>
        </Routes>
      </main>
      <footer className='w-full'>
        <Redes/>
      </footer>
    </BrowserRouter>
  )
}
