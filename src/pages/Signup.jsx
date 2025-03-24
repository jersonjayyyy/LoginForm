import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/authService"; // Fixed import casing issue
import validatePassword from "../utils/validatePassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(""); // Email field remains for other purposes
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const errorMessage = validatePassword(password);
    if (errorMessage) {
      setPasswordError(errorMessage);
      return;
    }

    if (password !== confirmPassword) {
      setError("⚠ Passwords do not match.");
      return;
    }

    setError("");
    setPasswordError("");

    // 🔹 Call AuthService to register the user
    const result = AuthService.signup(username, email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    console.log("Signup successful for:", username);

    
    const loginResult = AuthService.login(username, password);

    if (loginResult.success) {
      console.log("Auto login successful for:", username);
      navigate("/dashboard"); 
    } else {
      setError("Signup successful, but login failed. Please try logging in.");
    }
  };

  return (
    <div className="App signup-page">
      <header className="App-header">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email (Optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            {password.length > 0 && (
              <span 
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            )}
          </div>

          
          <div className="password-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
            {confirmPassword.length > 0 && (
              <span 
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
              </span>
            )}
          </div>

          {passwordError && <p className="error-tooltip">{passwordError}</p>}
          {error && <p className="error-tooltip">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <button onClick={() => navigate("/")}>Login</button>
        </p>
      </header>
    </div>
  );
}

export default Signup;
