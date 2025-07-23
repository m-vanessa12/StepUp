import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './Heading/header';
import HeroSection from './Hero-Section/hero';
import AboutUs from './About/about';
import Career from './Career/career';
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
