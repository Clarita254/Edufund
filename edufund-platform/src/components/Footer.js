
import React from "react";
import { FaEnvelope, FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5 pt-4 pb-3 text-white rounded-top shadow-lg">
      <div className="container">
        <div className="row">

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p><FaPhoneAlt className="me-2" /> +254 712 345 678</p>
            <p><FaEnvelope className="me-2" /> edufund@gmail.com</p>
            <p><FaLinkedin className="me-2" /> <a href="https://linkedin.com/edufund" target="_blank" rel="noreferrer" className="footer-link">EduFund LinkedIn</a></p>
            <p><FaInstagram className="me-2" /> <a href="https://instagram.com/edufund" target="_blank" rel="noreferrer" className="footer-link">@edufund</a></p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/campaigns" className="footer-link">Campaigns</a></li>
              <li><a href="/donation-history" className="footer-link">Donation History</a></li>
              <li><a href="/leaderboard" className="footer-link">Leaderboard</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-md-4 mb-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/signup" className="footer-link">Sign Up</a></li>
              <li><a href="/signin" className="footer-link">Login</a></li>
            </ul>
          </div>
        </div>

        {/*Footer Bottom Section */}
        <div className="row">
          <div className="col-12">
            <div className="footer-bottom text-center mt-4">
              <p>EduFund &copy; {new Date().getFullYear()} — All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
