import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import "../App.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = authService.login(username, password);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="login-container">
      
      <div className="login-image-container">
        <div className="website-name-overlay">
          <h1 className="website-name">Daily Grind Cafe</h1>
          <p className="website-tagline">Your cozy digital coffee corner</p>
        </div>
      </div>
      
      
      <div className="login-form-container">
        <h1 className="login-heading">Member Login</h1>
        <p className="login-slogan">Where every login brews possibility</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input
              type="text"
              className="form-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>

        <div className="login-options">
          <span>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </span>
          <span className="register-option">
            Don't have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/signup");
              }}
              className="register-link"
            >
              Register Here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;