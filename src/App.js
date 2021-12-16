import './App.css';

import { useState } from 'react';

import NavBar from './components/NavBar';
import Branding from './components/Branding';
import ItemListContainer from './components/ItemListContainer';
import Redes from './components/Redes';

export default function App() {

  const productos = [
    { id: 1, descripcion: 'Soy el producto 1', stock: 5 },
    { id: 2, descripcion: 'Soy el producto 2', stock: 15 },
    { id: 3, descripcion: 'Soy el producto 3', stock: 10 }
  ]

  const [counter, setCounter] = useState(0)
 
  return (
    <>
      <header className='w-full'>
        <NavBar cartCounter={counter}/>  
      </header>
      <main className='w-full sm:w-10/12 lg:w-8/12 flex-auto'>
        <section className="my-4">
          <Branding/>
        </section>
        <section className="my-4">
          <ItemListContainer arrayProd={productos} 
            updateCounter={(n)=>setCounter(Math.max(counter + n, 0))}
          />
        </section>
      </main>
      <footer className='w-full'>
        <Redes/>
      </footer>
    </>
  )
}
