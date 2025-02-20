import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import api from "./../../constants/api";
import imageBase from "../../constants/imageBase";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 20;

  // Fetch products from API with pagination and search query
  const fetchProducts = async (page = 1, search = "") => {
    setLoading(true);
    try {
      const response = await api.get("/product/getAllProducts", {
        params: { page, search, limit: itemsPerPage },
      });
      response.data.data.forEach((el) => {
        el.images = String(el.images).split(",");
      });
      setProducts(response.data.data);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  // Fetch products when page or search query changes
  useEffect(() => {
    fetchProducts(currentPage, searchQuery);
  }, [currentPage, searchQuery]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  return (
    <>
      <Header />

      <div className="page-content bg-white">
        {/* Banner */}
        <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(https://via.placeholder.com/1500x500)" }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Shop</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li><Link to="/"><i className="fa fa-home"></i></Link></li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main Shop Section */}
        <div className="content-block">
          <div className="section-full content-inner bg-gray-light">
            <div className="container">
              {/* Search Bar */}
              <div className="row mb-4">
                <div className="col-md-6 mx-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>

              {/* Show Loading Message */}
              {loading ? (
                <div className="text-center">
                  <h4>Loading products...</h4>
                </div>
              ) : products.length > 0 ? (
                <>
                  <div className="row">
                    {products.map((product) => (
                      <div className="col-lg-3 col-md-6 col-sm-6" key={product.product_id}>
                        <div className="item-box shop-item">
                          <div className="item-img">
                            <img src={`${imageBase}${product?.images[0]}`} alt={product.title} />
                            {product.sale_price && <span className="sale">Sale!</span>}
                            <div className="price">
                              {product.sale_price ? (
                                <>
                                  <del>${product.original_price}</del> ${product.sale_price}
                                </>
                              ) : (
                                <>${product.price}</>
                              )}
                            </div>
                          </div>
                          <div className="item-info text-center">
                            <h4 className="item-title">
                              <Link to={`/shop-product-details/${product.product_id}`}>
                                
								{product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}
                              </Link>
                            </h4>
                            <Link to={`/shop-product-details/${product.product_id}`} className="btn btnhover">
                              <i className="ti-shopping-cart m-r5"></i> Add To Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="pagination mt-4 text-center">
                    <button
                      className="btn btn-primary mx-2"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                      Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                      className="btn btn-primary mx-2"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                      Next
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <h4>No products found.</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
