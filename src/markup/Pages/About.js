

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import OurPartners from "./../Element/OurPartners";
import CountUp from "react-countup";
import api from "../../constants/api"; // Ensure you have your API setup


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
  const [about1, setAbout1] = useState([]);
  const [about2, setAbout2] = useState([]);
  const [about3, setAbout3] = useState([]);
  const [about4, setAbout4] = useState([]);

  useEffect(() => {
      api
      .get("/content/getAboutPanel1")
      .then((res) => {
        setAbout1(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutPanel2")
      .then((res) => {
        setAbout2(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutPanel3")
      .then((res) => {
        setAbout3(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
      api
      .get("/content/getAboutPanel4")
      .then((res) => {
        setAbout4(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching magazine data", err);
      });
    

  }, []);

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
                    <h3> {about1[0]?.title}</h3>
                    <p>Nourishing Your Health, One Bite at a Time</p>
                    <p dangerouslySetInnerHTML={{ __html: about1[0]?.description }}>
                    </p>
                  </div>
                </div>
              </div>
           
            </div>
          </div>

          <div
            className="section-full content-inner-3 bg-gray"
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
                      <h2>{about2[0]?.title}</h2>
                      <div className="dlab-separator style1 bg-primary"></div>
                    </div>
                    <div className="clearfix">
                      
                      <p dangerouslySetInnerHTML={{ __html: about2[0]?.description }}>
                      </p>
                      {/* <p className="text">
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
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 m-b30">
                  <img
                    src={`https://gutmanfoodsadmin.unitdtechnologies.com/storage/uploads/${about2[0]?.file_name}`}
                    alt=""
                    className="about-thumb"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="section-full content-inner-3 bg-gray"
            style={{
              backgroundImage: "url(" + img2 + ")",
              backgroundSize: "100%",
            }}
          >
            <div className="container">
              <div className="row faq-area1">
                <div className="col-lg-5 col-md-6 m-b30">
                  <img
                    src={`https://gutmanfoodsadmin.unitdtechnologies.com/storage/uploads/${about3[0]?.file_name}`}
                    alt=""
                    className="about-thumb"
                  />
                </div>

                <div className="col-lg-7 m-b30">
                  <div className="m-r20">
                    <div className="section-head text-left">
                      <h2>{about3[0]?.title}</h2>
                     
                      <div className="dlab-separator style1 bg-primary"></div>
                    </div>
                    <div className="clearfix">
                    <p dangerouslySetInnerHTML={{ __html: about3[0]?.description }}></p>
                        {/* 💚 100% Quality Assurance – We source only the finest
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
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section-full content-inner-3 bg-gray"
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
                      <h2>{about4[0]?.title}</h2>
                    
                      <div className="dlab-separator style1 bg-primary"></div>
                    </div>
                    <div className="clearfix">
                    <p dangerouslySetInnerHTML={{ __html: about4[0]?.description }}></p>
                      {/* At Gutman foods, we put our customers first. Every product we offer is carefully selected and backed by science, crafted with passion, and tested for quality. We are committed to:
                      </p>
                      <p className="text">
                      ✔ Transparency: You’ll always know exactly what’s in your food. No misleading labels, no hidden sugars.
                      </p>
                      <p>
                      ✔ Sustainability: We prioritize eco-friendly packaging and responsible sourcing to protect both your health and the planet.
                      </p>
                      <p>
                      ✔ Customer Satisfaction: Your health and happiness mean everything to us. If you’re not satisfied, we’ll make it right.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 m-b30">
                  <img
                     src={`https://gutmanfoodsadmin.unitdtechnologies.com/storage/uploads/${about4[0]?.file_name}`}
                    alt=""
                    className="section-head text-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
