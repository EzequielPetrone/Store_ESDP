import './App.css';
import NavBar from './components/NavBar';
import Cuerpo from './components/Cuerpo';
import Redes from './components/Redes';

export default function App() {
  return (
    <>
      <header className='w-full'>
        <NavBar/>  
      </header>
      <main>
        <Cuerpo/>
      </main>
      <footer className='w-full'>
        <Redes/>
      </footer>
    </>
  )
}
