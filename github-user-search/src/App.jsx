import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import axios from 'axios';

function App(){
  return(
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;