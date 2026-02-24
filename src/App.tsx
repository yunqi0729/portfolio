import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/About';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import YunqiProject from './components/ProjectPages/Tuitionify';
import TuitionifyProject from './components/ProjectPages/Tuitionify';
import VCareProject from './components/ProjectPages/VCare';
import ZooMathsProject from './components/ProjectPages/ZooMaths';

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Education />
      <Experiences />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    /* Add the basename prop here */
    <Router basename="/portfolio">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/tuitionify" element={<TuitionifyProject />} />
        <Route path="/projects/vcare" element={<VCareProject />} />
        <Route path="/projects/zoomaths" element={<ZooMathsProject />} />
      </Routes>
    </Router>
  );
}

export default App;

// import Navbar from './components/Navbar'
// import Header from './components/Header'
// import About from './components/About'
// import Education from './components/Education'
// import Experiences from './components/Experiences'
// import Projects from './components/Projects'
// import Contact from './components/Contact'


// function App() {
//   return (
//     <>
//       <Navbar />
//       <Header />
//       <About />
//       <Education />
//       <Experiences />
//       <Projects />
//       <Contact />
//     </>
//   )
// }

// export default App
