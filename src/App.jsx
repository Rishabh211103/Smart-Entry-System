import { useState } from "react";
// import logo from './logo.svg'
import "./App.css";
import { useEffect, useRef } from "react";
import { BrowserRouter } from 'react-router-dom';
import Navigation from "./routes/index.jsx";

function App() {
  
   
  return (
    <div className="App">
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    </div>
  );
}

export default App;
