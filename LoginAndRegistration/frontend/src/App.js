import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Posts from './components/Posts';

//The IIE (2024) demonstrates how to work with a Navbar and Routes.
function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Posts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

/* REFERENCE LIST:
The IIE. 2024. LAB GUIDE 2024 [APDS7311 Learn]. The Independent Institute of Education: Unpublished.
*/