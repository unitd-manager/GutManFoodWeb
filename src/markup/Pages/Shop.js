import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import Swal from "sweetalert2";

const Shop = () => {
  const history = useHistory();

  const [isAdding, setIsAdding] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;
  const pageRange = 3;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const wishlistItems = useSelector(
    (state) => state.wishlistItems.wishlistItems
  );
  console.log("cartitems", cartItems);
  console.log("wishlistitems", wishlistItems);
  // Fetch products from API with pagination and search query
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get("/product/getAllProducts");
      response.data.data.forEach((el) => {
        el.images = String(el.images).split(",");
      });
      setProducts(response.data.data);
      // setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };
  const [user, setUser] = useState();
  const [sessionId, setSessionId] = useState("");
  console.log("user", user);

  const onUpdateCart = (data) => {
    if (isAdding) return;
    
    setIsAdding(true);
    // if (avaiableQuantity === 0) {
    //   return;
    // }
    console.log("updatedata", data);
    if (user) {
      console.log("user", user);
      data.contact_id = user.contact_id;
      dispatch(updateCartData(data));
    } else {
      
      Swal.fire({
        title: 'You are not logged in!',
        text: "Do you want to login?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          history.push('/shop-login')
          
        }
      });
    }
  };

  const onAddToCart = (data) => {
    if (isAdding) return;
    
    setIsAdding(true);
    if (user) {
      if (data.price) {
        data.contact_id = user.contact_id;

        dispatch(insertCartData(data));
      }
    } else {
      
      Swal.fire({
        title: 'You are not logged in!',
        text: "Do you want to login?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          history.push('/shop-login')
          
        }
      });
    }
    setTimeout(() => {
      setIsAdding(false);
    }, 2000);
  };

  const onAddToWishlist = (data) => {
    if (isAdding) return;
    
    setIsAdding(true);
    if (user) {
      data.contact_id = user.contact_id;
      dispatch(insertWishlistData(data));
      toast.success("Added to wishlist!");
    } else {
   
                  Swal.fire({
                    title: 'You are not logged in!',
                    text: "Do you want to login?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'Cancel',
                  }).then((result) => {
                    if (result.isConfirmed) {
                      history.push('/shop-login')
                      
                    }
                  });
               
    }
    setTimeout(() => {
      setIsAdding(false);
    }, 2000);
  };

  useEffect(() => {
    const userInfo = getUser();
    setUser(userInfo);
  }, []);

  // Fetch products when page or search query changes
  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle search input change
  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  //   setCurrentPage(1); // Reset to first page on new search
  // };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // const totalPages = Math.ceil(products.length / itemsPerPage);

  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const visibleGallery = products.slice(startIndex, endIndex);
  const applyFilters = () => {
    let filteredData = [...products];

   
    if (searchQuery !== "") {
      filteredData = filteredData.filter(
        (item) =>
          (item.title &&
            item.title.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filteredData;
  };

  const filteredGallery = applyFilters();

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const totalPages = Math.ceil(filteredGallery.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleGallery = filteredGallery.slice(startIndex, endIndex);

  const startPage = Math.floor((currentPage - 1) / pageRange) * pageRange + 1;
  const endPage = Math.min(startPage + pageRange - 1, totalPages);

  return (
    <>
      <Header />

      <div className="page-content bg-white">
        {/* Banner */}
        <div
          className="dlab-bnr-inr overlay-black-middle"
          style={{
            backgroundImage: "url(https://via.placeholder.com/1500x500)",
          }}
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
              ) : visibleGallery.length > 0 ? (
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
                        > <Link
                        to={`/shop-product-details/${product.product_id}`}
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
                          </div></Link>
                          <div className="item-info text-center">
                          <Link
                                to={`/shop-product-details/${product.product_id}`}
                              >
                                <div  style={{
      minHeight: "40px", // fixed height for two lines
      maxHeight: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    }}>
                            <h6 className="item-title"  style={{
        display: "-webkit-box",
        WebkitLineClamp: 2,       // limit to 2 lines
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        margin: 0,
        textAlign: "center",
      }}>
                             
                                {product.title}
                             
                            </h6>
                            </div>
                            </Link>
                            {/* <div className="quantity-selector mb-2"></div> */}
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

                  <nav>
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(1)}>First</button>
                  </li>
                  <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>&laquo; Prev</button>
                  </li>
                  {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                    <li key={startPage + index} className={`page-item ${currentPage === startPage + index ? "active" : ""}`}>
                      <button className="page-link" onClick={() => setCurrentPage(startPage + index)}>
                        {startPage + index}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next &raquo;</button>
                  </li>
                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(totalPages)}>Last</button>
                  </li>
                  <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                    <button className="page-link" onClick={() => setCurrentPage(totalPages)}>...{totalPages}</button>
                  </li>
                </ul>
              </nav>
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
