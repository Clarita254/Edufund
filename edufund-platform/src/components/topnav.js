import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Topnav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-success" to="/">
          EduFund
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/campaigns">Campaigns</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donation-history">Donation History</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              <FaSearch />
            </button>
          </form>

          {/* Auth Links */}
          <div className="d-flex">
            <Link to="/signup" className="btn btn-outline-success me-2">
              Sign Up
            </Link>
            <Link to="/signin" className="btn btn-success">
              Sign In
            </Link>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topnav;
