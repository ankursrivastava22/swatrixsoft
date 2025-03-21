"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../public/images/logo/logo.png";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const pathname = usePathname();  // Add this line
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
    // Check if there's a token in localStorage
    const token = localStorage.getItem('token');
    if (!token && pathname !== '/login') {
      router.replace('/login');
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/');
    }
  }, [isAuthenticated, router]);

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
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'password') {
      checkPasswordStrength(value);
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    setLoading(true);
    const endpoint = isRegister ? "/api/auth/register" : "/api/auth/login";
  
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
          "Accept": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
  
      if (res.ok) {
        toast.success(isRegister ? "Registration successful! Please log in." : "Login successful!");
        
        if (!isRegister) {
          await login(data.token, data.user);
          // Force a page reload and redirect
          window.location.href = '/';
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

  // Rest of your JSX with updated form fields to include error messages and password visibility toggles
  return (
    <div className="container">
      <header style={{ position: "absolute", top: "10px", left: "10px" }}>
        <div className="logo">
          <Link href="/">
            <Image src={logo} width={65} height={50} alt="Swatrixsoft" />
        </Link>
        </div>
      </header>

      <ToastContainer />

      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-lg-6">
          <div className="text-center mt-4">
            <h1 className="typing-text">Swatrixsoft</h1>
            {/* Your existing CSS styles here */}
          </div>

          <div className="rbt-contact-form contact-form-style-1 max-width-auto">
            <h3 className="title text-center mb-4">
              {isRegister ? "Register" : "Login"}
            </h3>

            <form className="max-width-auto" onSubmit={handleSubmit} noValidate>
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
                  />
                  {errors.username && (
                    <span className="error-message text-danger">{errors.username}</span>
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
                />
                {errors.email && (
                  <span className="error-message text-danger">{errors.email}</span>
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
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
                {errors.password && (
                  <span className="error-message text-danger">{errors.password}</span>
                )}
                {isRegister && (
                  <div className="password-strength-meter mt-2">
                    <div className="strength-bars" style={{ display: 'flex', gap: '5px' }}>
                      {[...Array(4)].map((_, index) => (
                        <div
                          key={index}
                          style={{
                            height: '5px',
                            flex: 1,
                            background: index < passwordStrength ? '#4CAF50' : '#ddd'
                          }}
                        />
                      ))}
                    </div>
                    <small className="text-muted">
                      {passwordStrength === 0 && "Very Weak"}
                      {passwordStrength === 1 && "Weak"}
                      {passwordStrength === 2 && "Medium"}
                      {passwordStrength === 3 && "Strong"}
                      {passwordStrength === 4 && "Very Strong"}
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
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle confirm password visibility"
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                  {errors.confirmPassword && (
                    <span className="error-message text-danger">{errors.confirmPassword}</span>
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
                      {loading ? (
                        <div className="spinner-border spinner-border-sm me-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        isRegister ? "Register" : "Log In"
                      )}
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              {isRegister ? (
                <>
                  Already have an account?{" "}
                  <Link href="#" className="rbt-btn-link" onClick={() => setIsRegister(false)}>
                    Login
                  </Link>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <Link href="#" className="rbt-btn-link" onClick={() => setIsRegister(true)}>
                    Register
                  </Link>
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