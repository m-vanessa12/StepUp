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
// import SignUp from './Platform/Account/SignUp.js';
import CreatePost from './Platform/Discusion/CreatePost.js';
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
        {/* <Route path='/get-started' element={<SignUp />} /> */}
        <Route path='/create-discussion' element={<CreatePost />} />
   
      </Routes>
    </Router>
  );

}

export default App;
