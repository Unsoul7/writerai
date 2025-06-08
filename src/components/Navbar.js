import React from "react";
import "./components.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/gc" className="navbar-brand">Generate Content</Link>
        <Link to="/rt" className="navbar-brand">Refine Text</Link>
        <Link to="/pt" className="navbar-brand">Paraphrase Text</Link>
    </nav>
  );
}