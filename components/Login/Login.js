"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";
import logo from "../../public/images/logo/logo.png";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { login, isAuthenticated } = useAuth();

  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    if (isAuthenticated && pathname === "/login") {
      router.replace("/");
    }
  }, [isAuthenticated, pathname, router]);

  const checkPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    if (password.length >= 12) strength++;
    setPasswordStrength(Math.min(strength, 4));
  };

  const validateForm = () => {
    const newErrors = {};
    if (isRegister && !formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (isRegister && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      checkPasswordStrength(value);
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    const endpoint = isRegister
      ? `${window.location.origin}/api/auth/register`
      : `${window.location.origin}/api/auth/login`;

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(
          isRegister
            ? "Registration successful! Please log in."
            : "Login successful!"
        );

        if (!isRegister) {
          await login(data.token, data.user);
          if (typeof window !== "undefined") {
            window.location.href = "/";
          }
          router.replace("/");
        } else {
          setFormData({
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "student",
          });
          setTimeout(() => setIsRegister(false), 1000);
        }
      } else {
        toast.error(data.message || "Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <header style={{ position: "absolute", top: "10px", left: "10px" }}>
        <div
          className="logo"
          style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))" }}
        >
          <Link href="/">
            <Image src={logo} width={65} height={50} alt="Swatrixsoft" />
          </Link>
        </div>
      </header>

      <ToastContainer />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <div
          className="col-lg-6"
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "2rem",
            boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
          }}
        >
          <div className="text-center mt-4">
            <h1
              className="typing-text"
              style={{ color: "#333", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
            >
              Swatrixsoft
            </h1>
          </div>

          <div
            className="rbt-contact-form contact-form-style-1 max-width-auto"
            style={{ padding: "1rem" }}
          >
            <h3
              className="title text-center mb-4"
              style={{ color: "#333" }}
            >
              {isRegister ? "Register" : "Login"}
            </h3>

            <form
              className="max-width-auto"
              onSubmit={handleSubmit}
              noValidate
            >
              {isRegister && (
                <div className="form-group">
                  <input
                    name="username"
                    type="text"
                    placeholder="Username *"
                    onChange={handleChange}
                    value={formData.username}
                    aria-label="Username"
                    aria-invalid={!!errors.username}
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                  />
                  {errors.username && (
                    <span className="error-message text-danger">
                      {errors.username}
                    </span>
                  )}
                </div>
              )}

              <div className="form-group">
                <input
                  name="email"
                  type="email"
                  placeholder="Email address *"
                  onChange={handleChange}
                  value={formData.email}
                  aria-label="Email"
                  aria-invalid={!!errors.email}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                />
                {errors.email && (
                  <span className="error-message text-danger">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group position-relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password *"
                  onChange={handleChange}
                  value={formData.password}
                  aria-label="Password"
                  aria-invalid={!!errors.password}
                  required
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                  }}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
                {errors.password && (
                  <span className="error-message text-danger">
                    {errors.password}
                  </span>
                )}
                {isRegister && (
                  <div className="password-strength-meter mt-2">
                    <div
                      className="strength-bars"
                      style={{ display: "flex", gap: "5px" }}
                    >
                      {[...Array(4)].map((_, index) => (
                        <div
                          key={index}
                          style={{
                            height: "5px",
                            flex: 1,
                            background:
                              index < passwordStrength ? "#4CAF50" : "#ddd",
                          }}
                        />
                      ))}
                    </div>
                    <small className="text-muted">
                      {["Very Weak", "Weak", "Medium", "Strong", "Very Strong"][
                        passwordStrength
                      ]}
                    </small>
                  </div>
                )}
              </div>

              {isRegister && (
                <div className="form-group position-relative">
                  <input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password *"
                    onChange={handleChange}
                    value={formData.confirmPassword}
                    aria-label="Confirm password"
                    aria-invalid={!!errors.confirmPassword}
                    required
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle confirm password visibility"
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                  {errors.confirmPassword && (
                    <span className="error-message text-danger">
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>
              )}

              {isRegister && (
                <div className="form-group">
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    aria-label="Select role"
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginBottom: "10px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                    }}
                  >
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="user">User</option>
                  </select>
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
                        ? "Loading..."
                        : isRegister
                        ? "Register"
                        : "Log In"}
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </button>
              </div>
            </form>

            {/* Google Login Button */}
            {/* <div className="text-center mt-3">
              <button
                type="button"
                onClick={() =>
                  signIn("google", { callbackUrl: "/" })
                }
                className="rbt-btn btn-md btn-border hover-icon-reverse w-100 mt-2"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">
                    <Image
                      src="/images/googleimage.png"
                      alt="Google"
                      width={20}
                      height={20}
                      style={{ marginRight: "8px" }}
                    />
                    Continue with Google
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div> */}

            <div className="text-center mt-4">
              {isRegister ? (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsRegister(false)}
                    className="rbt-btn-link bg-transparent border-0 text-primary"
                  >
                    Login
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setIsRegister(true)}
                    className="rbt-btn-link bg-transparent border-0 text-primary"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
