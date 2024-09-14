import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Navbar from './components/generals/Navbar'; 
import Users from './components/landing/selectUsers/Users';
import UserBoard from './pages/UserBoard/UserBoard.tsx';
import LandingPage from "./pages/landing/LandingPage.tsx";
import ContactView from "./pages/Contacto/Contacto.tsx";
import NavbarDesktop from "./components/generals/desktop/NavbarDesktop.tsx";
import './App.css';
import AboutUs from "./pages/About/About.tsx";
import FooterDesktop from "./components/generals/desktop/FooterDesktop.tsx";
import Footer from "./components/generals/Footer.tsx";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 1199 }); 

  return (
    <Router>
      <div className="app-container">
        {isDesktop ? <NavbarDesktop /> : <Navbar />} 
        <main className="main-content">
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/usuario=?' element={<Users/>} />
            <Route path='/contacto' element={<ContactView/>} />
            <Route path='/userBoard' element={<UserBoard/>} />
            <Route path='/sobreNosotros' element={<AboutUs/>} />
          </Routes>
        </main>
        {isDesktop ? <FooterDesktop/> : <Footer/>} 
      </div>
    </Router>
  )
}
export default App;
