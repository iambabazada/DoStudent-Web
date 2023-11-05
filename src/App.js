import React from 'react'
// import Register from './pages/auth/Register'
// import Login from './pages/auth/Login'
import { BrowserRouter, useLocation, } from 'react-router-dom'
import Router from './router/router'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Blog from './components/Blog/Blog'
import { useSelector } from 'react-redux'


const MainContent = () => {
  const location = useLocation()
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div>
      {!isAuthPage && <Navbar />}
      <Router />
      {!isAuthPage && <Footer />}
    </div>
  )
}


const App = () => {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  )
}

export default App