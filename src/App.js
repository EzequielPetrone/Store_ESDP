import './App.css';

import NavBar from './components/NavBar';
import Branding from './components/Branding';
import ItemListContainer from './components/ItemListContainer';
import Redes from './components/Redes';

export default function App() {
  return (
    <>
      <header className='w-full'>
        <NavBar/>  
      </header>
      <main className='w-full sm:w-10/12 lg:w-8/12 flex-auto'>
        <Branding/>
        <ItemListContainer/>
      </main>
      <footer className='w-full'>
        <Redes/>
      </footer>
    </>
  )
}
