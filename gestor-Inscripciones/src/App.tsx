import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './components/landing/LandingComp'
import Navbar from './components/generals/Navbar';
import Users from './components/landing/selectUsers/Users'
import ContactView from "./components/views/ContactView";
import './App.css'

function App() {

  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/usuario=?' element={<Users/>} />
        <Route path='/contacto' element={<ContactView/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
