// En App.js armo el esqueleto permanente de la web, 
// implemento el ruteo de React para la navegación 
// y aplico los context creados

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/Header/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Redes from './components/Footer/Redes';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/Checkout/CheckoutForm';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { CartContextProvider } from './context/cartContext';
import { DivisaContextProvider } from './context/divisaContext';

export default function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <DivisaContextProvider>
          <header className='w-full sticky top-0 z-10'>
            <NavBar />
          </header>
          <main className='w-full flex justify-center flex-auto'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='shop-all' element={<ItemListContainer />} />
              <Route exact path='shop/:category' element={<ItemListContainer />} />
              <Route exact path='product/:idprod' element={<ItemDetailContainer />} />
              <Route exact path='cart' element={<Cart />} />
              <Route exact path='cart/checkout' element={<CheckoutForm />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </main>
          <footer className='w-full bg-black '>
            <Redes />
            <div className='flex justify-end mx-4 mb-2'>
              <span className='text-color-2 text-xs 2xl:text-sm'>Developed by Ezequiel Petrone</span>
            </div>
          </footer>
        </DivisaContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  )
}
