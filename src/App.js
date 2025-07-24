import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './Heading/header';
import HeroSection from './Hero-Section/hero';
import AboutUs from './About/about';
import Feature from './Feature/feature';
import Career from './Careers/career';
import Contact from './Contact/contact';
import Footer from './Footer/Footer';

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
      </Routes>
    </Router>
  );

}

export default App;
