// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import Header from './../Layout/Header';
// import Footer from './../Layout/Footer';
// import OurPartners from './../Element/OurPartners';
// import CountUp from 'react-countup';

// var img1 = require('./../../images/banner/bnr1.jpg');
// var img2 = require('./../../images/background/bg1.jpg');
// var img3 = require('./../../images/background/bg5.jpg');
// var img4 = require('./../../images/background/bg3.jpg');

// const teamInfo = [
// 	{
// 		image: require('./../../images/our-team/member1.jpg'),
// 		name :	'Nashid Martines',
// 		post : 	'Founder',
// 	},
// 	{
// 		image: require('./../../images/our-team/member2.jpg'),
// 		name :	'Konne Backfiled',
// 		post : 	'Sous Chef',
// 	},
// 	{
// 		image: require('./../../images/our-team/member3.jpg'),
// 		name :	'Valentino Morose',
// 		post : 	'Ceo & Founder',
// 	},
// 	{
// 		image: require('./../../images/our-team/member4.jpg'),
// 		name :	'Hackson Willingham',
// 		post : 	'Master Chef',
// 	},
// ]

// class About extends Component{

// 	render(){
// 		return(
// 			<>
// 			<Header />

// 			<div className="page-content bg-white">

// 				<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")"}}>
// 					<div className="container">
// 						<div className="dlab-bnr-inr-entry">
// 							<h1 className="text-white">About Us</h1>

// 							<div className="breadcrumb-row">
// 								<ul className="list-inline">
// 									<li><Link to={'/'}><i className="fa fa-home"></i></Link></li>
// 									<li>About Us</li>
// 								</ul>
// 							</div>

// 						</div>
// 					</div>
// 				</div>

// 				<div className="content-block">

// 					<div className="section-full bg-white content-inner" style={{backgroundImage:"url(" + img3 + ")", backgroundSize:"100%" }}>
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-lg-12">
// 									<div className="section-head text-center">
// 										<div className="icon-bx icon-bx-xl">
// 											<img src={require('./../../images/cake1.jpg')} alt="" />
// 										</div>
// 										<h3>About Our Restaurant King</h3>
// 										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="row sp30">
// 								<div className="col-lg-6 col-md-6 m-b30">
// 									<div className="about-thumb">
// 										<img src={require('./../../images/about/pic5.jpg')} alt="" />
// 									</div>
// 								</div>
// 								<div className="col-lg-6 col-md-6 m-b30">
// 									<div className="about-thumb">
// 										<img src={require('./../../images/about/pic6.jpg')} alt="" />
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="section-full content-inner bg-line-top bg-line-bottom" style={{backgroundImage: "url(" + img4 + " )"}}>
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-lg-12">
// 									<div className="section-head text-center text-white">
// 										<h3 className="text-white">We Are Professional at Our Skills</h3>
// 										<p>More than 2000+ customers trusted us</p>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="row max-w900 m-auto">
// 								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
// 									<div className="counter-style-1 text-white text-center">
// 										<div className="counter-num">
// 											<span className="counter"><CountUp end={53} /></span>
// 											<small>+</small>
// 										</div>
// 										<span className="counter-text">Years of Experience</span>
// 									</div>
// 								</div>
// 								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
// 									<div className="counter-style-1 text-white text-center">
// 										<div className="counter-num">
// 											<span className="counter"><CountUp end={102} /></span>
// 										</div>
// 										<span className="counter-text">Awards Wins</span>
// 									</div>
// 								</div>
// 								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
// 									<div className="counter-style-1 text-white text-center">
// 										<div className="counter-num">
// 											<span className="counter"><CountUp end={36} /></span>
// 											<small>k</small>
// 										</div>
// 										<span className="counter-text">Happy Clients</span>
// 									</div>
// 								</div>
// 								<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30">
// 									<div className="counter-style-1 text-white text-center">
// 										<div className="counter-num">
// 											<span className="counter"><CountUp end={99} /></span>

// 										</div>
// 										<span className="counter-text">Perfect Products</span>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>

// 					<div className="section-full content-inner-1 bg-white"  style={{backgroundImage:"url(" + img2 + ")" }}>
// 						<div className="container">
// 							<div className="row">
// 								<div className="col-lg-12">
// 									<div className="section-head text-center">
// 										<h3>Our Expert Chefs</h3>
// 										<p>Meet our professional team meambers</p>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="row">
// 								{teamInfo.map((item,index) =>(

// 								<div className="col-lg-3 col-md-6 col-sm-6 m-b30">
// 									<div className="dlab-team1" key={index}>
// 										<div className="thumb" >
// 											<img src={item.image} alt="" />
// 											<ul className="social-link">
// 												<li><Link to = {''}><i className="fa fa-facebook"></i></Link></li>
// 												<li><Link to = {''}><i className="fa fa-twitter"></i></Link></li>
// 											</ul>
// 										</div>
// 										<div className="team-info text-center">
// 											<h4 className="name">{item.name}</h4>
// 											<p className="position">{item.post}</p>
// 										</div>
// 									</div>
// 								</div>
// 								))}

