import React from 'react';
import LandingPage from './LansingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Signup  from './Signup';
import  Login from './Login';
import HomePage from './Home';
import ProfilePage from './Profile';
import ProblemPage from  "./Problem";
import YourComponent from "./openLab"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/Home' element={<HomePage/>}></Route>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/Profile' element={<ProfilePage/>}></Route>
      <Route path='/Problem' element={<ProblemPage/>}></Route>
      <Route path='/openLab' element={<YourComponent/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App