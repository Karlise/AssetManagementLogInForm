import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Success from './components/Success'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<Login/>} path='/login'/>
        <Route element={<Success/>} path='/success'/>
      </Routes>
    </Router>
  )
}

export default App
