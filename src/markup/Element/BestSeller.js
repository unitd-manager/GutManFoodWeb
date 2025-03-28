import React, { useEffect, useState } from 'react';
import api from '../../constants/api';
import { Link } from "react-router-dom";
import pic1 from "./../../images/our-work/pic1.jpg";
import pic2 from "./../../images/our-work/pic2.jpg";
import pic3 from "./../../images/our-work/pic3.jpg";
import imageBase from "../../constants/imageBase";

const Portfolio = () => {


  const [portfolioItems, setportfolioItems] = useState([]);

  // Get category data
  const getCategory = async () => {
    try {
      const res = await api.get('/product/getBestSellingProducts');
      res.data.data.forEach((el) => {
        el.images = String(el.images).split(",");
      });
      console.log(res.data); // Debugging: Check API response
      setportfolioItems(res.data.data || []); // Ensure it's always an array
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);



  return (
   
    <div className="section-full bg-white">
          <h2
        style={{
          textAlign: "center",
          marginBottom: "4.5rem",
          fontSize: "2rem",
          color: "#3D6B46",
        }}
      >
        Best Seller
      </h2>
      <div className="container">
        <div className="row">
          {portfolioItems&&portfolioItems.map((item, index) => (
            <div key={item.id} className="col-lg-3 col-md-6 col-sm-6">
              <div className={`port-box1 text-white ${index === portfolioItems.length - 1 ? "m-md-b0 m-sm-b0" : ""}`}>
                <div className="dlab-media">
                <Link
  to={`/shop-product-details/${item.product_id}`}
  onClick={() => window.scrollTo(0, 0)}
>

                {item?.images[0] ? (
                              <img
                                src={`${imageBase}${item.images[0]}`}
                                alt={item.title}
                                style={{
                                  width: "100%",
                                  height: "360px",
                                  objectFit: "cover",
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  background: "#f5f5f5",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <span>No Image Available</span>
                              </div>
                            )}
                            </Link >
                </div>
                <div className="dlab-info">
                  <h2 className="title">{item.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