// 							</div>
// 						</div>

// 						<div className="p-tb50">
// 							<div className="container">
// 								<div class="row">
// 									<div class="col-lg-12">
// 										<div class="section-head text-center">
// 											<h3>Our PARTNERS</h3>
// 											<p>famous companies trusted us, why you are not</p>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 							<OurPartners />
// 						</div>
// 					</div>

// 				</div>

// 			</div>

// 			<Footer />
// 			</>
// 		)
// 	}
// }

// export default About;

import React from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import OurPartners from "./../Element/OurPartners";
import CountUp from "react-countup";

const img1 = require("./../../images/AboutBanner.jpg");
const img2 = require("./../../images/background/bg1.jpg");
const img3 = require("./../../images/background/bg5.jpg");
const img4 = require("./../../images/background/bg3.jpg");

const teamInfo = [
  {
    image: require("./../../images/our-team/member1.jpg"),
    name: "Nashid Martines",
    post: "Founder",
  },
  {
    image: require("./../../images/our-team/member2.jpg"),
    name: "Konne Backfiled",
    post: "Sous Chef",
  },
  {
    image: require("./../../images/our-team/member3.jpg"),
    name: "Valentino Morose",
    post: "Ceo & Founder",
  },
  {
    image: require("./../../images/our-team/member4.jpg"),
    name: "Hackson Willingham",
    post: "Master Chef",
  },
];

const alignStyle = { textAlign: "center" };

