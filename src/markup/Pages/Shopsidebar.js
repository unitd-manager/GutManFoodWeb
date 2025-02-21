import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import api from "./../../constants/api";
import { insertCartData, updateCartData } from "../../redux/actions/cartItemActions";
import { insertWishlistData } from "../../redux/actions/wishlistItemActions";
import { getUser } from "../../common/user";
import imageBase from '../../constants/imageBase';

const bnr = require('./../../images/banner/bnr3.jpg');

function Shopsidebar() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); // FIXED missing state
  const [user, setUser] = useState(null);

  const cartItems = useSelector((state) => state.cartItems.cartItems);

  const itemsPerPage = 20;

  // Fetch products from API
  const fetchProducts = useCallback(async (page = 1, search = "", category = null) => {
    setLoading(true);
    try {
      const response = await api.get("/product/getAllProducts", {
        params: { page, search, category, limit: itemsPerPage },
      });

      const processedProducts = response.data.data.map((el) => ({
        ...el,
        images: String(el.images).split(","),
      }));

      setProducts(processedProducts);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  }, []);

  const onUpdateCart = (data) => {
    if (user) {
      data.contact_id = user.contact_id;
      dispatch(updateCartData(data));
    } else {
      console.log("Please login to update cart");
    }
  };

  const onAddToCart = (data) => {
    if (user) {
      if (data.price) {
        data.contact_id = user.contact_id;
        dispatch(insertCartData(data));
      }
    } else {
      console.log("Please login to add items to the cart");
    }
  };

  const onAddToWishlist = (data) => {
    if (user) {
      data.contact_id = user.contact_id;
      dispatch(insertWishlistData(data));
    } else {
      console.log("Please login to add items to wishlist");
    }
  };

  useEffect(() => {
    setUser(getUser());

    api.get('/category/getAllCategory')
      .then((res) => {
        setCategories(res.data.data);
      })
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  useEffect(() => {
    fetchProducts(currentPage, searchQuery, selectedCategory);
  }, [currentPage, searchQuery, selectedCategory, fetchProducts]);

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: `url(${bnr})` }}>
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Shop Products</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li><Link to={'/'}>Home</Link></li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              {/* Sidebar */}
              <div className="col-xl-3 col-lg-4 col-md-5 m-b30">
                <aside className="side-bar shop-categories sticky-top">
                  <div className="dlab-accordion advanced-search toggle" id="accordion1">
                    <div className="panel">
                      <div className="acod-head">
                        <h5 className="acod-title">
                          <Link data-toggle="collapse" to="#categories">
                            Product Categories
                          </Link>
                        </h5>
                      </div>
                      <div id="categories" className="acod-body collapse show">
                        <div className="acod-content">
                          <div className="widget_services">
                            <ul>
                              <li>
                                <Link onClick={() => setSelectedCategory(null)}
                                      className={!selectedCategory ? 'active' : ''}>
                                  All Categories
                                </Link>
                              </li>
                              {categories.map(cat => (
                                <li key={cat.category_id}>
                                  <Link onClick={() => setSelectedCategory(cat.category_id)}
                                        className={selectedCategory === cat.category_id ? 'active' : ''}>
                                    {cat.category_title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>

              {/* Product Listing */}
              <div className="col-xl-9 col-lg-8 col-md-7">
                <div className="row">
                  {loading ? (
                    <div className="col-12 text-center">Loading products...</div>
                  ) : products.length === 0 ? (
                    <div className="col-12 text-center">No products found</div>
                  ) : (
                    products.map(product => (
                      <div key={product.id} className="col-xl-4 col-lg-6 col-md-12 col-sm-6 m-b30">
                        <div className="item-box shop-item style2">
                          <div className="item-img">
                            <img src={imageBase + (product.images[0] || "default.jpg")} alt={product.name} />
                          </div>
                          <div className="item-info text-center">
                            <h4 className="item-title">
                              <Link to={`/shop-product-details/${product.id}`}>{product.name}</Link>
                            </h4>
                            <h5 className="price text-primary">
                              <span>${product.price}</span>
                            </h5>
                            <div className="cart-btn">
                              <button onClick={() => onAddToCart(product)}
                                      className="btn btnhover radius-xl">
                                <i className="ti-shopping-cart"></i> Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shopsidebar;
