import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Log"; 
import './App.css';
import Signup from "./Signup";
function App() {
  return (
    <div class="h-screen w-screen bg-background-image bg-cover bg-center opacity-80 md:bg-background-image-mobile lg:bg-background-image-tablet">
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