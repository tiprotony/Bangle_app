import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <div>
      <h1>probemos</h1>
      <button onClick={async () => {
        const response = await fetch('http://localhost:3000/users') // con esto espera la respuesta del front
        const data = await response.json() // convierte la repsuesta en forma de json
        console.log(data) //imrpimimos en consola 
      }}> obtener datos</button>
    </div>
  )
}

export default App
