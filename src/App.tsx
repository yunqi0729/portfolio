import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/About';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import YunqiProject from './components/ProjectPages/Yunqi';
import TuitionifyProject from './components/ProjectPages/Tuitionify';
import VCareProject from './components/ProjectPages/VCare';
import ZooMathsProject from './components/ProjectPages/ZooMaths';

interface LocationState {
  fromProject?: boolean;
}

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as LocationState;

    if (state?.fromProject) {
      const isSmallScreen = window.innerWidth < 1366;  //1024
      scroller.scrollTo('projects', {
        duration: 0,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: isSmallScreen ? 55 : 10
      });
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Education />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/yunqi" element={<YunqiProject />} />
        <Route path="/projects/tuitionify" element={<TuitionifyProject />} />
        <Route path="/projects/vcare" element={<VCareProject />} />
        <Route path="/projects/zoomaths" element={<ZooMathsProject />} />
      </Routes>
    </Router>
  );
}

export default App;