const About = () => {
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">About Us</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"/"}>
                      <i className="fa fa-home"></i>
                    </Link>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div
            className="section-full bg-white content-inner"
            style={{ backgroundImage: `url(${img3})`, backgroundSize: "100%" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-head text-center">
                    <div className="icon-bx icon-bx-xl">
                      <img src={require('./../../images/balanced.png')} alt="" />
                    </div>
                    <h3>About Gutman Foods</h3>
                    <p>Nourishing Your Health, One Bite at a Time</p>
                    <p style={alignStyle}>
                      At Gutman foods , we’re on a mission to redefine healthy
                      eating. Whether you're on a keto journey, managing
                      diabetes, focusing on weight loss, or simply embracing a
                      healthier lifestyle, we offer a carefully crafted
                      selection of nutritious snacks, guilt-free pastries, and
                      premium supplements all designed to fit your wellness
                      goals without compromising on taste. We understand that
                      making the right food choices isn’t always easy. That’s
                      why we’re here to provide wholesome, delicious, and
                      convenient options that help you stay on track while
                      satisfying your cravings.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="row sp30">
                <div className="col-lg-6 col-md-6 m-b30">
                  <img
                    src={require("./../../images/about/pic5.jpg")}
                    alt=""
                    className="about-thumb"
                  />
                </div>
                <div className="col-lg-6 col-md-6 m-b30">
                  <img
                    src={require("./../../images/about/pic6.jpg")}
                    alt=""
                    className="about-thumb"
                  />
                </div>
              </div> */}
            </div>
          </div>

          <div
            className="section-full content-inner bg-gray"
            style={{
              backgroundImage: "url(" + img2 + ")",
              backgroundSize: "100%",
            }}
          >
            <div className="container">
              <div className="row faq-area1">
                <div className="col-lg-7 m-b30">
                  <div className="m-r20">
                    <div className="section-head text-left">
                      <h2>Gutman foods Journey</h2>
                      <p className="text-bold">
                        Where to buy our high quality{" "}
                      </p>
                      <div className="dlab-separator style1 bg-primary"></div>
                    </div>
                    <div className="clearfix">
                      <p>
                        Our journey began with a simple belief: Eating healthy
                        should never feel like a sacrifice. Frustrated by the
                        lack of truly delicious and nutritious snacks in the
                        market, Gutman foods set out to create a brand that
                        offers:
                      </p>
                      <p className="text">
                        🥑 Keto & Low-Carb Snacks – Perfect for those looking to
                        maintain ketosis and enjoy energy-boosting, high-fat
                        treats.
                      </p>
                      <p>
                        💙 Diabetic-Friendly Foods – Specially designed with low
                        sugar, high fiber, and balanced nutrition to support
                        blood sugar control.
                      </p>
                      <p>
                        🔥 Weight Loss Essentials – From metabolism-boosting
                        supplements to portion-controlled snacks, we make
                        healthy eating effortless.
                      </p>
                      <p className="text">
                        🌿 Nutrient-Dense Supplements – Premium-quality
                        supplements to fuel your fitness goals, boost immunity,
                        and enhance overall well-being.
                      </p>
                      <p>
                        We started this brand for people like you individuals
                        who value health, flavor, and convenience in every bite.
                        Today, we’re proud to be a trusted source for healthy
                        snacks, clean ingredients, and mindful choices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 m-b30">
                  <img
                    src={require("./../../images/About Join1.jpg")}
                    alt=""
                    className="about-thumb"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-full content-inner bg-gray"
            style={{
              backgroundImage: "url(" + img2 + ")",
              backgroundSize: "100%",
            }}
          >
            <div className="container">
              <div className="row faq-area1">
                <div className="col-lg-5 col-md-6 m-b30">
                  <img
                    src={require("./../../images/About image 1.jpg")}
                    alt=""
                    // style={{ height: "95%" }} // ✅ Corrected syntax
                    className="about-thumb"
                  />
                </div>

                <div className="col-lg-7 m-b30">
                  <div className="m-r20">
                    <div className="section-head text-left">
                      <h2>Why Choose Gutman foods?</h2>
                      {/* <p className="text-bold">
                        Where to buy our high quality{" "}
                      </p> */}
                      <div className="dlab-separator style1 bg-primary"></div>
                    </div>
                    <div className="clearfix">
                      <p>
                        💚 100% Quality Assurance – We source only the finest
                        ingredients to ensure you get the best nutrition with
                        every product.
                      </p>
                      <p className="text">
                        🍃 No Hidden Nasties – Our snacks and supplements are
                        free from artificial sweeteners, preservatives, and
                        unhealthy additives.
                      </p>
                      <p>
                        🚀 Designed for Your Goals – Whether you're on a weight
                        loss journey, maintaining ketosis, or managing diabetes,
                        we’ve got you covered.
                      </p>
                      <p>
                        🛍️ Convenience & Accessibility – Get healthy, delicious
                        products delivered to your doorstep because great
                        nutrition should be hassle-free.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-full content-inner bg-gray"
            style={{
              backgroundImage: "url(" + img2 + ")",
              backgroundSize: "100%",
            }}
          >
            <div className="container">
              <div className="row faq-area1">
             

                <div className="col-lg-7 m-b30">
                  <div className="m-r20">
                    <div className="section-head text-left">
                      <h2>Gutman food's commitment to You</h2>
                      {/* <p className="text-bold">
                        Where to buy our high quality{" "}
                      </p> */}
                      <div className="dlab-separator style1 bg-primary"></div>
                    </div>
                    <div className="clearfix">
                      <p>
                      At Gutman foods, we put our customers first. Every product we offer is carefully selected and backed by science, crafted with passion, and tested for quality. We are committed to:
                      </p>
                      <p className="text">
                      ✔ Transparency: You’ll always know exactly what’s in your food. No misleading labels, no hidden sugars.
                      </p>
                      <p>
                      ✔ Sustainability: We prioritize eco-friendly packaging and responsible sourcing to protect both your health and the planet.
                      </p>
                      <p>
                      ✔ Customer Satisfaction: Your health and happiness mean everything to us. If you’re not satisfied, we’ll make it right.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 m-b30">
                  <img
                    src={require("./../../images/About image 2.jpg")}
                    alt=""
                    
                    style={{ height: "100%" }} 
                    className="section-head text-left"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="section-full content-inner bg-line-top bg-line-bottom" style={{ backgroundImage: `url(${img4})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center text-white">
                                    <h3 className="text-white">We Are Professional at Our Skills</h3>
                                    <p>More than 2000+ customers trusted us</p>
                                </div>
                            </div>
                            <div className="row max-w900 m-auto">
                                {[53, 102, 36, 99].map((num, index) => (
                                    <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 text-center text-white">
                                        <div className="counter-num">
                                            <span className="counter"><CountUp end={num} /></span>
                                            {index === 2 && <small>k</small>}
                                        </div>
                                        <span className="counter-text">
                                            {index === 0 ? 'Years of Experience' :
                                                index === 1 ? 'Awards Wins' :
                                                    index === 2 ? 'Happy Clients' : 'Perfect Products'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="section-full content-inner-1 bg-white" style={{ backgroundImage: `url(${img2})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h3>Our Expert Chefs</h3>
                                    <p>Meet our professional team members</p>
                                </div>
                            </div>
                            <div className="row">
                                {teamInfo.map((item, index) => (
                                    <div key={index} className="col-lg-3 col-md-6 col-sm-6 m-b30">
                                        <div className="dlab-team1">
                                            <div className="thumb">
                                                <img src={item.image} alt="" />
                                                <ul className="social-link">
                                                    <li><Link to=''><i className="fa fa-facebook"></i></Link></li>
                                                    <li><Link to=''><i className="fa fa-twitter"></i></Link></li>
                                                </ul>
                                            </div>
                                            <div className="team-info text-center">
                                                <h4 className="name">{item.name}</h4>
                                                <p className="position">{item.post}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-tb50">
                            <div className="container text-center">
                                <h3>Our PARTNERS</h3>
                                <p>Famous companies trusted us, why not you?</p>
                            </div>
                            <OurPartners />
                        </div>
                    </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
