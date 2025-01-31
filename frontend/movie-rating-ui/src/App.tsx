import './App.css'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
 

  return (
    <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
        <Link to="/login">Login</Link> 
        </li>
      </ul>
    </nav>
    <div className='container'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path='/login' element={<Login />}></Route>
    </Routes>
    </div>
  </Router>
 
  )
}

export default App
