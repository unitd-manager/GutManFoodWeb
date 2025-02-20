// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import Header from './../Layout/Header';
// import Footer from './../Layout/Footer';
// import Owl from './../Element/Owl';
// import {Form} from 'react-bootstrap';

// var img1= require('./../../images/banner/bnr1.jpg');

// class Shopproduct extends Component{
// 	render(){
// 		return(
// 			<>
// 				<Header />
// 				<div className="page-content bg-white">
					
// 					<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")"}}>
// 						<div className="container">
// 							<div className="dlab-bnr-inr-entry">
// 								<h1 className="text-white">Shop Details</h1>
								
// 								<div className="breadcrumb-row">
// 									<ul className="list-inline">
// 										<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
// 										<li>Shop Details</li>
// 									</ul>
// 								</div>
								
// 							</div>
// 						</div>
// 					</div>
					
// 					<div className="content-block">
						
// 						<div className="section-full content-inner-1 bg-gray-light">
// 							<div className="container woo-entry">
// 								<div className="row">
// 									<div className="col-lg-6 m-b30">
// 										<div className="product-gallery on-show-slider lightgallery" id="lightgallery"> 
// 											<div className="dlab-box">
// 												<div className="dlab-thum-bx">
// 													<img src={require('./../../images/product/item2.jpg')} alt="" />
// 													<span data-exthumbimage="images/product/item2.jpg" data-src={require("./../../images/product/item2.jpg")} className="check-km" title="Image 1 Title will come here" >		
// 														<i className="fa fa-search"></i>
// 													</span>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 									<div className="col-lg-6 m-b30">
// 										<form method="post" className="cart sticky-top">
// 										<div className="dlab-post-title">
// 											<h4 className="post-title">Pumpkin cakes</h4>
// 											<p className="m-b10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
// 											<div className="dlab-divider bg-gray tb15">
// 												<i className="icon-dot c-square"></i>
// 											</div>
// 										</div>
// 										<div className="relative">
// 											<h3 className="m-tb10">$2,140.00 </h3>
// 											<div className="shop-item-rating">
// 												<span className="rating-bx"> 
// 													<i className="fa fa-star"></i> 
// 													<i className="fa fa-star"></i> 
// 													<i className="fa fa-star"></i> 
// 													<i className="fa fa-star-o"></i> 
// 													<i className="fa fa-star-o"></i> 
// 												</span>
// 												<span>4.5 Rating</span>
// 											</div>
// 										</div>
// 										<div className="shop-item-tage">
// 											<span>Tags :- </span>
// 											<Link to={''}>Cake</Link>
// 											<Link to={''}>Coffee</Link>
// 											<Link to={''}>Pastry</Link>
// 										</div>
// 										<div className="dlab-divider bg-gray tb15">
// 											<i className="icon-dot c-square"></i>
// 										</div>
// 										<div className="row">
// 											<div className="m-b30 col-md-7 col-sm-8">
// 												<h6>Product Size</h6>
// 												<div className="btn-group product-item-size" data-toggle="buttons">
// 													<label className="btn">
// 														<input name="options" id="option7" type="radio" /> Large
// 													</label>
// 													<label className="btn active">
// 														<input name="options " id="option8" type="radio" /> Medium
// 													</label>
// 													<label className="btn"> 
// 														<input name="options" id="option9" type="radio" /> Small
// 													</label>
// 												</div>
// 											</div>
// 											<div className="m-b30 col-md-5 col-sm-4">
// 												<h6>Select quantity</h6>
// 												<div className="quantity btn-quantity style-2">
// 													<Form>
// 														<Form.Group controlId="exampleForm.SelectCustom">
															
