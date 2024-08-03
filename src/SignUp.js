import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
    age: "",
    birthDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: "Error!",
        text: "Passwords do not match!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_gxttg91",
        "template_h9y56sa",
        e.target,
        "alPJnN_C_8tZvVFPe"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Success!",
            text: "Sign up successful!",
            icon: "success",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "Error!",
            text: "An error occurred, please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      );

    e.target.reset();
  };

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-light">
            <div className="card-header bg-danger text-white text-center py-2">
              <h4 className="mb-0">Sign Up</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label htmlFor="email" className="form-label fw-bold">
                      Email
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
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
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="confirmPassword"
                      className="form-label fw-bold"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label
                      htmlFor="mobileNumber"
                      className="form-label fw-bold"
                    >
                      Mobile Number
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="tel"
                      className="form-control"
                      id="mobileNumber"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-4">
                        <label htmlFor="age" className="form-label fw-bold">
                          Age
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="number"
                          className="form-control"
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row">
                      <div className="col-md-4">
                        <label
                          htmlFor="birthDate"
                          className="form-label fw-bold"
                        >
                          Birth Date
                        </label>
                      </div>
                      <div className="col-md-8">
                        <input
                          type="date"
                          className="form-control"
                          id="birthDate"
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-success mb-2">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
