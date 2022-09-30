import React from 'react'
import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Hello from './components/Hello';
import Number from './components/Number';
import Hello2 from './components/Hello2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/:number" element={<Number/>}></Route>
          <Route path="/hello/:word" element={<Hello/>}></Route>
          <Route path="/:word/:bgColor/:fontColor" element={<Hello2/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