// 																<Form.Control as="select" custom>
// 																	<option>1</option>
// 																	<option>2</option>
// 																	<option>3</option>
// 																	<option>4</option>
// 																	<option>5</option>
// 																</Form.Control>
// 														</Form.Group>
// 													</Form>
// 												</div>
// 											</div>
// 											<div className="m-b30 col-md-12 col-sm-12">
// 												<h6>Add toppings </h6>
// 												<div className="btn-group product-item-size" data-toggle="buttons">
// 													<label className="btn">
// 														<input name="options" id="veggies" type="radio" /> Veggies
// 													</label>
// 													<label className="btn active">
// 														<input name="options " id="medium" type="radio" /> Medium
// 													</label>
// 												</div>
// 											</div>
// 										</div>
// 										<button className="btn btnhover">
// 											<i className="ti-shopping-cart"></i>Add To Cart
// 										</button>
// 									</form>
// 									</div>
// 								</div>
// 								<div className="row">
// 									<div className="col-lg-12">
// 										<div className="dlab-tabs product-description tabs-site-button m-t30">
// 											<ul className="nav nav-tabs">
// 												<li><Link data-toggle="tab" to={''} className="active"> Description</Link></li>
// 												<li><Link data-toggle="tab" to={''}> Review(1)</Link></li>
// 											</ul>
// 											<div className="tab-content">
// 												<div id="web-design-1" className="tab-pane active">
// 													<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
// 													<p className="m-b0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
// 												</div>
// 												<div id="developement-1" className="tab-pane">
// 													<div id="comments">
// 														<ol className="commentlist">
// 															<li className="comment">
// 																<div className="comment_container"> 
// 																	<img className="avatar avatar-60 photo" src={require('./../../images/testimonials/pic1.jpg')} alt="" />
// 																	<div className="comment-text">
// 																		<div  className="star-rating">
// 																			<div data-rating="3"> 
// 																				<i className="fa fa-star" data-alt="1" title="regular"></i> 
// 																				<i className="fa fa-star" data-alt="2" title="regular"></i> 
// 																				<i className="fa fa-star-o" data-alt="3" title="regular"></i> 
// 																				<i className="fa fa-star-o" data-alt="4" title="regular"></i> 
// 																				<i className="fa fa-star-o" data-alt="5" title="regular"></i> 
// 																			</div>
// 																		</div>
// 																		<p className="meta"> 
// 																			<strong className="author">Cobus Bester</strong> 
// 																			<span> March 7, 2013</span> 
// 																		</p>
// 																		<div className="description">
// 																			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
// 																		</div>
// 																	</div>
// 																</div>
// 															</li>
// 															<li className="comment">
// 																<div className="comment_container"> 
// 																	<img className="avatar avatar-60 photo" src={require('./../../images/testimonials/pic2.jpg')} alt="" />
// 																	<div className="comment-text">
// 																		<div  className="star-rating">
// 																			<div data-rating="3"> 
// 																				<i className="fa fa-star" data-alt="1" title="regular"></i> 
// 																				<i className="fa fa-star" data-alt="2" title="regular"></i> 
// 																				<i className="fa fa-star" data-alt="3" title="regular"></i> 
// 																				<i className="fa fa-star-o" data-alt="4" title="regular"></i> 
// 																				<i className="fa fa-star-o" data-alt="5" title="regular"></i> 
// 																			</div>
// 																		</div>
// 																		<p className="meta"> 
// 																			<strong className="author">Cobus Bester</strong> 
// 																			<span> March 7, 2013</span> 
// 																		</p>
// 																		<div className="description">
// 																			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
// 																		</div>
// 																	</div>
// 																</div>
// 															</li>
// 															<li className="comment">
// 																<div className="comment_container"> 
// 																	<img className="avatar avatar-60 photo" src={require('./../../images/testimonials/pic3.jpg')} alt="" />
// 																	<div className="comment-text">
// 																		<div  className="star-rating">
// 																			<div data-rating="3"> 
// 																				<i className="fa fa-star" data-alt="1" title="regular"></i> 
// 																				<i className="fa fa-star" data-alt="2" title="regular"></i> 
// 																				<i className="fa fa-star" data-alt="3" title="regular"></i> 
// 																				<i className="fa fa-star" data-alt="4" title="regular"></i> 
// 																				<i className="fa fa-star-o" data-alt="5" title="regular"></i> 
// 																			</div>
// 																		</div>
// 																		<p className="meta"> 
// 																			<strong className="author">Cobus Bester</strong> 
// 																			<span> March 7, 2013</span> 
// 																		</p>
// 																		<div className="description">
// 																			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
// 																		</div>
// 																	</div>
// 																</div>
// 															</li>
// 														</ol>
// 													</div>
// 													<div id="review_form_wrapper">
// 														<div id="review_form">
// 															<div id="respond" className="comment-respond">
// 																<h3 className="comment-reply-title" id="reply-title">Add a review</h3>
// 																<p>Your email address will not be published. Required fields are marked *</p>
// 																<form className="comment-form" method="post" >
// 																	<div className="comment-form-rating">
// 																		<label className="pull-left m-r20">Your Rating</label>
// 																		<div className="rating-widget">

// 																			<div className="rating-stars">
// 																				<ul id="stars">
// 																					<li className="star" title="Poor" data-value="1">
// 																						<i className="fa fa-star fa-fw"></i>
// 																					</li>
// 																					<li className="star" title="Fair" data-value="2">
// 																						<i className="fa fa-star fa-fw"></i>
// 																					</li>
// 																					<li className="star" title="Good" data-value="3">
// 																						<i className="fa fa-star fa-fw"></i>
// 																					</li>
// 																					<li className="star" title="Excellent" data-value="4">
// 																						<i className="fa fa-star fa-fw"></i>
// 																					</li>
// 																					<li className="star" title="WOW!!!" data-value="5">
// 																						<i className="fa fa-star fa-fw"></i>
// 																					</li>
// 																				</ul>
// 																			</div>
// 																		</div>
// 																	</div>
// 																	<div className="comment-form-author">
// 																		<label>Name <span className="required">*</span></label>
// 																		<input type="text" aria-required="true" size="30" value="" name="author" id="author" />
// 																	</div>
// 																	<div className="comment-form-email">
// 																		<label>Email <span className="required">*</span></label>
// 																		<input type="text" aria-required="true" size="30" value="" name="email" id="email" />
// 																	</div>
// 																	<div className="comment-form-comment">
// 																		<label>Your Review</label>
// 																		<textarea aria-required="true" rows="8" cols="45" name="comment" id="comment"></textarea>
// 																	</div>
// 																	<div className="form-submit">
// 																		<input type="submit" value="Submit" className="btn" id="submit" name="submit" />
// 																	</div>
// 																</form>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
						
