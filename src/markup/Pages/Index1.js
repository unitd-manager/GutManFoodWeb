// import React, { useState, useEffect } from 'react';
// import Header from './../Layout/Header';
// import Footer from './../Layout/Footer';
// import {Link} from 'react-router-dom';
// import CountUp from 'react-countup';
// import OurPartners from './../Element/OurPartners';
// import Slider from './../Element/Slider';
// import Accord from './../Element/Accord';

// const Index1 = () => {
//   const [backgroundImages, setBackgroundImages] = useState({});
//   const [serviceBoxes, setServiceBoxes] = useState([]);
//   const [offerings, setOfferings] = useState([]);
//   const [stats, setStats] = useState([]);
//   const [portfolio, setPortfolio] = useState([]);
//   const [blogNews, setBlogNews] = useState([]);

//   useEffect(() => {
//     // Fetch background images
//     fetch('/api/background-images')
//       .then(res => res.json())
//       .then(data => setBackgroundImages(data));

//     // Fetch service boxes data  
//     fetch('/api/service-boxes')
//       .then(res => res.json())
//       .then(data => setServiceBoxes(data));

//     // Fetch offerings data
//     fetch('/api/offerings')
//       .then(res => res.json()) 
//       .then(data => setOfferings(data));

//     // Fetch stats data
//     fetch('/api/stats')
//       .then(res => res.json())
//       .then(data => setStats(data));

//     // Fetch portfolio data
//     fetch('/api/portfolio')
//       .then(res => res.json())
//       .then(data => setPortfolio(data));

//     // Fetch blog news
//     fetch('/api/blog-news')
//       .then(res => res.json())
//       .then(data => setBlogNews(data));
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="page-content bg-white">
//         <div className="content-block">
//           <Slider />
          
//           <div className="section-full content-inner-3" style={{backgroundImage: `url(${backgroundImages.img1})`, backgroundSize:"100%"}}>
//             <div className="container">
//               <div className="row service-area1">
//                 {serviceBoxes.map((box, index) => (
//                   <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6" key={index}>
//                     <div className="icon-bx-wraper text-center service-box1" style={{backgroundImage: `url(${box.image})`}}>
//                       <div className="icon-content">
//                         <h2 className="dlab-tilte text-white">{box.title}</h2>
//                         <p>{box.description}</p>
//                         <div className="dlab-separator style1 bg-primary"></div>
//                         <Link to={box.link} className="btn btnhover">More details <i className="fa fa-angle-double-right m-l5"></i></Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="section-full content-inner service-area2 bg-img-fix bg-line-top bg-line-bottom" style={{backgroundImage: `url(${backgroundImages.img4})`, backgroundSize: "cover"}}>
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-4 m-b30">
//                   <img src={offerings.mainImage} className="img-cover radius-sm" alt="" />
//                 </div>
//                 <div className="col-lg-8">
//                   <div className="row p-l30">
//                     {offerings.items?.map((item, index) => (
//                       <div className="col-lg-6 col-sm-6 m-b30" key={index}>
//                         <div className="icon-bx-wraper text-white service-box2">
//                           <div className="icon-bx">
//                             <Link to={item.link} className="icon-cell"><img src={item.icon} alt="" /></Link>
//                           </div>
//                           <div className="icon-content">
//                             <h5 className="dlab-tilte">{item.title}</h5>
//                             <p>{item.description}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="section-full bg-white">
//             <div className="container-fluid">
//               <div className="row">
//                 {portfolio.map((item, index) => (
//                   <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
//                     <div className="port-box1 text-white">
//                       <div className="dlab-media">
//                         <img src={item.image} alt="" />
//                       </div>
//                       <div className="dlab-info">
//                         <h2 className="title">{item.title}</h2>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="section-full bg-white" style={{backgroundImage: `url(${backgroundImages.img3})`, backgroundSize:"100%"}}>
//             <div className="container content-inner">
//               <div className="row">
//                 {stats.map((stat, index) => (
//                   <div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30" key={index}>
//                     <div className="counter-style-1 text-center">
//                       <div className="counter-num text-primary">
//                         <span className="counter"><CountUp end={stat.value} /></span>
//                         {stat.suffix && <small>{stat.suffix}</small>}
//                       </div>
//                       <span className="counter-text">{stat.label}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="container content-inner">
//               <div className="row">
//                 {blogNews.map((item, index) => (
//                   <div className="col-lg-4 col-md-6" key={index}>
//                     <div className="blog-post blog-grid blog-rounded">
//                       <div className="dlab-post-media dlab-img-effect"> 
//                         <Link to={'/blog-single-sidebar'}><img src={item.image} alt="" /></Link> 
//                       </div>
//                       <div className="dlab-info p-a25">
//                         <div className="dlab-post-title">
//                           <h4 className="post-title"><Link to={'/blog-single-sidebar'}>{item.title}</Link></h4>
//                         </div>
//                         <div className="dlab-post-meta">
//                           <ul>
//                             <li className="post-folder">
//                               <i className="fa fa-folder-open-o"></i>
//                               {item.categories?.map((cat, i) => (
//                                 <Link to={''} key={i}>{cat}</Link>
//                               ))}
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Index1;

