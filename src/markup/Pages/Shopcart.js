// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import Header from './../Layout/Header';
// import Footer from './../Layout/Footer';
// import {Form} from 'react-bootstrap';

// var img = require('./../../images/banner/bnr3.jpg');

// class Shopcart extends Component{
	
// 	render(){
// 		return(
// 			<>
// 			<Header />
			
// 			 <div className="page-content bg-white">
				
// 				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage:"url(" + img + ")"}}>
// 					<div className="container">
// 						<div className="dlab-bnr-inr-entry">
// 							<h1 className="text-white">Cart</h1>
							
// 							<div className="breadcrumb-row">
// 								<ul className="list-inline">
// 									<li><Link to={'./'}>Home</Link></li>
// 									<li>Shop Cart</li>
// 								</ul>
// 							</div>
							
// 						</div>
// 					</div>
// 				</div>
				
// 				<div className="section-full content-inner">
					
// 					<div className="container">
// 						<div className="row">
// 							<div className="col-lg-12">
// 								<div className="table-responsive m-b50">
// 									<table className="table check-tbl">
// 										<thead>
// 											<tr>
// 												<th>Product</th>
// 												<th>Product name</th>
// 												<th>Unit Price</th>
// 												<th>Quantity</th>
// 												<th>Total</th>
// 												<th>Close</th>
// 											</tr>
// 										</thead>
// 										<tbody>
// 											<tr className="alert">
// 												<td className="product-item-img">
// 													<img src={require('./../../images/product/thumb/item1.jpg')} alt="" />
// 												</td>
// 												<td className="product-item-name">Pizza</td>
// 												<td className="product-item-price">$28.00</td>
// 												<td className="product-item-quantity">
// 													<div className="quantity btn-quantity max-w80">
// 														<Form>
// 															<Form.Group controlId="exampleForm.SelectCustom">
																
// 																	<Form.Control as="select" custom>
// 																		<option>1</option>
// 																		<option>2</option>
// 																		<option>3</option>
// 																		<option>4</option>
// 																		<option>5</option>
// 																	</Form.Control>
// 															</Form.Group>
// 														</Form>
// 													</div>
// 												</td>
// 												<td className="product-item-totle">$28.00</td>
// 												<td className="product-item-close">
// 													<Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
// 												</td>
// 											</tr>
// 											<tr className="alert">
// 												<td className="product-item-img">
// 													<img src={require('./../../images/product/thumb/item2.jpg')} alt="" />
// 												</td>
// 												<td className="product-item-name">Burger</td>
// 												<td className="product-item-price">$28.00</td>
// 												<td className="product-item-quantity">
// 													<div className="quantity btn-quantity max-w80">
// 														<Form>
// 															<Form.Group controlId="exampleForm.SelectCustom">
																
// 																	<Form.Control as="select" custom>
// 																		<option>1</option>
// 																		<option>2</option>
// 																		<option>3</option>
// 																		<option>4</option>
// 																		<option>5</option>
// 																	</Form.Control>
// 															</Form.Group>
// 														</Form>
// 													</div>
// 												</td>
// 												<td className="product-item-totle">$28.00</td>
// 												<td className="product-item-close">
// 													<Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
// 												</td>
// 											</tr>
// 											<tr className="alert">
// 												<td className="product-item-img">
// 													<img src={require('./../../images/product/thumb/item3.jpg')} alt="" />
// 												</td>
// 												<td className="product-item-name">Cup Cake</td>
// 												<td className="product-item-price">$28.00</td>
// 												<td className="product-item-quantity">
// 													<div className="quantity btn-quantity max-w80">
// 														<Form>
// 															<Form.Group controlId="exampleForm.SelectCustom">
																
// 																	<Form.Control as="select" custom>
// 																		<option>1</option>
// 																		<option>2</option>
// 																		<option>3</option>
// 																		<option>4</option>
// 																		<option>5</option>
// 																	</Form.Control>
// 															</Form.Group>
// 														</Form>
// 													</div>
// 												</td>
// 												<td className="product-item-totle">$28.00</td>
// 												<td className="product-item-close">
// 													<Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
// 												</td>
// 											</tr>
// 											<tr className="alert">
// 												<td className="product-item-img">
// 													<img src={require('./../../images/product/thumb/item4.jpg')} alt="" />
// 												</td>
// 												<td className="product-item-name">Pizza</td>
// 												<td className="product-item-price">$28.00</td>
// 												<td className="product-item-quantity">
// 													<div className="quantity btn-quantity max-w80">
// 														<Form>
// 															<Form.Group controlId="exampleForm.SelectCustom">
																
