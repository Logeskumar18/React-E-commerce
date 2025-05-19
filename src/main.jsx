import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </BrowserRouter>

  
  </>
)
