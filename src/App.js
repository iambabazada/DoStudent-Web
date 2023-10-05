import React from 'react'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import { BrowserRouter, } from 'react-router-dom'
import Router from './router/router'

const App = () => {
  return (
    <div>
      <BrowserRouter >
        <header>
          Header
        </header>
        <Router />
        <footer>
          Footer
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App