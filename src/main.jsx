import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createRoot } from 'react-dom/client';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';


createRoot(document.getElementById('root')).render(
  <>
   
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </BrowserRouter>

  
  </>
)