import React, {Component} from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {Link} from 'react-router-dom';
import CountUp from 'react-countup';

import OurPartners from './../Element/OurPartners';
import Slider from './../Element/Slider';
import Category from './../Element/Category';
import Booking from './../Pages/Booking';
import Blog from './../Pages/blog';
import Offer from './../Pages/Offer';
import Limited from './../Pages/Limited';
import BestSeller from './../Element/BestSeller';
// import Accord from './../Element/Accord';
import DummyInstagramFeed from '../Element/DummyInstaFeed';
	
//Images	
var img1 = require('./../../images/background/bg5.jpg');

var img2 = require('./../../images/background/bg1.jpg');
var img3 = require('./../../images/background/bg5.jpg');
var img4 = require('./../../images/offer.jpg');
var img6 = require('./../../images/banner/bnr1.jpg'); 
var img7 = require('./../../images/background/bg5.jpg'); 




class Index1 extends Component{
	render(){
		return(
			<>
				<Header />
			
				<div className="page-content bg-white">
					<div className="content-block">
						<Slider />
					<Category />			
					<Offer />
					
						<div className="section-full content-inner-3"></div>
					<BestSeller />
						<div className="section-full bg-white" style={{backgroundImage:"url(" + img3 + ")", backgroundSize:"100%" }}>
							<div className="container content-inner">
								<div className="row">
									{/* <div className="col-lg-12">
										<div className="section-head text-center">
											<div className="icon-bx icon-bx-xl">
												<img src={require('./../../images/cake1.jpg')} alt="" />
											</div>
											<h3>We Are Professional at Our Skills</h3>
											<p>More than 2000+ customers trusted us</p>
										</div>
									</div> */}
								</div>
								{/* <div className="row">
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={53} /></span>
												<small>+</small>
											</div>
											<span className="counter-text">Years of Experience</span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={102} /></span>
											</div>
											<span className="counter-text">Awards Wins</span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={36} /></span>
												<small>k</small>
											</div>
											<span className="counter-text">Happy Clients</span>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
										<div className="counter-style-1 text-center">
											<div className="counter-num text-primary">
												<span className="counter"><CountUp end={99} /></span>
											</div>
											<span className="counter-text">Perfect Products</span>
										</div>
									</div>
								</div> */}
							</div>
						<Limited />
							<div className="section-full content-inner"></div>
						<Booking />

							{/* <div className="container">
								<div className="row client-area1 p-t80">
									<OurPartners  />
								</div>
							</div> */}
							<DummyInstagramFeed/>
							<div className="section-full"></div>
						<Blog/>
						</div>
					</div>		
				</div>
				<Footer />
			</>	
		)
	}
} 

export default Index1;