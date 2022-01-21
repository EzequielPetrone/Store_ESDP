import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer';
import Redes from './components/Redes';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
// import Checkout from './components/Checkout';
import CheckoutForm from './components/CheckoutForm';
import PageNotFound from './components/PageNotFound';
import DivisaSelector from "./components/DivisaSelector";
import { CartContextProvider } from './context/cartContext';
import { DivisaContextProvider } from './context/divisaContext';

export default function App() {

  return (
    <BrowserRouter>
      <CartContextProvider>
        <DivisaContextProvider>
          <header className='w-full sticky top-0'>
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
          <footer className='w-full bg-black'>
            <Redes />
            <div className='flex justify-between mx-3 mb-2 sm:mx-4 sm:mb-3'>
            <span className='text-color-2 text-xs sm:text-sm'>Developed by Ezequiel Petrone</span>
            <DivisaSelector />
            </div>
          </footer>
        </DivisaContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  )
}
