import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"}>ALL</Link>
              </li>
              <li className="nav-item">
                <Link to={"/FSD"}>FULL STACK DEVELOPMENT</Link>
              </li>
              <li className="nav-item">
                <Link to={"/DATA"}>DATA SCIENCE</Link>
              </li>
              <li className="nav-item">
                <Link to={"/cyber"}>CYBER SECURITY</Link>
              </li>
              <li className="nav-item">
                <Link to={"/career"}>CAREER</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
