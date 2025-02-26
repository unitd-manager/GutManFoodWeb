import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleMaps from 'simple-react-google-maps';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import api from '../../constants/api';

const bgimg1 = require('./../../images/book.jpg');
const bgimg2 = require('./../../images/background/bg5.jpg');

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            email: '',
            phone: '',
            comments: '',
            message: '',
        };
    }

    // Handle input change
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // Handle form submission
    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/enquiry/insertEnquiry', {
                first_name: this.state.first_name,
                email: this.state.email,
                phone: this.state.phone,
                comments: this.state.comments,
            });

            if (response.status === 200) {
                this.setState({
                    message: 'Your enquiry has been submitted successfully!',
                    first_name: '',
                    email: '',
                    phone: '',
                    comments: '',
                });
            } else {
                this.setState({ message: 'Failed to submit enquiry. Please try again.' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            this.setState({
                message: error.response?.data?.message || 'Something went wrong. Please try again.',
            });
        }
    };

    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: `url(${bgimg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="container">
                            <div className="dlab-bnr-inr-entry">
                                <h1 className="text-white">Contact</h1>
                                <div className="breadcrumb-row">
                                    <ul className="list-inline">
                                        <li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-block">
                        <div className="section-full content-inner-2 contact-form bg-white" style={{ backgroundImage: `url(${bgimg2})`, backgroundSize: '100%' }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6 d-flex m-md-b30 m-lg-b30">
                                        <div className="p-a30 border contact-area border-1 align-self-stretch radius-sm bg-white">
                                            <h3 className="m-b5">Quick Contact</h3>
                                            <p>If you have any questions simply use the following contact details.</p>
                                            <ul className="no-margin">
                                                <li className="icon-bx-wraper left m-b30">
                                                    <div className="icon-bx-xs border-1 text-primary">
                                                        <Link to={''} className="icon-cell"><i className="ti-location-pin"></i></Link>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h6 className="text-uppercase m-tb0 dlab-tilte">Address:</h6>
                                                        <p>Gutman Squad<br/>Plot no 250,17th street<br/>Ashtalakshmi nagar Maduravoyal,<br/> Chennai - 600116</p>
                                                    </div>
                                                </li>
                                                <li className="icon-bx-wraper left m-b30">
                                                    <div className="icon-bx-xs border-1 text-primary">
                                                        <Link to={''} className="icon-cell"><i className="ti-email"></i></Link>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h6 className="text-uppercase m-tb0 dlab-tilte">Email:</h6>
                                                        <p>info@example.com</p>
                                                    </div>
                                                </li>
                                                <li className="icon-bx-wraper left">
                                                    <div className="icon-bx-xs border-1 text-primary">
                                                        <Link to={''} className="icon-cell"><i className="ti-mobile"></i></Link>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h6 className="text-uppercase m-tb0 dlab-tilte">PHONE</h6>
                                                        <p>+61 3 8376 6284</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 m-md-b30 m-lg-b30">
                                        <div className="p-a30 bg-gray clearfix radius-sm contact-form-box">
                                            <h3 className="m-b20">Send Message Us</h3>
                                            <div className="dzFormMsg"></div>
                                            {this.state.message && <div className="alert alert-info">{this.state.message}</div>}
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="row sp15">
                                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <input name="first_name" type="text" required className="form-control" placeholder="Your Name"
                                                                value={this.state.first_name} onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <input name="email" type="email" required className="form-control" placeholder="Your Email Id"
                                                                value={this.state.email} onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                                        <div className="form-group">
                                                            <input name="phone" type="text" required className="form-control" placeholder="Phone Number"
                                                                value={this.state.phone} onChange={this.handleChange} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row sp15">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea name="comments" rows="4" className="form-control" required placeholder="Your Message..."
                                                                value={this.state.comments} onChange={this.handleChange}></textarea>
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
									<div className="col-xl-4 col-lg-12 d-flex">

	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236771.46610709294!2d80.04385949407202!3d13.047807812799862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e1!3m2!1sen!2sin!4v1740556512590!5m2!1sen!2sin" 
	 title="Google Map"
	 width="100%"
	 height="500"
	 style={{ border: 0 }}
	 loading="lazy"
	 allowFullScreen></iframe>
</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default Contact;
