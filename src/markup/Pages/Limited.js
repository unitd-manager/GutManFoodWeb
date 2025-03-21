import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import imageBase from "../../constants/imageBase";
import api from "../../constants/api";

const ServiceSection = () => {


    const [products, setProducts] = useState(null); // Initialize as null for object data
  
    const fetchProducts = async () => {
      try {
          const response = await api.get("/content/getLimitedPage");
          console.log("API Response:", response.data);
  
          const productData = response.data.data.length > 0 ? response.data.data[0] : null;
  
          const formattedData = productData
              ? {
                  ...productData,
                  images: productData.images ? String(productData.images).split(",") : [],
              }
              : null;
  
          setProducts(formattedData);
      } catch (error) {
          console.error("Error fetching products:", error);
      }
  };
  
      
    
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
    <div className="row m-lr0 about-area1">
      <div className="col-lg-6 p-lr0">
      {products && products.images?.length > 0 && (
          <img
            src={`${imageBase}${products.images[0]}`}
           className="img-cover radius-sm" alt="Special Diet Cakes"
          />
        )}
      </div>
      <div className="col-lg-6 p-lr0 d-flex align-items-center text-center">
        <div className="about-bx">
          <div className="section-head text-center text-white">
          {products ? (
    <>
            <h4 className="text-white" dangerouslySetInnerHTML={{ __html: products.title}}></h4>
            </>
  ) : (
    <p className="text-center text-white">Loading product details...</p>
  )}
            <div className="icon-bx">
              <img src={require('./../../images/icons/service-icon/icon2.png')} alt="" />
            
            </div>
          </div>
          <p dangerouslySetInnerHTML={{ __html: products?.description || "" }}></p>

          <Link to={"/Shop"} className="btn-secondry white btnhover btn-md"><i className="fa fa-cart"></i>GET NOW</Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ServiceSection;
