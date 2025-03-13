import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Todo from './pages/Todo'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Todo/>
      <Footer/>
    </>
  )
}

export default App