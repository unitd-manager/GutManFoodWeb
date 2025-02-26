import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Form } from "react-bootstrap";
import toast from "react-hot-toast";
import api from "../../constants/api";
import { getUser } from "../../common/user";
import "../../css/pagination.css";

const bnr = require("./../../images/banner/bnr1.jpg");

const Profile = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = getUser();

  const [allCountries, setAllCountries] = useState([]);
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    address1: "",
    address2: "",
    address_city: "",
    address_state: "",
    address_po_code: "",
    address_country_code: "",
  });

  const contactId = user?.contact_id || null; // Use optional chaining

  // Fetch user data if logged in
  useEffect(() => {
    if (!contactId) {
      console.log("User not logged in. Please log in.");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await api.post("/contact/getContactsById", {
          contact_id: contactId,
        });
        if (response.data.msg === "Success") {
          setUserData(response.data.data[0] || {});
        } else {
          console.log("Failed to fetch user data");
        }
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [contactId]);

  // Fetch list of countries
  useEffect(() => {
    api
      .get("/commonApi/getCountry")
      .then((res) => setAllCountries(res.data.data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contactId) {
      console.log("User not logged in. Cannot update data.");
      return;
    }

    try {
      const response = await api.post("/contact/editContactProfile", {
        contact_id: contactId,
        ...userData,
      });

      if (response.data.msg === "Success") {
        toast.success("User details updated successfully!");
        console.log("User details updated successfully!");
      } else {
        toast.success("Failed to update user details");
        console.log("Failed to update user details");
      }
    } catch (error) {
      console.log("Error updating user details:", error);
    }
  };

  // Go back to home page
  const goBackToHome = () => {
    history.push("/");
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: `url(${bnr})` }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Profile</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>MY Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full content-inner">
          <div className="container">
            <form className="shop-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-group col-md-12">
                  <h3>MY Profile</h3>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        style={{
                          background:
                            "linear-gradient(to right, #a01ff0, #ff1f8f)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        placeholder="First Name"
                        value={userData.first_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        style={{
                          background:
                            "linear-gradient(to right, #a01ff0, #ff1f8f)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        placeholder="Last Name"
                        value={userData.last_name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        style={{
                          background:
                            "linear-gradient(to right, #a01ff0, #ff1f8f)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        Address 1
                      </label>
                      <textarea
                        className="form-control"
                        name="address1"
                        placeholder="Address 1"
                        value={userData.address1}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        style={{
                          background:
                            "linear-gradient(to right, #a01ff0, #ff1f8f)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        Address 2
                      </label>
                      <textarea
                        className="form-control"
                        name="address2"
                        placeholder="Address 2"
                        value={userData.address2}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        style={{
                          background:
                            "linear-gradient(to right, #a01ff0, #ff1f8f)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="address_city"
                        placeholder="City"
                        value={userData.address_city}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        style={{
                          background:
                            "linear-gradient(to right, #a01ff0, #ff1f8f)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="address_state"
                        placeholder="State"
                        value={userData.address_state}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        style={{
                          background:
                            "linear-gradient(to right, #a01ff0, #ff1f8f)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        Postal Code
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="address_po_code"
                        placeholder="Postal Code"
                        value={userData.address_po_code}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        style={{
                          background:
                            "linear-gradient(to right, #a01ff0, #ff1f8f)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        style={{
                          background:
                            "linear-gradient(to right, #a01ff0, #ff1f8f)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        Mobile
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="mobile"
                        placeholder="Mobile"
                        value={userData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      {/* <label>
  <span style={{ color: "#a01ff0" }}>C</span>
  <span style={{ color: "#ff1f8f" }}>o</span>
  <span style={{ color: "#1ff09d" }}>u</span>
  <span style={{ color: "#f0a11f" }}>n</span>
  <span style={{ color: "#ff1f8f" }}>t</span>
  <span style={{ color: "#a01ff0" }}>r</span>
  <span style={{ color: "#ff1f8f" }}>Y</span>
</label> */}{" "}
                      <label
                        style={{
                          background:
                            "linear-gradient(to right, #a01ff0, #ff1f8f)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        Country
                      </label>
                      <select
                        className="form-control"
                        onChange={handleChange}
                        name="address_country_code"
                        value={userData.address_country_code}
                      >
                        <option value="">Select Country</option>{" "}
                        {/* Default Option */}
                        {allCountries?.map((country, index) => (
                          <option key={index} value={country.code}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-6">
                  <button
                    className="btn button-lg btnhover btn-block "
                    style={{ background: "linear-gradient(to right, #a01ff0, #ff1f8f)" }}
                    onClick={goBackToHome}
                  >
                    Back To Home
                  </button>
                </div>
                <div className="form-group col-md-6">
                  <button
                    className="btn button-lg btnhover btn-block"
                    style={{ background: "linear-gradient(to right, #a01ff0, #ff1f8f)" }}
                    type="submit"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
