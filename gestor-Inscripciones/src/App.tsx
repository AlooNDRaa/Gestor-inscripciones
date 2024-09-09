import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './components/landing/LandingComp';
import Navbar from './components/generals/Navbar';
import Users from './components/landing/selectUsers/Users';
import UserBoard from './pages/UserBoard/UserBoard.tsx';
import ContactView from "./components/views/ContactView";
import './App.css'

function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/usuario=?' element={<Users/>} />
        <Route path='/contacto' element={<ContactView/>} />
          <Route path='/userBoard' element={<UserBoard/>} />
        </Routes>
    </Router>
  )
}

export default App
