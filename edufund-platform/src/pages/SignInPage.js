import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import Footer from "../components/Footer";
import "../styles/SignIn.css";

const SignInPage = () => {
  return (
    <>
      <div className="signin-container d-flex justify-content-center align-items-center vh-100">
        <div className="signin-card p-4 shadow rounded bg-white ">
          <div className="text-center mb-4">
            <BsPersonCircle size={60} color="#198754" />
            <h2 className="mt-2">Sign In</h2>
          </div>

          <form>
            <div className="form-group mb-3">
              <label className="form-label">
                <FaUser className="me-2" />
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                required
              />
            </div>

            <div className="form-group mb-3">
              <label className="form-label">
                <FaLock className="me-2" />
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                required
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberMe"
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a
                href="/forgot-password"
                className="text-decoration-none text-success"
              >
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Sign In
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SignInPage;
