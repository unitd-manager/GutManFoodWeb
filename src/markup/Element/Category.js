import React, { useEffect, useState } from 'react';
import api from '../../constants/api';
import { Link } from "react-router-dom";

var serblog1 = require('./../../images/our-services/pic1.jpg');
var img1 = require('./../../images/background/bg5.jpg');

const CategorySection = () => {
  const [categories, setCategory] = useState([]);

  // Get category data
  const getCategory = async () => {
    try {
      const res = await api.get('/category/getCategoryWeb');
      console.log(res.data); // Debugging: Check API response
      setCategory(res.data.data || []); // Ensure it's always an array
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div
      className="section-full content-inner-3"
      style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}
    >
      <div className="container">
        <div className="row service-area1">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div key={category.id} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div
                  className="icon-bx-wraper text-center service-box1"
                  style={{ backgroundImage: `url(${serblog1})`, backgroundSize: "cover" }}
                >
                  <div className="icon-content">
                    <h2 className="dlab-tilte text-white">{category.category_title}</h2>
                    <p>{category.description}</p>
                    <div className="dlab-separator style1 bg-primary"></div>
                  
                    <Link to={`/CategoryDetail/${category.category_id}`} className="btn btnhover">
  More details <i className="fa fa-angle-double-right m-l5"></i>
</Link>

                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">Loading categories...</p>
          )}
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="section-head mb-0 text-center">
              <div className="icon-bx icon-bx-xl">
                <img src={require("./../../images/balanced-diet.png")} alt="Diet" />
              </div>
              <h3 className="text-primary">Live Longer and Enhance Your Well-Being</h3>
              <p className="main-text">
             
                <strong>GUTMAN</strong> provides a holistic approach to empower you on your health journey.
Using science-backed methods, we help you lower your biological age and slow the ageing process.
              </p>
              {/* <p>
                Exclusive deals on Cakes, delivered straight to your inbox <Link to="">Join Now</Link>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
