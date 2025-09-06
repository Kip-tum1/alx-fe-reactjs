import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Nabar from "./components/Nabar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";

import Nabar from "./components/Nabar";

function App(){
  return(
    <>
     <Nabar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App;