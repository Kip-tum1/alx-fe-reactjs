import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import axios from 'axios';
import Search from './components/Search';


function App(){
  return(
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App;