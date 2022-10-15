import './App.css';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Main/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="/product/edit/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
