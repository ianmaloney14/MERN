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
          <Route element={<Main/>} path="/" default />
          <Route element={<ProductDetails/>} path="/product/:id" default />
          <Route element={<Update/>} path="/product/edit/:id" default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
