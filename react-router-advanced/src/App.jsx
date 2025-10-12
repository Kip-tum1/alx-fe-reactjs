import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import NestedRoutesExample from './components/NesterRoutes';
import './App.css'

function App() { 

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/profilr" element={<><Profile /><Profile /></>} />
        <Route path="/nestedRoutesExample/:id" element={<NestedRoutesExample />} />
      </Routes>
    </BrowserRouter>

      
    </>
  );
}

export default App
