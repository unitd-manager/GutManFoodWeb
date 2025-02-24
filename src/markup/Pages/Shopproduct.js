import React, {useState,useEffect} from 'react';
import {Link,useParams} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Owl from './../Element/Owl';
import {Form} from 'react-bootstrap';
import api from '../../constants/api';
import imageBase from '../../constants/imageBase';
import { insertCartData,updateCartData } from "../../redux/actions/cartItemActions";
import { insertWishlistData,removeWishlistData } from "../../redux/actions/wishlistItemActions";
import { getUser } from "../../common/user";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Review from '../Element/Review';
import ProductStar from '../Element/ProductStar';
import ProductImageGallery from '../Element/ProductImageGallery';

var img1= require('./../../images/banner/bnr1.jpg');

const Shopproduct = () => {
	const { id } = useParams();
  const [foundProduct, setFoundProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [productImages, setProductImages] = useState([]);
  // const foundProduct = getProductsBySlug(productData, slug);
  console.log("products", foundProduct);
  const [loading, setLoading] = useState(false);
   const[user,setUser]=useState();

   const [activeTab, setActiveTab] = useState("description");

   const dispatch=useDispatch();
   const cartItems = useSelector((state) => state.cartItems.cartItems);
   const wishlistItems=useSelector(state=>state.wishlistItems.wishlistItems);

  const onUpdateCart = (data) => {
    // if (avaiableQuantity === 0) {
    //   return;
    // }
    console.log('updatedata',data);
  if(user){
    console.log('user',user);
    data.contact_id=user.contact_id
    dispatch(updateCartData(data));    }
  else{
   
  }   
   
  };

  const onAddToCart = (data) => {
   
    if(user){
      if(data.price){
    data.contact_id=user.contact_id
  
    dispatch(insertCartData(data));}
    }
    else{
      console.log('please login');
    }
   
  };
  
  const onAddToWishlist = (data) => {
    if(user){

      data.contact_id=user.contact_id
      dispatch(insertWishlistData(data));
      toast.success("Added to wishlist!");
  }
    else{
      console.log('please login');
    }
  };


   
  useEffect(()=>{
   
    const userInfo=getUser();
    setUser(userInfo)

   
  },[])


  useEffect(() => {
    setLoading(true);
    api
      .post("/product/getProductbyproductId", { product_id: id })
      .then((res) => {
        res.data.data[0].tag = String(res.data.data[0].tag).split(",");
        res.data.data[0].images = String(res.data.data[0].images).split(",");
        setFoundProduct(res.data.data[0]);
        api
          .post("/product/getProductbyCategoryId", {
            category_id: res.data.data[0].category_id,
          })
          .then((res) => {
            setRelatedProducts(res.data.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  useEffect(() => {
    api
      .post("/comment/getcommentsByProductId", {
        record_id: id,
        room_name: "product",
      })
      .then((res) => {
        setComments(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
		return(
			<>
				<Header />
				<div className="page-content bg-white">
					
					<div className="dlab-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + img1 + ")"}}>
						<div className="container">
							<div className="dlab-bnr-inr-entry">
								<h1 className="text-white">Shop Details</h1>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={'./'}><i className="fa fa-home"></i></Link></li>
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
										<div className="product-gallery on-show-slider lightgallery" id="lightgallery"> 
											<div className="dlab-box">
{/* <div className="dlab-thum-bx" style={{height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
													 */}
{foundProduct?.images && <ProductImageGallery images={foundProduct?.images} />}
												{/* </div> */}
											</div>
										</div>
									</div> 
									
									<div className="col-lg-6 m-b30">
										<form method="post" className="cart sticky-top">
										<div className="dlab-post-title">
											<h4 className="post-title">{foundProduct.title}</h4>
											<p className="m-b10">{foundProduct.description_short}</p>
											<div className="dlab-divider bg-gray tb15">
												<i className="icon-dot c-square"></i>
											</div>
										</div>
										<div className="relative">
											<h3 className="m-tb10">${foundProduct.price} </h3>
											<div className="shop-item-rating">
												{/* <span className="rating-bx"> 
													<i className="fa fa-star"></i> 
													<i className="fa fa-star"></i> 
													<i className="fa fa-star"></i> 
													<i className="fa fa-star-o"></i> 
													<i className="fa fa-star-o"></i> 
												</span>
												<span>4.5 Rating</span> */}
												<ProductStar ratings={comments}/>
											</div>
											
										</div>
										
										{/* <div className="shop-item-tage">
											<span>Tags :- </span>
											<Link to={''}>Cake</Link>
											<Link to={''}>Coffee</Link>
											<Link to={''}>Pastry</Link>
										</div> */}
                    {foundProduct?.category ? (
       	<div className="shop-item-tage">
          <span>Categories :</span>
          <ul>
            {foundProduct?.category?.map((single, key) => {
              return (
                <li key={key}>
                  <Link to={""}>
                    {single}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
      {foundProduct?.tag ? (
       	<div className="shop-item-tage">
          <span>Tags :</span>
          <ul>
            {foundProduct?.tag?.filter(el=>{return el!== 'null'}).map((single, key) => {
              return (
                <li key={key}>
                  <Link to={""}>
                    {single}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
										<div className="dlab-divider bg-gray tb15">
											<i className="icon-dot c-square"></i>
										</div>
										{/* <div className="row">
											<div className="m-b30 col-md-7 col-sm-8">
												<h6>Product Size</h6>
												<div className="btn-group product-item-size" data-toggle="buttons">
													<label className="btn">
														<input name="options" id="option7" type="radio" /> Large
													</label>
													<label className="btn active">
														<input name="options " id="option8" type="radio" /> Medium
													</label>
													<label className="btn"> 
														<input name="options" id="option9" type="radio" /> Small
													</label>
												</div>
											</div>
											<div className="m-b30 col-md-5 col-sm-4">
												<h6>Select quantity</h6>
												<div className="quantity btn-quantity style-2">
													<Form>
														<Form.Group controlId="exampleForm.SelectCustom">
															
																<Form.Control as="select" custom>
																	<option>1</option>
																	<option>2</option>
																	<option>3</option>
																	<option>4</option>
																	<option>5</option>
																</Form.Control>
														</Form.Group>
													</Form>
												</div>
											</div>
											<div className="m-b30 col-md-12 col-sm-12">
												<h6>Add toppings </h6>
												<div className="btn-group product-item-size" data-toggle="buttons">
													<label className="btn">
														<input name="options" id="veggies" type="radio" /> Veggies
													</label>
													<label className="btn active">
														<input name="options " id="medium" type="radio" /> Medium
													</label>
												</div>
											</div>
										</div> */}
										<button className="btn btnhover" onClick={() => { 
              if(cartItems.filter(
                cartItem => cartItem.product_id === foundProduct.product_id
              )[0]?.qty>0){
                foundProduct.qty=parseFloat(cartItems.filter(
                cartItem => cartItem.product_id === foundProduct.product_id
              )[0]?.qty) +Number(1);
              foundProduct.basket_id=cartItems.filter(
                cartItem => cartItem.product_id === foundProduct.product_id
              )[0].basket_id;
              onUpdateCart(foundProduct)
            }else{
            onAddToCart(foundProduct)
            }
        }}>
											<i className="ti-shopping-cart"></i>Add To Cart
										</button>

                     <button 
                      onClick={() => {
                        const isInWishlist = wishlistItems.filter(
                          wishlistItem => wishlistItem.product_id === foundProduct.product_id
                        )[0];
                        console.log('wishlistitem',isInWishlist);
                        if(isInWishlist) {
                          dispatch(removeWishlistData(isInWishlist));
                          
                        } else {
                          onAddToWishlist(foundProduct);
                        }
                      }} 
                      className={`btn btnhover m-1 ${wishlistItems.some(item => item.product_id === foundProduct.product_id) ? 'btn-primary' : ''}`}
                              >
  <i className="ti-heart m-r5"></i>
  {wishlistItems.some(item => item.product_id === foundProduct.product_id) 
    ? 'Remove from Wishlist' 
    : 'Add To Wishlist'}
                              </button>
									</form>
									</div>
								</div>
								<div className="row">
      <div className="col-lg-12">
        <div className="dlab-tabs product-description tabs-site-button m-t30">
          <ul className="nav nav-tabs">
            <li className={activeTab === "description" ? "active" : ""}>
              <button
                type="button"
                onClick={() => setActiveTab("description")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "10px",
                }}
              >
                Description
              </button>
            </li>
            <li className={activeTab === "reviews" ? "active" : ""}>
              <button
                type="button"
                onClick={() => setActiveTab("reviews")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "10px",
                }}
              >
                Review ({comments.length})
              </button>
            </li>
          </ul>
          <div className="tab-content">
            {activeTab === "description" && (
              <div id="description" className="tab-pane active">
                {foundProduct?.description}
              </div>
            )}
            {activeTab === "reviews" && (
              <div id="reviews" className="tab-pane active">
                <div id="comments">
                  <ol className="commentlist">
                    {comments.length > 0 ? (
                      comments.map((comment, index) => (
                        <li className="comment" key={index}>
                          <div className="comment_container">
                            <img
                              className="avatar avatar-60 photo"
                              src={
                                comment.user_image
                                  ? `${imageBase}${comment?.user_image}`
                                  : require("./../../images/testimonials/pic1.jpg")
                              }
                              alt=""
                            />
                            <div className="comment-text">
							<div className="star-rating">
  <div data-rating={comment.rating || 0}>
    {[...Array(5)].map((_, i) => (
      <i
        key={i}
        style={{ color: "#FFD700" }}
        className={`fa fa-${i < (comment.rating || 0) ? "star" : "star-o"}`}
        data-alt={i + 1}
        title="regular"
      />
    ))}
  </div>
</div>
                              <p className="meta">
                                <strong className="author">
                                  {comment?.first_name || ''}
                                </strong>
                                <span>
                                  {" "}
                                  {comment?.creation_date?new Date(comment.creation_date).toLocaleDateString():''}
                                </span>
                              </p>
                              <div className="description">
                                <p>{comment.comments}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li className="comment">
                        <p>No reviews yet.</p>
                      </li>
                    )}
                  </ol>
                </div>
                {/* <div id="review_form_wrapper">
                  <div id="review_form">
                    <div id="respond" className="comment-respond">
                      <h3 className="comment-reply-title" id="reply-title">
                        Add a review
                      </h3>
                      <p>
                        Your email address will not be published. Required fields
                        are marked *
                      </p>
                      <form className="comment-form" method="post">
                        <div className="comment-form-rating">
                          <label className="pull-left m-r20">Your Rating</label>
                          <div className="rating-widget">
                            <div className="rating-stars">
                              <ul id="stars">
                                {[...Array(5)].map((_, index) => (
                                  <li
                                    key={index}
                                    className="star"
                                    title={[
                                      "Poor",
                                      "Fair",
                                      "Good",
                                      "Excellent",
                                      "WOW!!!",
                                    ][index]}
                                    data-value={index + 1}
                                  >
                                    <i className="fa fa-star fa-fw"></i>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="comment-form-author">
                          <label>
                            Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            aria-required="true"
                            size="30"
                            name="author"
                            id="author"
                          />
                        </div>
                        <div className="comment-form-email">
                          <label>
                            Email <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            aria-required="true"
                            size="30"
                            name="email"
                            id="email"
                          />
                        </div>
                        <div className="comment-form-comment">
                          <label>Your Review</label>
                          <textarea
                            aria-required="true"
                            rows="8"
                            cols="45"
                            name="comment"
                            id="comment"
                          ></textarea>
                        </div>
                        <div className="form-submit">
                          <input
                            type="submit"
                            value="Submit"
                            className="btn"
                            id="submit"
                            name="submit"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div> */}
				<Review/>
              </div>
            )}
			
          </div>
        </div>
      </div>
    </div>
                </div>
              </div>
           
	
						
						<Owl products={relatedProducts} deviceType="desktop" />
						
					</div>
				</div>
				
				
				<Footer />
				
				</>
			)

	
}
 
export default Shopproduct; 

