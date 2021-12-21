import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Branding from './components/Branding';
// import ItemList from './components/ItemList';
import Redes from './components/Redes';
import ItemListContainer from './components/ItemListContainer';

export default function App() {

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
          <ItemListContainer updateCounter={(n)=>setCounter(Math.max(counter + n, 0))}/>
        </section>
      </main>
      <footer className='w-full'>
        <Redes/>
      </footer>
    </>
  )
}
