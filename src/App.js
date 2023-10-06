import React from 'react'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import { BrowserRouter, } from 'react-router-dom'
import Router from './router/router'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter >
        <header>
          Header for fixed
        </header>
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App