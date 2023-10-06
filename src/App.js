import React from 'react'
// import Register from './pages/auth/Register'
// import Login from './pages/auth/Login'
import { BrowserRouter, } from 'react-router-dom'
import Router from './router/router'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog'

const App = () => {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App