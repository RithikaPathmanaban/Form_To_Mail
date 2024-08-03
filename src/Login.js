import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Import your custom CSS file

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      Swal.fire({
        title: "Success!",
        text: "Logged in successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please enter both username and password!",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="login-container">
      <div className="card-container">
        <div className="card shadow-lg border-light">
          <div className="card-header bg-danger text-white text-center py-2">
            <h4 className="mb-0">Login</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="username" className="form-label fw-bold">
                    Username
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col-md-4">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <button type="submit" className="btn btn-success mb-2">
                    Login
                  </button>
                </div>
                <div className="col-md-10">
                  <Link
                    to="/signup"
                    className="btn btn-link d-block text-center"
                  >
                    New user? Create account
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