// 																	<Form.Control as="select" custom>
// 																		<option>1</option>
// 																		<option>2</option>
// 																		<option>3</option>
// 																		<option>4</option>
// 																		<option>5</option>
// 																	</Form.Control>
// 															</Form.Group>
// 														</Form>
// 													</div>
// 												</td>
// 												<td className="product-item-totle">$28.00</td>
// 												<td className="product-item-close">
// 													<Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
// 												</td>
// 											</tr>
// 											<tr className="alert">
// 												<td className="product-item-img">
// 													<img src={require('./../../images/product/thumb/item5.jpg')} alt="" />
// 												</td>
// 												<td className="product-item-name">Burger</td>
// 												<td className="product-item-price">$28.00</td>
// 												<td className="product-item-quantity">
// 													<div className="quantity btn-quantity max-w80">
// 														<Form>
// 															<Form.Group controlId="exampleForm.SelectCustom">
																
// 																	<Form.Control as="select" custom>
// 																		<option>1</option>
// 																		<option>2</option>
// 																		<option>3</option>
// 																		<option>4</option>
// 																		<option>5</option>
// 																	</Form.Control>
// 															</Form.Group>
// 														</Form>
// 													</div>
// 												</td>
// 												<td className="product-item-totle">$28.00</td>
// 												<td className="product-item-close">
// 													<Link to={''} data-dismiss="alert" aria-label="close" className="ti-close"></Link>
// 												</td>
// 											</tr>
// 										</tbody>
// 									</table>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="row">
// 							<div className="col-lg-6 col-md-6 m-b30">
// 								<form className="shop-form"> 
// 									<h3>Calculate Shipping</h3>
// 									<div className="form-group">
// 										<Form.Group controlId="exampleForm.ControlSelect1">
// 											<Form.Control as="select">
// 												<option value="">Credit Card Type</option>
// 												<option value="">Another option</option>
// 												<option value="">A option</option>
// 												<option value="">Potato</option>
												
// 											</Form.Control>
// 										</Form.Group>
											
// 									</div>	
// 									<div className="row">
// 										<div className="form-group col-lg-6">
// 											<input type="text" className="form-control" placeholder="Credit Card Number" />
// 										</div>
// 										<div className="form-group col-lg-6">
// 											<input type="text" className="form-control" placeholder="Card Verification Number" />
// 										</div>
// 									</div>
// 									<div className="form-group">
// 										<input type="text" className="form-control" placeholder="Coupon Code" />
// 									</div>
// 									<div className="form-group">
// 									<button className="btn btnhover" type="button">Apply Coupon</button>
// 								</div>
// 								</form>	
// 							</div>
// 							<div className="col-lg-6 col-md-6">
// 								<h3>Cart Subtotal</h3>
// 								<table className="table-bordered check-tbl">
// 									<tbody>
// 										<tr>
// 											<td>Order Subtotal</td>
// 											<td>$125.96</td>
// 										</tr>
// 										<tr>
// 											<td>Shipping</td>
// 											<td>Free Shipping</td>
// 										</tr>
// 										<tr>
// 											<td>Coupon</td>
// 											<td>$28.00</td>
// 										</tr>
// 										<tr>
// 											<td>Total</td>
// 											<td>$506.00</td>
// 										</tr>
// 									</tbody>
// 								</table>
// 								<div className="form-group">
// 									<button className="btn btnhover" type="button">Proceed to Checkout</button>
// 								</div>
// 							</div>
// 						</div>
// 				   </div>
					
// 				</div>
				
// 			</div>
			
// 			<Footer  />
// 			</>
// 		)
// 	}
// } 


//  export default Shopcart;

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// //import { Link } from 'react-router-dom';
// import { Form } from 'react-bootstrap';
// import Header from './../Layout/Header';
// import Footer from './../Layout/Footer';
// import { fetchCart,updateCart, deleteFromCart } from '../../redux/features/cartSlice';
// import store from '../../redux/store';

