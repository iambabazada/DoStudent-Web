import React from 'react'
// import Register from './pages/auth/Register'
// import Login from './pages/auth/Login'
import { BrowserRouter, } from 'react-router-dom'
import Router from './router/router'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter >
        <Navbar />
        <Router />
        <footer>
          Footer
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App