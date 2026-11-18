
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Experience from "./Pages/Experience/Experience";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar />
        <main style={{ flex: 1, minWidth: 0 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;