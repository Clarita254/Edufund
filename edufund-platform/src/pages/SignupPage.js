import React from "react";
import "../styles/SignUp.css";
import Footer from "../components/Footer";
const SignupPage = () => {
  return (
    <div className="signup-wrapper">
    <div className="container signup-page py-5">
      <h1 className="text-center mb-4 heading">Create Your EduFund Account</h1>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-3">Sign Up</h2>
            <form>
              <div className="form-group mb-3">
                <input type="text" className="form-control" placeholder="Username" required />
              </div>
              <div className="form-group mb-3">
                <input type="email" className="form-control" placeholder="Email" required />
              </div>
              <div className="form-group mb-4">
                <input type="password" className="form-control" placeholder="Password" required />
              </div>
              <button type="submit" className="btn btn-success w-100">
                Sign Up
              </button>
            </form>

            <div className="text-center mt-3">
              <p className="text-muted">or continue with Google</p>
              <button className="btn btn-outline-dark w-100 mt-2">
                <i className="bi bi-google me-2"></i> Continue with Google
              </button>
            </div>

            <div className="text-center mt-3">
              <p>
                Already have an account?{" "}
                <a href="/signin" className="text-success fw-bold">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;
