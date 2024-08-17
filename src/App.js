import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Log from "./Log"; 
import './App.css';
import Signup from "./Signup";

function App() {
  return (
    <div className="App w-full h-auto object-cover background-image bg-cover bg-center bg-no-repeat opacity-75">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Log />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;