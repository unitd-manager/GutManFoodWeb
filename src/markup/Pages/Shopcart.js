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


import React, { useEffect,useCallback,useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory,Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import {
	fetchCartData,
	removeCartData,
	clearCartData,
	updateCartData,
  } from "../../redux/actions/cartItemActions";
import imageBase from '../../constants/imageBase';
import Swal from 'sweetalert2';

const bnr = require('./../../images/banner/bnr2.jpg');

const Shopcart = () => {
    const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user")); // Replace with your auth logic
const cartItems = useSelector((state) => state.cartItems.cartItems);
console.log('Cart Items:', cartItems);
console.log('state',useSelector((state) => state));
  const loading=false;
    const userId = 1; // Replace with actual user ID logic
const history=useHistory();
    useEffect(() => {
        dispatch(fetchCartData(user));
    }, []);

	const cartTotalPrice = useMemo(() => {
		return cartItems.reduce((total, item) => {
			const discountedPrice = item.price;
		  return total + discountedPrice * item.qty;
		}, 0);
	  }, [cartItems]);
   
  const handleIncreaseQuantity = useCallback(
    (item) => {
      const updatedItem = { ...item, qty: item.qty + 1 };
      dispatch(updateCartData(updatedItem));
    },
    [dispatch]
  );

  const handleDecreaseQuantity = useCallback(
    (item) => {
      if (item.qty > 1) {
        const updatedItem = { ...item, qty: item.qty - 1 };
        dispatch(updateCartData(updatedItem));
      }
    },
    [dispatch]
  );
    const handleRemove = (item) => {
      console.log('deletable product',item);
        dispatch(removeCartData(item));
    };
	// const handleClearCart = useCallback(() => {
	// 	const confirmClear = window.confirm(
	// 	  "Are you sure you want to clear the cart?"
	// 	);
	// 	if (confirmClear) {
	// 	  dispatch(clearCartData(user));
	// 	}
	//   }, [dispatch, user]);

   const handleClearCart = useCallback(() => {
              Swal.fire({
                title: 'Are you sure?',
                text: "Do you really want to clear the cart?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, clear it!',
                cancelButtonText: 'Cancel',
              }).then((result) => {
                if (result.isConfirmed) {
                  dispatch(clearCartData(user));
                  Swal.fire({
                    title: 'Cleared!',
                    text: 'Your cart has been cleared.',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                  });
                }
              });
            }, [dispatch, user]);
    
    return (
        <>
            <Header />
            <div className="page-content bg-white">
            <div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{ backgroundImage: `url(${bnr})` }}>
                    <div className="container">
                        <div className="dlab-bnr-inr-entry">
                            <h1 className="text-white">Cart</h1>
                            <div className="breadcrumb-row">
                                <ul className="list-inline">
                                    <li><Link to={'./'}>Home</Link></li>
                                    <li>Cart</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
                                               cartItems.length > 0 ? cartItems?.map((item) => (
                                                    <tr key={item.basket_id}>
                                                        <td className="product-item-img">
                                                            <Link
                                                                                                                                                      to={`/shop-product-details/${item.product_id}`}
                                                                                                                                                    >
                                                        <img
    src={`${imageBase}${Array.isArray(item?.images) ? item?.images[0] : item?.images}`}
    alt={item.title}
    width="50"
  />
  </Link>
                                                        </td>
                                                        <td>  <Link to={`/shop-product-details/${item.product_id}`} >{item.title}</Link></td>
                                                        <td>₹{item?.price?.toFixed(2)}</td>
                                                        <td>
														<td style={{ border: "none" }} >
                           							<div style={{
  display: "flex",
  alignItems: "center",
  border: "none",
  borderRadius: "6px",
  overflow: "hidden",
  maxWidth: "120px"
}}>
  <button 
    onClick={() => handleDecreaseQuantity(item)} 
    style={{
      background: "#f5f5f5",
      border: "none",
      padding: "8px 12px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background 0.3s"
    }}
    onMouseEnter={(e) => e.target.style.background = "#ddd"}
    onMouseLeave={(e) => e.target.style.background = "#f5f5f5"}
  >
    -
  </button>
  <input 
    type="text" 
    value={item.qty} 
    readOnly 
    style={{
      width: "40px",
      textAlign: "center",
      border: "none",
      fontSize: "16px",
      padding: "5px 0"
    }}
  />
  <button 
    onClick={() => handleIncreaseQuantity(item)} 
    style={{
      background: "#f5f5f5",
      border: "none",
      padding: "8px 12px",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background 0.3s"
    }}
    onMouseEnter={(e) => e.target.style.background = "#ddd"}
    onMouseLeave={(e) => e.target.style.background = "#f5f5f5"}
  >
    +
  </button>
</div>

                          </td>
                                                        </td>
                                                        <td>₹{(item.price * item.qty).toFixed(2)}</td>
                                                        <td>
                                                            <button
                                                                onClick={() => handleRemove(item)}
                                                                className="btn btn-danger"
                                                            >
                                                                X
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )):  (
													<tr>
														<td colSpan="6" className="text-center">Your cart is empty.</td>
													</tr>
												)
											   
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                {cartItems.length > 0 && <div className="text-right">
                                    <button 
                                        onClick={handleClearCart}
                                        className="btn btn-danger mt-3"
                                        style={{marginBottom: '20px'}}
                                    >
                                        Clear Cart
                                    </button>
                                </div>}
								<div className="row">
 							<div className="col-lg-6 col-md-6 m-b30">
               <form className="shop-form"> 
  <h3>Calculate Shipping</h3>

  {/* Credit Card Type Dropdown */}
  <div className="form-group">
    <Form.Group controlId="creditCardType">
      <Form.Control as="select" required>
        <option value="">Select Credit Card Type</option>
        <option value="visa">Visa</option>
        <option value="mastercard">MasterCard</option>
        <option value="amex">American Express</option>
        <option value="discover">Discover</option>
        <option value="rupay">Rupay</option>
      </Form.Control>
    </Form.Group>
  </div>	
  
  <div className="row">
    {/* Credit Card Number - Only Numbers Allowed */}
    <div className="form-group col-lg-6">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Credit Card Number" 
        maxLength="16"
        pattern="\d*"
        onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} // Allow only digits
      />
    </div>

    {/* CVV Field - Only Numbers Allowed */}
    <div className="form-group col-lg-6">
      <input 
        type="text" 
        className="form-control" 
        placeholder="Card Verification Number (CVV)" 
        maxLength="4"
        pattern="\d*"
        onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')} // Allow only digits
      />
    </div>
  </div>

  {/* Coupon Code Field */}
  <div className="form-group">
    <input type="text" className="form-control" placeholder="Coupon Code" />
  </div>

  {/* Apply Coupon Button */}
  <div className="form-group">
    <button className="btn btnhover" type="button">Apply Coupon</button>
  </div>
</form>

							</div>
 							<div className="col-lg-6 col-md-6">
 								<h3>Cart Subtotal</h3>
 								<table className="table-bordered check-tbl">
 									<tbody>
 										<tr>
 											<td>Order Subtotal</td>
 											<td>{`₹ ${cartTotalPrice.toFixed(2)}`}</td>
 										</tr>
 										<tr>
 											<td>Shipping</td>
 											<td>Free Shipping</td>
 										</tr>
 										{/* <tr>
 											<td>Coupon</td>
 											<td>$00.00</td>
 										</tr> */}
 										<tr>
 											<td>Total</td>
 											<td>{`₹ ${cartTotalPrice.toFixed(2)}`}</td> 										</tr>
 									</tbody>
 								</table>
 								{cartItems.length > 0 &&<div className="form-group">
 									<button className="btn btnhover" onClick={()=>{history.push('/shop-checkout',cartItems)}} type="button">Proceed to Checkout</button>
 								</div>}
 							</div>
 						</div> 				   </div>
					
 				</div>
                            </div>
                        </div>
                    </div>
                
            
            <Footer />
        </>
    );
};

export default Shopcart;
