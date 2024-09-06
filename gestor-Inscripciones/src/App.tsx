import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './components/landing/LandingComp'
import Navbar from './components/generals/Navbar';
import Users from './components/landing/selectUsers/Users'
import './App.css'

function App() {

  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/selecUser' element={<Users/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
