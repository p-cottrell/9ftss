import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import '../styles/app.css';
import { Home } from "../pages/home/Home";
import { Music } from "../pages/music/Music";
import { About } from "../pages/about/About";
import { Contact } from "../pages/contact/Contact";


export default function App() {
  const location = useLocation();

  const refs = React.useRef(new Map());
  const getNodeRef = (key) => {
    if (!refs.current.has(key)) refs.current.set(key, React.createRef());
    return refs.current.get(key);
  };

  const nodeRef = getNodeRef(location.pathname);

  return (
    <>
      <main className="page-container">
            <div ref={nodeRef} className="route-wrapper">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/music" element={<Music />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>

      </main>
    </>
  );
}
