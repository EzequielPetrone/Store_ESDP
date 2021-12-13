import './App.css';
import NavBar from './components/NavBar';
import Cuerpo from './components/Cuerpo';
import Firma from './components/Firma';

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
        <Firma/>
      </footer>
    </>
  )
}
