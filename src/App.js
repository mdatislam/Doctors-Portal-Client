import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Nav from './Pages/SharedPage/Navbar/Nav';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <div className=' max-w-7xl mx-auto px-12 '>
      <Nav></Nav>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/About' element={<About/>}></Route>
       <Route path='/Appointment' element={<Appointment/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
