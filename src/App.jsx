import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<Register />}/>
      </Routes>
    </Router>
  )
}

export default App