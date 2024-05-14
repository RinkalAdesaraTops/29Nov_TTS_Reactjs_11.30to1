import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyFirstcomponent from './MyFirstcomponent'
import MyClassComponent from './MyClassComponent'

function App() {
  const arr = [10,20,30,40]
  const li = arr.map((i)=> <li>{i}</li>)
  // arr.forEach((i)=>{
  //   console.log(i)
  // })
  return (
    <>
      <div>
        My First Project
        <ul>
          {li}
        {/* {
          arr.map((i,index)=>{
            return (<li key={index}>{i}</li>);
          })
        } */}
        </ul>
        <MyFirstcomponent name="Rinkal" id="101" myarray={arr}/>
        <MyClassComponent name="john" id="1001"/>
      </div>
      
    </>
  )
}

export default App
