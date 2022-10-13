import './App.css';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default />
          <Route element={<ProductDetails/>} path="/product/:id" default />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
