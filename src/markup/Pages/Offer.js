import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import img4 from "./../../images/offer.jpg"; 
import specialDietCakes from "./../../images/special-diet-cakes.jpg";
import imageBase from "../../constants/imageBase";
import api from "../../constants/api";

const ServiceSection = () => {
  const [services, setCategory] = useState([]);

  // Fetch category data
  const getCategory = async () => {
    try {
      const res = await api.get('/category/getAllCategoryWeb');
      const data = res.data.data.map((el) => ({
        ...el,
        images: el.images ? String(el.images).split(",") : [],
      }));
      console.log("Fetched categories:", data); // Debugging
      setCategory(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

    const [products, setProducts] = useState(null); // Initialize as null for object data
  
    const fetchProducts = async () => {
        try {
          const response = await api.get("/content/getOfferPage");
          
          // Ensure data is properly extracted from the array
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
    getCategory();
    fetchProducts();
  }, []);

  return (
    <div
      className="section-full content-inner service-area2 bg-img-fix bg-line-top bg-line-bottom"
      style={{ backgroundImage: `url(${img4})`, backgroundSize: "cover" }}
    >
      <div className="container">
        <div className="row">
        {products ? (
                <>
          <div className="col-lg-12">
            <div className="section-head text-center">
              <h2 className="text-white">{products.title}</h2>
              <div className="text-bolds"   style={{ color: "white" }} 
 dangerouslySetInnerHTML={{ __html: products.description }}>
            
              </div>
              <div className="dlab-separator style1 bg-primary"></div>
            </div>
          </div>
          </>
              ) : (
                <p className="text-center text-white">Loading product details...</p>
              )}
        </div>
        <div className="row">
          <div className="col-lg-4 m-b30">
            {products && products.images?.length > 0 && (
                      <img
                        src={`${imageBase}${products.images[0]}`}
                       className="img-cover radius-sm" alt="Special Diet Cakes"
                      />
                    )}
          </div>
          <div className="col-lg-8">
            <div className="row p-l30">
              {services.length > 0 ? (
                services.map((service, index) => (
                  <div className="col-lg-6 col-sm-6 m-b30" key={index}>
                    <div className="icon-bx-wraper text-white service-box2">
                      <div className="icon-bx">
                        <Link to={"/"} className="icon-cell">
                          {service.images.length > 0 ? (
                            <img
                              src={`${imageBase}${encodeURIComponent(service.images[0].trim())}`}
                              alt={service.category_title}
                              style={{ width: "80px", height: "80px", borderRadius: "50%" , objectFit: "cover", display: "block" }}
                           
                            />
                          ) : (
                            <p>No Image</p>
                          )}
                        </Link>
                      </div>
                      <div className="icon-content">
                        <h5 className="dlab-tilte">{service.category_title || "No Title"}</h5>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white">No services available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