// 						<Owl  />
						
// 					</div>
// 				</div>
				
				
// 				<Footer  />
				
// 				</>
// 			)

// 	}
// }
 
// export default Shopproduct; 

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Form } from "react-bootstrap";
import api from "../../constants/api";
import imageBase from "../../constants/imageBase";


const Shopproduct = () => {
  const { id } = useParams(); // Get the product ID from URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  // Fetch product details from API
  useEffect(() => {
	api
	.post("/product/getProductbyproductId", { product_id: id })
	.then((res) => {
	  res.data.data[0].tag = String(res.data.data[0].tag).split(",");
	  res.data.data[0].images = String(res.data.data[0].images).split(",")
      setProduct(res.data.data[0])})
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  // Handle adding to cart
  const addToCart = () => {
    const cartItem = {
      id: product.product_id,
      name: product.title,
      price: product.price,
      quantity: quantity,
    };
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  // Handle adding to wishlist
  const addToWishlist = () => {
    setWishlist(!wishlist);
    let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist) {
      wishlistItems.push(product);
    } else {
      wishlistItems = wishlistItems.filter((item) => item.id !== product.id);
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    alert(wishlist ? "Removed from wishlist" : "Added to wishlist!");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle"
          style={{ backgroundImage: `url(${imageBase}${product?.images[0]})` }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">{product.title}</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"/"}>
                      <i className="fa fa-home"></i>
                    </Link>
                  </li>
                  <li>Shop Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="section-full content-inner-1 bg-gray-light">
            <div className="container woo-entry">
              <div className="row">
                <div className="col-lg-6 m-b30">
                  <div className="product-gallery">
                    <div className="dlab-box">
                      <div className="dlab-thum-bx">
                        <img src={`${imageBase}${product?.images[0]}`} alt={product.title} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 m-b30">
                  <form className="cart sticky-top">
                    <div className="dlab-post-title">
                      <h4 className="post-title">{product.title}</h4>
                      <p className="m-b10">{product.description}</p>
                      <div className="dlab-divider bg-gray tb15">
                        <i className="icon-dot c-square"></i>
                      </div>
                    </div>
                    <h3 className="m-tb10">${product.price.toFixed(2)}</h3>

                    <div className="shop-item-rating">
                      <span className="rating-bx">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={
                              i < product.rating ? "fa fa-star" : "fa fa-star-o"
                            }
                          ></i>
                        ))}
                      </span>
                      <span>{product.rating} Rating</span>
                    </div>

                    <div className="shop-item-tage">
                      <span>Tags: </span>
                      {product?.tags?.map((tag, index) => (
                        <Link key={index} to={`/tag/${tag}`}>
                          {tag}
                        </Link>
                      ))}
                    </div>

                    <div className="dlab-divider bg-gray tb15">
                      <i className="icon-dot c-square"></i>
                    </div>

                    <div className="row">
                      <div className="m-b30 col-md-7 col-sm-8">
                        <h6>Product Size</h6>
                        <div className="btn-group product-item-size">
                          {product?.sizes?.map((size, index) => (
                            <label key={index} className="btn">
                              <input type="radio" name="size" value={size} />{" "}
                              {size}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="m-b30 col-md-5 col-sm-4">
                        <h6>Select quantity</h6>
                        <div className="quantity btn-quantity style-2">
                          <Form>
                            <Form.Group controlId="quantitySelect">
                              <Form.Control
                                as="select"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                              >
                                {[...Array(10).keys()].map((num) => (
                                  <option key={num + 1} value={num + 1}>
                                    {num + 1}
                                  </option>
                                ))}
                              </Form.Control>
                            </Form.Group>
                          </Form>
                        </div>
                      </div>
                    </div>

                    <button className="btn btnhover" onClick={addToCart}>
                      <i className="ti-shopping-cart"></i> Add To Cart
                    </button>

                    <button
                      className={`btn btnhover ${wishlist ? "active" : ""}`}
                      onClick={addToWishlist}
                    >
                      <i className="fa fa-heart"></i>{" "}
                      {wishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                    </button>
                  </form>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="dlab-tabs product-description tabs-site-button m-t30">
                    <ul className="nav nav-tabs">
                      <li>
                        <Link data-toggle="tab" to={""} className="active">
                          Description
                        </Link>
                      </li>
                      <li>
                        <Link data-toggle="tab" to={""}>
                          Reviews ({product?.reviews?.length})
                        </Link>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className="tab-pane active">
                        <p>{product?.description}</p>
                      </div>
                      <div className="tab-pane">
                        {product?.reviews?.map((review, index) => (
                          <div key={index} className="review">
                            <strong>{review.author}</strong>
                            <p>{review.comment}</p>
                            <span>{review.rating} stars</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shopproduct;
