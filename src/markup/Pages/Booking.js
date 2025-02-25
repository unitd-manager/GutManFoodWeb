import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import api from '../../constants/api';

var img1 = require('./../../images/banner/bnr1.jpg'); 
var img2 = require('./../../images/background/bg5.jpg'); 

const Booking = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        email: '',
        phone: '',
        comments: '',
    });

    const [message, setMessage] = useState('');

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
	
		try {
			const response = await api.post('/enquiry/insertEnquiry', formData);
	
			if (response.status === 200) {
				setMessage('Your enquiry has been submitted successfully!');
				setFormData({ first_name: '', email: '', phone: '', comments: '' });
			} else {
				setMessage('Failed to submit enquiry. Please try again.');
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			setMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
		}
	};
	

    return (
        <>
       
            <div className="page-content bg-white">
                <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + img1 + ")" }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">For Booking</h1>
                            <div className="breadcrumb-row">
                                {/* <ul className="list-inline">
                                    <li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
                                    <li>Booking</li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-full content-inner" style={{ backgroundImage: "url(" + img2 + ")", backgroundSize: "100%" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 m-b30">
                                <div className="appointment-form">
                                    <div className="section-head m-b30">
                                        <h2 className="main-title">Contact Us</h2>
                                        <p>Have questions or need assistance? We're here to help!
                                        Contact us today, and let’s take the next step toward better health together.</p>
                                    </div>
                                    {message && <div className="alert alert-info">{message}</div>}
                                    <form onSubmit={handleSubmit}>
                                        <div className="row sp15">
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="first_name" type="text" required className="form-control" placeholder="Your Name" value={formData.first_name} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="email" type="email" className="form-control" required placeholder="Your Email Id" value={formData.email} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <input name="phone" type="text" required className="form-control" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row sp15">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <textarea name="comments" rows="4" className="form-control" required placeholder="Your Message..." value={formData.comments} onChange={handleChange}></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row sp15">
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btnhover">CONTACT US</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6 m-b30">
                                <img src={require('./../../images/about/pic7.jpg')} alt="" className="img-cover radius-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;
