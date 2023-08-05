import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import { MdOutlineReorder } from "react-icons/md";

export const NavBar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((expandNavbar) => !expandNavbar);
          }}
        >
          <MdOutlineReorder />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
};
