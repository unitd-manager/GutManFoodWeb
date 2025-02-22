import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../constants/api";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const MailVerification = ({ location }) => {
  const history = useHistory();
  const [status, setStatus] = useState({ success: false, error: false });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token")?.replaceAll('"', "") || "";
    if (token) {
      api
        .post("commonApi/resetVerification", { resetToken: token })
        .then(() => setStatus({ success: true, error: false }))
        .catch((err) => {
          console.error("Verification Error:", err);
          setStatus({ success: false, error: true });
        });
    } else {
      setStatus({ success: false, error: true });
    }
  }, [location.search]);

  // Outer container style (centered)
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
  };

  // Choose background style based on status
  const backgroundClass = status.error
    ? "bg-gradient-to-r from-red-500 to-pink-600"
    : "bg-gray-100";

  return (
    <div className={`${backgroundClass}`} style={containerStyle}>
      {status.success ? (
        <div
          className="bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <div className="mb-4">
            <AiOutlineCheckCircle size={80} style={{ color: "#10B981" }} />
          </div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#1F2937" }}>
            Verification Successful!
          </h1>
          <p className="mb-6" style={{ color: "#4B5563", fontSize: "16px" }}>
            Your account has been verified successfully. You can now log in.
          </p>
          <button
            onClick={() => history.push("/shop-login")}
            style={{
              padding: "12px 24px",
              backgroundColor: "#10B981",
              color: "white",
              fontWeight: "600",
              border: "none",
              borderRadius: "9999px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#059669")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#10B981")}
          >
            Go to Login
          </button>
        </div>
      ) : status.error ? (
        <div className="relative overflow-hidden" style={{ maxWidth: "400px", width: "100%" }}>
          {/* Decorative overlay */}
          <div className="absolute inset-0 bg-black opacity-10 animate-pulse"></div>
          <div
            className="bg-white z-10 shadow-2xl rounded-2xl p-10 md:p-14 text-center border border-red-200"
          >
            <div className="flex justify-center">
              <div className="rounded-full bg-red-100 p-4">
                <AiOutlineCloseCircle
                  size={80}
                  className="text-red-600 animate-bounce"
                />
              </div>
            </div>
            <h4 className="text-3xl font-bold mb-2" style={{ color: "#1F2937" }}>
              Verification Failed!
            </h4>
            <p className="mb-6" style={{ color: "#4B5563", fontSize: "16px" }}>
              Oops! Something went wrong while verifying your account.
            </p>
            <button
              onClick={() => history.push("/shop-login")}
              style={{
                padding: "12px 24px",
                backgroundColor: "red",
                color: "white",
                fontWeight: "600",
                border: "none",
                borderRadius: "9999px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

MailVerification.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MailVerification;
