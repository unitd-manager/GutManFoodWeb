import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import imageBase from "../../constants/imageBase";
import api from "../../constants/api";

const Slider = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/content/getBannerPage");
      const data = response.data.data.map((el) => ({
        ...el,
        images: String(el.images).split(","),
      }));
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="main-slider">
      <Carousel indicators={false}>
        {products.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="slide"
			  style={{
				backgroundImage: `url(${imageBase}${encodeURIComponent(slide.images[0].trim())})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			  }}
            >
              <div className="content">
                <span>GutMan Foods</span>
                <h2 className="title">{slide.title}</h2>
                <h4
				className="sub-title"
				dangerouslySetInnerHTML={{ __html: slide.description }}
				></h4>

                <Link to={"/About-Us"} className="btn btnhover">
                  About Us
                </Link>
                <Link
                  to={"/Shop"}
                  className="btn white"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
