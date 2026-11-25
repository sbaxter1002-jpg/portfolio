import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Experience from "./Pages/Experience/Experience";
import Contact from "./Pages/Contact/Contact";

// Lives inside BrowserRouter so it can read the current URL
function Layout() {
  const { pathname, hash } = useLocation();

  // "/Contact" -> "Contact"; "/" and "/Home" -> "" (shows as ~)
  const name = pathname.replace(/^\/|\/$/g, "");
  // "/Projects#project-one" -> "Projects/project-one"
  const base = name.toLowerCase() === "home" ? "" : name;
  const page = base && hash ? `${base}/${hash.slice(1)}` : base;

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {}
      <Sidebar />

      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <main style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer page={page} />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;