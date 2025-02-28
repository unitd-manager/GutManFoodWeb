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
											<p>Maduravayil , Chennai</p>
										</li>
										{/* <li>
											<i className="fa fa-phone"></i> 
											<p>0800-123456</p>
										</li> */}
										<li>
											<i className="fa fa-mobile"></i> 
											<p>(+91) 7550009493</p>
										</li>
										<li>
											<i className="fa fa-envelope"></i> 
											<p>info@gutmanfoods.com</p>
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
										<li><Link to={'/blog-grid-2-sidebar'}>Blog</Link></li>
										<li><Link to={'/shop'}>Shop</Link></li>
										<li><Link to={'/Meal-Plan'}>Meal Plan</Link></li>
										<li><Link to={'/About-Us'}>About Us</Link></li>
										<li><Link to={'/Contact-Us'}>Contact Us</Link></li>
										
									</ul>
								</div>
							</div>
						
						</div>
					</div>
				</div>
				
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 text-left"> <span>Copyright © {new Date().getFullYear()} GutMan Foods. all rights reserved.</span> </div>
							<div className="col-lg-6 col-md-6 text-right"> 
								<div className="widget-link"> 
									<ul>
										<li><Link to={'/'}>Disclaimer</Link></li>
										<li><Link to={'/'}>Privacy Policy</Link></li>
										<li><Link to={'/'}>Return Policy</Link></li> 
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