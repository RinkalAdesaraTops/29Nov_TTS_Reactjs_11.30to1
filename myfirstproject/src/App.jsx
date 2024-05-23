import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyFirstcomponent from './MyFirstcomponent'
import MyClassComponent from './MyClassComponent'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import StyleComponent from './StyleComponent'
import Menu from './Menu'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Lifecycle from './Lifecycle'
import LifecycleFunc from './LifecycleFunc'

function App() {
  const arr = [10,20,30,40]
  const li = arr.map((i)=> <li>{i}</li>)
  // arr.forEach((i)=>{
  //   console.log(i)
  // })
  return (
    <>
      <div>
        
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/lifecycle' element={<Lifecycle />}></Route>
            <Route path='/lifecyclefunc' element={<LifecycleFunc />}></Route>
            
        </Routes>

        </BrowserRouter>
        My First Project
        <ul>
          {/* {li} */}
        {/* {
          arr.map((i,index)=>{
            return (<li key={index}>{i}</li>);
          })
        } */}
        </ul>
        {/* <MyFirstcomponent name="Rinkal" id="101" myarray={arr}/>
        <MyClassComponent name="john" id="1001"/> */}
        {/* <StyleComponent /> */}
      </div>
      
    </>
  )
}

export default App
