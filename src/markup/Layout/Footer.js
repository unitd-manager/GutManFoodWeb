import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var bgfoter = require('./../../images/footers.jpg');	


class Footer extends Component{
	
	render(){
		return(
			<footer className="site-footer " style={{backgroundImage: "url(" + bgfoter + ")", backgroundSize: 'cover'}} >
				
				<div className="footer-top bg-line-top">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_getintuch">
									<h5 className="footer-title text-white">Contact Us</h5>
									<ul>
										<li>
											<i className="fa fa-map-marker"></i> 
											<p>Gutman Squad<br/>Plot no 250,17th street<br/>Ashtalakshmi nagar Maduravoyal,<br/> Chennai - 600116</p>
										</li>
										<li>
											<i className="fa fa-phone"></i> 
											<p>0800-123456</p>
										</li>
										<li>
											<i className="fa fa-mobile"></i> 
											<p>(+91) 0800-123456</p>
										</li>
										<li>
											<i className="fa fa-envelope"></i> 
											<p>info@example.com</p>
										</li>
									</ul>
								</div>
							</div>

							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_getintuch">
								
								</div>
							</div>
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_getintuch">
								
								</div>
							</div>
							
							
							<div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
								<div className="widget widget_services border-0">
								   <h4 className="footer-title">Quick Links</h4>
									<ul className="list-2">
										<li><Link to={'/'}>Home</Link></li>
										<li><Link to={'/shop'}>Shop</Link></li>
										<li><Link to={'/'}>Meal Plan</Link></li>
										<li><Link to={'/'}>About Us</Link></li>
										<li><Link to={'/'}>Contact Us</Link></li>
										
									</ul>
								</div>
							</div>
						
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 text-left"> <span>Copyright © 2021 DexignZone. all rights reserved.</span> </div>
							<div className="col-lg-6 col-md-6 text-right"> 
								<div className="widget-link"> 
									<ul>
										<li><Link to={'about-1'}>Disclaimer</Link></li>
										<li><Link to={'faq'}>Privacy Policy</Link></li>
										<li><Link to={'faq'}>Return Policy</Link></li> 
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			
		)
		
	}
}

export default Footer;