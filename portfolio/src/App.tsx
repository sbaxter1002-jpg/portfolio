import Sidenav from './Sidebar/Sidebar.tsx'
import Home from './Pages/Home/Home.tsx'
import About from './Pages/About.tsx'
import Projects from './Pages/Projects.tsx'
import Experience from './Pages/Experience.tsx'
import Contact from './Pages/Contact.tsx'

import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom"

function App() {

  return (
    <>
      <Router>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Experience" element={<Experience />}/>
          <Route path="/Contact" element={<Contact />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App