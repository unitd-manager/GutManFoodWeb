import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import api from "./../../constants/api";
import imageBase from "../../constants/imageBase";
import {
  insertCartData,
  updateCartData,
} from "../../redux/actions/cartItemActions";
import {
  insertWishlistData,
  removeWishlistData,
} from "../../redux/actions/wishlistItemActions";
import { getUser } from "../../common/user";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import "../../css/pagination.css";

const Shop = () => {
  const history = useHistory();

  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const wishlistItems = useSelector(
    (state) => state.wishlistItems.wishlistItems
  );
  console.log("cartitems", cartItems);
  console.log("wishlistitems", wishlistItems);

  const { categoryId } = useParams(); // Get category ID from URL


  console.log("Category ID:", categoryId);
  // Fetch products from API with pagination and search query
  const fetchProducts = async (page = 1, search = "", categoryId = "") => {
    setLoading(true);
    try {
      const response = await api.post("/category/getProductByCategory", {
        category_id: categoryId, 
        search, 
        page, 
        limit: itemsPerPage
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
  
  const [user, setUser] = useState();
  const [sessionId, setSessionId] = useState("");
  console.log("user", user);

  const onUpdateCart = (data) => {
    // if (avaiableQuantity === 0) {
    //   return;
    // }
    console.log("updatedata", data);
    if (user) {
      console.log("user", user);
      data.contact_id = user.contact_id;
      dispatch(updateCartData(data));
    } else {
    }
  };

  const onAddToCart = (data) => {
    if (user) {
      if (data.price) {
        data.contact_id = user.contact_id;

        dispatch(insertCartData(data));
      }
    } else {
      const userConfirmed = window.confirm(
        "Please Login. Click 'OK' to go to the Login page or 'Cancel' to stay."
      );
      if (userConfirmed) {
        history.push("/shop-login"); // Navigate to the login page
      }
    }
  };

  const onAddToWishlist = (data) => {
    if (user) {
      data.contact_id = user.contact_id;
      dispatch(insertWishlistData(data));
      toast.success("Added to wishlist!");
    } else {
      const userConfirmed = window.confirm(
        "Please Login. Click 'OK' to go to the Login page or 'Cancel' to stay."
      );
      if (userConfirmed) {
        history.push("/shop-login"); // Navigate to the login page
      }
    }
  };

  useEffect(() => {
    const userInfo = getUser();
    setUser(userInfo);
  }, []);

  // Fetch products when page or search query changes
  useEffect(() => {
    fetchProducts(currentPage, searchQuery, categoryId);
  }, [currentPage, searchQuery, categoryId]);
  

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const totalPage = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleGallery = products.slice(startIndex, endIndex);
  const bgimg1 = require('./../../images/book.jpg');

  return (
    <>
      <Header />

      <div className="page-content bg-white">
        {/* Banner */}
        <div
          className="dlab-bnr-inr overlay-black-middle"
          style={{ backgroundImage: `url(${bgimg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}

        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Shop</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to="/">
                      <i className="fa fa-home"></i>
                    </Link>
                  </li>
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
              ) : Array.isArray(products) && products.length > 0 ? (
                <>
                  <div className="row">
                    {visibleGallery.map((product) => (
                      <div
                        className="col-lg-3 col-md-6 col-sm-6"
                        key={product.product_id}
                      >
                        <div
                          className="item-box shop-item"
                          style={{ height: "450px" }}
                        >
                          <div
                            className="item-img"
                            style={{
                              height: "250px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              overflow: "hidden",
                            }}
                          >
                            {product?.images[0] ? (
                              <img
                                src={`${imageBase}${product.images[0]}`}
                                alt={product.title}
                                style={{
                                  maxWidth: "100%",
                                  maxHeight: "100%",
                                  objectFit: "contain",
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
                            {product.sale_price && (
                              <span className="sale">Sale!</span>
                            )}
                            <div className="price">
                              {product.sale_price ? (
                                <>
                                  <del>${product.original_price}</del> $
                                  {product.sale_price}
                                </>
                              ) : (
                                <>${product.price}</>
                              )}
                            </div>
                          </div>
                          <div className="item-info text-center">
                            <h4 className="item-title">
                           
                              <Link to={`/shop-product-details/${product.product_id}`}>
                                {product.title && product.title.length > 20
                                  ? product.title.slice(0, 20) + "..."
                                  : product.title || "No Product Available"}
                              </Link>
                            </h4>
                            <div className="quantity-selector mb-2"></div>
                            <button
                              onClick={() => {
                                if (
                                  cartItems.filter(
                                    (cartItem) =>
                                      cartItem.product_id === product.product_id
                                  )[0]?.qty > 0
                                ) {
                                  product.qty =
                                    parseFloat(
                                      cartItems.filter(
                                        (cartItem) =>
                                          cartItem.product_id ===
                                          product.product_id
                                      )[0]?.qty
                                    ) + Number(1);
                                  product.basket_id = cartItems.filter(
                                    (cartItem) =>
                                      cartItem.product_id === product.product_id
                                  )[0].basket_id;
                                  onUpdateCart(product);
                                } else {
                                  onAddToCart(product);
                                }
                              }}
                              className="btn btnhover m-1"
                            >
                              <i className="ti-shopping-cart m-r5"></i> Add To
                              Cart
                            </button>
                            <button
                              onClick={() => {
                                const isInWishlist = wishlistItems.filter(
                                  (cartItem) =>
                                    cartItem.product_id === product.product_id
                                )[0];
                                console.log("wishlistitem", isInWishlist);
                                if (isInWishlist) {
                                  dispatch(removeWishlistData(isInWishlist));
                                } else {
                                  onAddToWishlist(product);
                                }
                              }}
                              className={`btn btnhover m-1 ${
                                wishlistItems.some(
                                  (item) =>
                                    item.product_id === product.product_id
                                )
                                  ? "btn-primary"
                                  : ""
                              }`}
                            >
                              <i className="ti-heart m-r5"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="th-pagination text-center pt-4">
                    <ul className="pagination justify-content-center">
                      {/* First Page */}
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(1)}
                          disabled={currentPage === 1}
                        >
                          First
                        </button>
                      </li>

                      {/* Previous Page */}
                      <li
                        className={`page-item ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          &laquo; Prev
                        </button>
                      </li>

                      {/* Page Numbers */}
                      {Array.from({ length: totalPage }, (_, index) => (
                        <li
                          key={index + 1}
                          className={`page-item ${
                            currentPage === index + 1 ? "active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </li>
                      ))}

                      {/* Next Page */}
                      <li
                        className={`page-item ${
                          currentPage === totalPage ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPage}
                        >
                          Next &raquo;
                        </button>
                      </li>

                      {/* Last Page */}
                      <li
                        className={`page-item ${
                          currentPage === totalPage ? "disabled" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(totalPage)}
                          disabled={currentPage === totalPage}
                        >
                          Last
                        </button>
                      </li>
                    </ul>
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
