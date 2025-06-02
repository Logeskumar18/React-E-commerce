import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createRoot } from 'react-dom/client';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './index.css'
import { CartProvider } from '../src/Components/CartContext'
import Cart from './Components/Cart';


createRoot(document.getElementById('root')).render(
  <>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element= {<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>

  </>
)
