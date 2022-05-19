import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Nav from './Pages/SharedPage/Navbar/Nav';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
import SingUp from './Pages/SignUp/SingUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/Dashboard/DashBoard';

import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyAppointment from './Pages/Dashboard/MyAppointment';

function App() {
  return (
    <div className=' max-w-7xl mx-auto px-12 '>
      <Nav></Nav>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/About' element={<About/>}></Route>
       <Route path='/appointments' element={<Appointment/>}></Route>

       <Route path='DashBoard' element={<DashBoard></DashBoard>}>
       <Route index element={<MyAppointment></MyAppointment>}></Route>
       <Route path='MyReview' element={<MyReview></MyReview>}></Route>
         
         <Route path='MyHistory' element={<MyHistory></MyHistory>}></Route>
       </Route>

       <Route path='/Login' element={<Login/>}></Route>
       <Route path='/SignUp' element={<SingUp/>}></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
