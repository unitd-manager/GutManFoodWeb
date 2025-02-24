
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import { Form } from 'react-bootstrap';
import { clearWishlistData, fetchWishlistData,removeWishlistData } from "../../redux/actions/wishlistItemActions";
import { insertCartData,updateCartData } from "../../redux/actions/cartItemActions";
  import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../common/user';
import imageBase from '../../constants/imageBase';

const bnr = require('./../../images/banner/bnr2.jpg');

const Shopwishlist = () => {
	const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
const wishlistItems=useSelector(state=>state.wishlistItems.wishlistItems);
const cartItems = useSelector((state) => state.cartItems.cartItems);
console.log('wishlistItems',wishlistItems);
const dispatch=useDispatch();
  const getWishlistItems=(userin)=>{
    dispatch(fetchWishlistData(userin))
   
  }

  const deleteItemFromWishlist = (Item) => {
  
    dispatch(removeWishlistData(Item))
 
  };

  const clearWishlistItems = () => {
    dispatch(clearWishlistData(user))
  
  };

  const onAddToCart = (data) => {

    data.contact_id = user.contact_id;
    dispatch(insertCartData(data));
  
  };

	const onUpdateCart = (data) => {
	 
	  
	  data.contact_id=user.contact_id
	  dispatch(updateCartData(data));    	 
	};
  
	
  useEffect(() => {
    // setLoading(true)
    const userInfo = getUser();
    setUser(userInfo);
    if (userInfo) {
getWishlistItems(userInfo)

    }
    else{
     setLoading(false) 
    }
  }, []);
   

  
    return (
        <>
            <Header />
            <div className="page-content bg-white">
                <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: `url(${bnr})` }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Wishlist</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link to={'./'}>Home</Link></li>
                                    <li>Wishlist</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-full content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-responsive">
                                    <table className="table check-tbl">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Product Name</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Add to Cart</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wishlistItems.length > 0 ? (
                                                wishlistItems.map(item => (
                                                    <tr key={item.id} className="alert">
                                                        <td className="product-item-img">
                                                            <img src={`${imageBase}${item.images[0]}`} alt={item.title} />
                                                        </td>
                                                        <td className="product-item-name">{item.title}</td>
                                                        <td className="product-item-price">${item.price?.toFixed(2)}</td>
                                                        <td className="product-item-quantity">
                                                            <div className="quantity btn-quantity max-w80">
                                                                <Form>
                                                                    <Form.Group controlId={`quantity-${item.id}`}>
                                                                        <Form.Control as="select">
                                                                            {[1, 2, 3, 4, 5].map(qty => (
                                                                                <option key={qty} value={qty}>{qty}</option>
                                                                            ))}
                                                                        </Form.Control>
                                                                    </Form.Group>
                                                                </Form>
                                                            </div>
                                                        </td>
                                                        <td className="product-item-totle">
                                                            <button 
                                                                className="btn btnhover" 
                                                                onClick={() => { 
																	if(cartItems.filter(
																	  cartItem => cartItem.product_id === item.product_id
																	)[0]?.qty>0){
																		item.qty=parseFloat(cartItems.filter(
																	  cartItem => cartItem.product_id === item.product_id
																	)[0]?.qty) +Number(1);
																	item.basket_id=cartItems.filter(
																	  cartItem => cartItem.product_id === item.product_id
																	)[0].basket_id;
																	onUpdateCart(item)
																  }else{
																  onAddToCart(item)
																  }
															  }}
                                                            >
                                                                Add To Cart
                                                            </button>
                                                        </td>
                                                        <td className="product-item-close">
                                                            <button 
                                                                className="btn btn-danger" 
                                                                onClick={() => deleteItemFromWishlist(item)}
                                                            >
                                                                ×
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="6" className="text-center">Your wishlist is empty.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
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

export default Shopwishlist;
