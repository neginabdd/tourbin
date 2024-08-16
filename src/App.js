import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Log"; 
import './App.css';
import Signup from "./Signup";
function App() {
  return (
    <div className="App background-image h-screen w-screen bg-cover bg-center bg-no-repeat opacity-80">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;