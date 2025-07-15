import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Heading from './heading/Menu-Bar';
import HeroSection from './Hero-Section/hero';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Heading/>} />
        <Route path="/" element={<HeroSection/>} />
        
      </Routes>
    </Router>

  );
}

export default App;
