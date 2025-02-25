import React, { useEffect, useState } from 'react';
import api from '../../constants/api';
import { Link } from "react-router-dom";
import imageBase from "../../constants/imageBase";

var img1 = require('./../../images/background/bg5.jpg');

const CategorySection = () => {
  const [categories, setCategory] = useState([]);
  const [products, setProducts] = useState(null); // Initialize as null for object data

  // Get category data
  const getCategory = async () => {
    try {
      const res = await api.get('/category/getCategoryWeb');
      const data = res.data.data.map((el) => ({
        ...el,
        images: String(el.images).split(","),
      }));
      setCategory(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await api.get("/content/getEnhancePage");
      
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
      className="section-full content-inner-3"
      style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover" }}
    >
      <div className="container">
        <div className="row service-area1">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div
                  className="icon-bx-wraper text-center service-box1"
                  style={{
                    backgroundImage: `url(${imageBase}${encodeURIComponent(category.images[0].trim())})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
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
              {products ? (
                <>
                  <div className="icon-bx icon-bx-xl">
                    {products.images?.length > 0 && (
                      <img
                        src={`${imageBase}${products.images[0]}`}
                        alt={products.title || "Product Image"}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
                      />
                    )}
                  </div>
                  <h3 className="text-primary">{products.title}</h3>
                  <p className="main-text" dangerouslySetInnerHTML={{ __html: products.description }}></p>
                </>
              ) : (
                <p className="text-center text-white">Loading product details...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
