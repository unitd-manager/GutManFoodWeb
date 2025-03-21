import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import api from "../../constants/api";

const bgimg1 = require("./../../images/book.jpg");
const bgimg2 = require("./../../images/background/bg5.jpg");

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    phone: "",
    comments: "",
  });
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/enquiry/insertEnquiry", formData);
      if (response.status === 200) {
        setMessage("Your enquiry has been submitted successfully!");
        setFormData({ first_name: "", email: "", phone: "", comments: "" });
      } else {
        setMessage("Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage(error.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/content/getLocationPage");
        const productData = response.data.data.length > 0 ? response.data.data[0] : null;
        const formattedData = productData
          ? { ...productData, images: productData.images ? productData.images.split(",") : [] }
          : null;
        setProducts(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle"
          style={{ backgroundImage: `url(${bgimg1})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Contact</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"./"}>
                      <i className="fa fa-home"></i>
                    </Link>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="section-full content-inner-2 contact-form bg-white"
          style={{ backgroundImage: `url(${bgimg2})`, backgroundSize: "100%" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 d-flex m-md-b30 m-lg-b30">
                <div className="p-a30 border contact-area border-1 align-self-stretch radius-sm bg-white">
                  <h3 className="m-b5">Quick Contact</h3>
                  <p>If you have any questions, use the following contact details.</p>
                  <ul className="no-margin">
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs border-1 text-primary">
                        <Link to={""} className="icon-cell">
                          <i className="ti-location-pin"></i>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">Address:</h6>
                        <p>
                          Gutman Squad
                          <br />
                          Plot no 250, 17th street
                          <br />
                          Ashtalakshmi nagar Maduravoyal,
                          <br />
                          Chennai - 600116
                        </p>
                      </div>
                    </li>
                    <li className="icon-bx-wraper left m-b30">
                      <div className="icon-bx-xs border-1 text-primary">
                        <Link to={""} className="icon-cell">
                          <i className="ti-email"></i>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">Email:</h6>
                        <p>info@gutmanfoods.com</p>
                      </div>
                    </li>
                    <li className="icon-bx-wraper left">
                      <div className="icon-bx-xs border-1 text-primary">
                        <Link to={""} className="icon-cell">
                          <i className="ti-mobile"></i>
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h6 className="text-uppercase m-tb0 dlab-tilte">MOBILE</h6>
                        <p>(+91) 7550009493</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 m-md-b30 m-lg-b30">
                <div className="p-a30 bg-gray clearfix radius-sm contact-form-box">
                  <h3 className="m-b20">Send Message Us</h3>
                  {message && <div className="alert alert-info">{message}</div>}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        name="first_name"
                        type="text"
                        required
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.first_name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="email"
                        type="email"
                        required
                        className="form-control"
                        placeholder="Your Email Id"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        name="phone"
                        type="number"
                        required
                        className="form-control"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="comments"
                        rows="4"
                        className="form-control"
                        required
                        placeholder="Your Message..."
                        value={formData.comments}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btnhover">
                      CONTACT US
                    </button>
                  </form>
                </div>
              </div>

              {products ? (
                <div className="col-xl-4 col-lg-12 d-flex">
                  <b dangerouslySetInnerHTML={{ __html: products.description }} />
                </div>
              ) : (
                <p className="text-center text-white">Loading Map details...</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
