import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import '../styles/app.css';
import Header from "../components/header/Header";
import { Home } from "../pages/home/Home";



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
      <Header />
      <main className="page-container">
            <div ref={nodeRef} className="route-wrapper">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </div>

      </main>
    </>
  );
}
