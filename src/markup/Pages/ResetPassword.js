import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../constants/api";

const ResetPassword = ({ location }) => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [token, setToken] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const query = urlParams.get("token");
    const tokenValue = query ? query.slice(0, -1) : "";
    setToken(tokenValue);
  }, [location.search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      api
        .post("api/reset", { newPassword: password, resetToken: token })
        .then(() => {
          alert("Password has been changed successfully");
          setTimeout(() => history.push("/"), 200);
        })
        .catch((err) => {
          console.error("Reset Password Error:", err);
          alert("Error resetting password");
        });
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#f3f4f6", // light gray background
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "2rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        {/* Icon Section */}
        <div style={{ marginBottom: "1.5rem" }}>
          <i
            className="fa fa-lock"
            style={{ fontSize: "3rem", color: "#8B5CF6" }}
          ></i>
        </div>
        <h2 style={{ marginBottom: "1rem", color: "#1F2937" }}>
          Reset Password
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
            required
          />
          {!passwordMatch && (
            <p style={{ color: "red", marginBottom: "1rem" }}>
              Passwords do not match.
            </p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "#8B5CF6",
              color: "#fff",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#7C3AED")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#8B5CF6")
            }
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

ResetPassword.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ResetPassword;