// const Shopcart = () => {
//     const dispatch = useDispatch();
//     // const { items, loading } = useSelector(state => state.cart);
// 	// const cartState = useSelector(state => state.cart);
// 	const cartItems = store.getState().cart.items;
// 	console.log('cartitems',cartItems);
//     const userId = 1; // Replace with actual user ID logic
//  	const loading=false;
// const items=[];
//     useEffect(() => {
//         dispatch(fetchCart(userId));
//     }, [dispatch, userId]);

//     const handleQuantityChange = (productId, quantity) => {
//         dispatch(updateCart({ userId, productId, quantity }));
//     };

//     const handleRemove = (productId) => {
//         dispatch(deleteFromCart({ userId, productId }));
//     };

//     return (
//         <>
//             <Header />
//             <div className="page-content bg-white">
//                 <div className="section-full content-inner">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <div className="table-responsive m-b50">
//                                     <table className="table check-tbl">
//                                         <thead>
//                                             <tr>
//                                                 <th>Product</th>
//                                                 <th>Product Name</th>
//                                                 <th>Unit Price</th>
//                                                 <th>Quantity</th>
//                                                 <th>Total</th>
//                                                 <th>Remove</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {loading ? (
//                                                 <tr><td colSpan="6">Loading...</td></tr>
//                                             ) : (
//                                                 items?.map(item => (
//                                                     <tr key={item.id}>
//                                                         <td className="product-item-img">
//                                                             <img src={item.image} alt={item.name} width="50" />
//                                                         </td>
//                                                         <td>{item.name}</td>
//                                                         <td>${item.price.toFixed(2)}</td>
//                                                         <td>
//                                                             <Form.Control
//                                                                 as="select"
//                                                                 value={item.quantity}
//                                                                 onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
//                                                             >
//                                                                 {[1, 2, 3, 4, 5].map(num => (
//                                                                     <option key={num} value={num}>{num}</option>
//                                                                 ))}
//                                                             </Form.Control>
//                                                         </td>
//                                                         <td>${(item.price * item.quantity).toFixed(2)}</td>
//                                                         <td>
//                                                             <button onClick={() => handleRemove(item.id)} className="btn btn-danger">X</button>
//                                                         </td>
//                                                     </tr>
//                                                 ))
//                                             )}
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     );
// };

// export default Shopcart;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {
	fetchCartData,
	removeCartData,
	clearCartData,
	updateCartData,
  } from "../../redux/actions/cartItemActions";

const Shopcart = () => {
    const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user")); // Replace with your auth logic
const cartItems = useSelector((state) => state.cartItems.cartItems);
console.log('Cart Items:', cartItems);
  const loading=false;
    const userId = 1; // Replace with actual user ID logic

    useEffect(() => {
        dispatch(fetchCartData(user));
    }, [dispatch, user]);

    const handleQuantityChange = (productId, quantity) => {
        dispatch(updateCartData({ userId, productId, quantity }));
    };

    const handleRemove = (productId) => {
        dispatch(removeCartData({ userId, productId }));
    };

    return (
        <>
            <Header />
            <div className="page-content bg-white">
                <div className="section-full content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-responsive m-b50">
                                    <table className="table check-tbl">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Product Name</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <tr><td colSpan="6">Loading...</td></tr>
                                            ) : (
                                                cartItems?.map((item) => (
                                                    <tr key={item.id}>
                                                        <td className="product-item-img">
                                                            <img src={item.image} alt={item.name} width="50" />
                                                        </td>
                                                        <td>{item.name}</td>
                                                        <td>${item.price.toFixed(2)}</td>
                                                        <td>
                                                            <Form.Control
                                                                as="select"
                                                                value={item.quantity}
                                                                onChange={(e) =>
                                                                    handleQuantityChange(item.id, Number(e.target.value))
                                                                }
                                                            >
                                                                {[1, 2, 3, 4, 5].map((num) => (
                                                                    <option key={num} value={num}>
                                                                        {num}
                                                                    </option>
                                                                ))}
                                                            </Form.Control>
                                                        </td>
                                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                                        <td>
                                                            <button
                                                                onClick={() => handleRemove(item.id)}
                                                                className="btn btn-danger"
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
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

export default Shopcart;
