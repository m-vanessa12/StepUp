import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './Heading/header';
import HeroSection from './Hero-Section/hero';
import AboutUs from './About/about';
import Feature from './Feature/feature';
import Career from './Careers/career';
import Contact from './Contact/contact';
import Footer from './Footer/Footer';
// import Sidebar from './Platform/Sidebar/sidebar';
// import Topbar from './Platform/Topbar/topbar.js';
import Home from './Platform/Home/home.js';
import './icons.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" 
         element={
        <>
          <MenuBar />
          <HeroSection />
          <AboutUs />
          < Feature />
          <Career />
          <Contact />
          < Footer/>
        </>
        }
        />
        {/* Route to the platform pages*/}
        <Route path='/get-started' element={<Home />} />
   
      </Routes>
    </Router>
  );

}

export default App;
