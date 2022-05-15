import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Nav from './Pages/SharedPage/Navbar/Nav';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import SingUp from './Pages/SignUp/SingUp';

function App() {
  return (
    <div className=' max-w-7xl mx-auto px-12 '>
      <Nav></Nav>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/About' element={<About/>}></Route>
       <Route path='/Appointment' element={<Appointment/>}></Route>
       <Route path='/Login' element={<Login/>}></Route>
       <Route path='/SignUp' element={<SingUp/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
