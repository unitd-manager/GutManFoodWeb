import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../constants/api";

const ForgotPassword = ({ location }) => {
  const { pathname } = location;
  const history = useHistory();
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    api
      .post("api/forgot", { email })
      .then(() => {
        alert("Reset link sent successfully");
      })
      .catch(() => {
        alert("Error sending reset link");
      });
  };

  return (
    <Fragment>
        <div className="page-content bg-white">
      <div className="section-full content-inner shop-account">
      <div className="container">
      <div className="dlab-bnr-inr-entry">
                                <div className="p-a30 border-1 radius-sm">
                                    <div className="tab-content tab-form nav">
             <form className="tab-pane active col-12 p-a0">
                                                                <h3 className="m-b5">Forgot Password</h3>
                                                                <p>If you know password, please log in.</p>
                                                              
                                                                <div className="form-group">
                                                                    <label>E-MAIL </label>
                                                                    <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  marginBottom: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                }}
                required
              />
                                                                </div>
                                                               
                                                                <div className="text-left">
                                                                    
                                                                    <button
                type="submit"
               className="btn btnhover m-r5"
              onClick={()=>handleSubmit()}
              >
                Send Reset Link
              </button>
                                                                </div>
                                                            </form>
          </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </Fragment>
  );
};

ForgotPassword.propTypes = {
  location: PropTypes.object,
};

export default ForgotPassword;
