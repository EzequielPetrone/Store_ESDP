import './App.css';

import NavBar from './components/NavBar';
import Branding from './components/Branding';
import ItemListContainer from './components/ItemListContainer';
import Redes from './components/Redes';

const productos = [
  { id:1, greeting: 'Hola, soy el producto 1' },
  { id:2, greeting: 'Hola, soy el producto 2' },
  { id:3, greeting: 'Hola, soy el producto 3' }
]

export default function App() {
  return (
    <>
      <header className='w-full'>
        <NavBar/>  
      </header>
      <main className='w-full sm:w-10/12 lg:w-8/12 flex-auto'>
        <Branding/>
        <ItemListContainer arrayProd={productos}/>
      </main>
      <footer className='w-full'>
        <Redes/>
      </footer>
    </>
  )
}
