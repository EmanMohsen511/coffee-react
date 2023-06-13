import React, {useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Generic from './components/Generic'
import Element from './components/Element'
import Footer from './components/Footer'
import CoffeePage from './components/CoffeePage'
import { Route, Routes } from 'react-router-dom';
import axios from 'axios'




function App() {
  const [coffee , setCoffee] = useState([]);
  const getAllCoffee = async ()=>{
    const response = await axios.get(`https://api.sampleapis.com/coffee/hot`);
    setCoffee(response.data);
  } //getAllCoffee
  useEffect(()=>{
    getAllCoffee();
  },[]);

  return (
    <>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home coffee ={coffee}/>}/>
        <Route path='/generic' element={<Generic/>}/>
        <Route path='/element' element={<Element/>}/>
        <Route path='/coffeepage' element ={<CoffeePage coffee ={coffee}/>}/>
       </Routes>
       
       <Footer/>
    </>
  );
}

export default App;
