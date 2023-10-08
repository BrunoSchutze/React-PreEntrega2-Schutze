import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListConteiner from './componentes/NavBar/ItemListConteiner/ItemListConteiner'

function App() {
  

  return (
    <>
    <NavBar/>
    <ItemListConteiner greeting= "Hola Bienvenido!"/>
    </>
  )
}

export default App
