"use client"; // Required because we use state, events, and react-toastify (client-side only)

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // For redirection
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../public/images/logo/logo.png";
import Image from "next/image";
import CountAPI from "countapi-js"; // Import the npm package

const Login = () => {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false); // Toggle between Login and Register
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user", // Default role
  });
  const [loading, setLoading] = useState(false);
  const [visitCount, setVisitCount] = useState(null);

  // Fetch the visitor count when the component mounts
  useEffect(() => {
    // Call your own API route, which in turn calls CountAPI from the server
    fetch("/api/visitor")
      .then((res) => res.json())
      .then((data) => setVisitCount(data.count))
      .catch((err) => console.error("Error fetching visitor count:", err));
  }, []);
  
  

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation for registration
    if (isRegister && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    const endpoint = isRegister ? "/api/auth/register" : "/api/auth/login";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        if (isRegister) {
          // Registration success
          toast.success("Registration Successful!");
          // Reset form
          setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "user", // Reset role to default
          });
          // Switch back to login mode after a short delay
          setTimeout(() => {
            setIsRegister(false);
          }, 1500);
        } else {
          // Login success
          toast.success("Login Successful!");
          // Store token if needed
          if (data.token) {
            localStorage.setItem("token", data.token);
          }
          // Redirect to /course-filter-one-toggle
          setTimeout(() => {
            router.push("/course-filter-one-toggle");
          }, 1500);
        }
      } else {
        toast.error(data.message || "An error occurred!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* Header with logo on top left */}
      <header style={{ position: "absolute", top: "10px", left: "10px" }}>
        <div className="logo">
          <Link href="/">
            <Image src={logo} width={65} height={50} alt="Swatrixsoft" />
          </Link>
        </div>
      </header>

      {/* Toast Container for notifications */}
      <ToastContainer />

      {/* Flex container to center the form */}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-lg-6">
          {/* Company name with typewriter animation */}
          <div className="text-center mt-4">
            <h1 className="typing-text">Swatrixsoft</h1>
            <style jsx>{`
              .typing-text {
                display: inline-block;
                font-family: "Courier New", Courier, monospace;
                font-size: 3rem;
                font-weight: bold;
                background: linear-gradient(
                  45deg,
                  #ff5733,
                  #ffbd33,
                  #33ff57,
                  #3357ff,
                  #8d33ff
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                white-space: nowrap;
                overflow: hidden;
                border-right: 4px solid #ff9800;
                width: 12ch; /* Matches character length to stop cursor properly */
                animation: typing 3s steps(12, end),
                  blink-caret 0.75s step-end infinite;
                text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
              }

              @keyframes typing {
                from {
                  width: 0;
                }
                to {
                  width: 12ch; /* Stops at the right position */
                }
              }

              @keyframes blink-caret {
                from,
                to {
                  border-color: transparent;
                }
                50% {
                  border-color: #ff9800;
                }
              }
            `}</style>
          </div>

          <div className="rbt-contact-form contact-form-style-1 max-width-auto">
            <h3 className="title text-center mb-4">
              {isRegister ? "Register" : "Login"}
            </h3>

            <form className="max-width-auto" onSubmit={handleSubmit}>
              {isRegister && (
                <div className="form-group">
                  <input
                    name="username"
                    type="text"
                    placeholder="Username *"
                    onChange={handleChange}
                    value={formData.username}
                    required
                  />
                  <span className="focus-border"></span>
                </div>
              )}

              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  placeholder="Email address *"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
                <span className="focus-border"></span>
              </div>

              <div className="form-group">
                <input
                  name="password"
                  type="password"
                  placeholder="Password *"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
                <span className="focus-border"></span>
              </div>

              {isRegister && (
                <div className="form-group">
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password *"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    required
                  />
                  <span className="focus-border"></span>
                </div>
              )}

              {isRegister && (
                <div className="form-group">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="user">User</option>
                  </select>
                  <span className="focus-border"></span>
                </div>
              )}

              <div className="form-submit-group mt-4">
                <button
                  type="submit"
                  className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                  disabled={loading}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">
                      {loading
                        ? "Please wait..."
                        : isRegister
                        ? "Register"
                        : "Log In"}
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </button>
              </div>
            </form>

            {/* Toggle between Login & Register */}
            <div className="text-center mt-4">
              {isRegister ? (
                <>
                  Already have an account?{" "}
                  <Link
                    href="#"
                    className="rbt-btn-link"
                    onClick={() => setIsRegister(false)}
                  >
                    Login
                  </Link>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <Link
                    href="#"
                    className="rbt-btn-link"
                    onClick={() => setIsRegister(true)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Visitor Counter displayed at bottom right */}
      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          padding: "8px 12px",
          borderRadius: "4px",
          fontSize: "0.9rem",
        }}
      >
        {visitCount === null ? "Loading visitors..." : `Visitors: ${visitCount}`}
      </div>
    </div>
  );
};

export default Login;
