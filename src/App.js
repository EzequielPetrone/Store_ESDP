import './App.css';
import { useState } from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import NavBar from './components/NavBar';
import Branding from './components/Branding';
import Redes from './components/Redes';
import ItemListContainer from './components/ItemListContainer';

export default function App() {

  const [counter, setCounter] = useState(0)
 
  return (
    <BrowserRouter>
      <header className='w-full'>
        <NavBar cartCounter={counter}/>  
      </header>
      <main className='w-full sm:w-11/12 lg:w-10/12 flex-auto'>
        <section className="my-4">
          <Branding/>
        </section>
        <section className="my-4">
          <ItemListContainer updateCounter={(n)=>setCounter(Math.max(counter + n, 0))}/>
        </section>
      </main>
      <footer className='w-full'>
        <Redes/>
      </footer>
    </BrowserRouter>
  )
}
