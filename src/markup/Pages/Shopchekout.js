// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import Header from './../Layout/Header';
// import Footer from './../Layout/Footer';

// import {Form} from 'react-bootstrap';

// var bnr = require('./../../images/banner/bnr1.jpg');

// class Shopchekout extends Component{

// 	render(){
// 		return(
// 			<>
// 			<Header />

// 			<div className="page-content bg-white">

// 				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage: "url(" + bnr + ")"}}>
// 					<div className="container">
// 						<div className="dlab-bnr-inr-entry">
// 							<h1 className="text-white">Checkout</h1>

// 							<div className="breadcrumb-row">
// 								<ul className="list-inline">
// 									<li><Link to={'./'}>Home</Link></li>
// 									<li>Checkout</li>
// 								</ul>
// 							</div>

// 						</div>
// 					</div>
// 				</div>

// 				<div className="section-full content-inner">

// 					<div className="container">
// 						<form className="shop-form">
// 							<div className="row">
// 								<div className="col-lg-6 col-md-12 m-b30">
// 									<h3>Billing & Shipping Address</h3>
// 									<div className="form-group">
// 										<Form.Group controlId="exampleForm.ControlSelect1">

// 											<Form.Control as="select" >
// 												<option value="">Åland Islands</option>
// 												<option value="">Afghanistan</option>
// 												<option value="">Albania</option>
// 												<option value="">Algeria</option>
// 												<option value="">Andorra</option>
// 												<option value="">Angola</option>
// 												<option value="">Anguilla</option>
// 												<option value="">Antarctica</option>
// 												<option value="">Antigua and Barbuda</option>
// 												<option value="">Argentina</option>
// 												<option value="">Armenia</option>
// 												<option value="">Aruba</option>
// 												<option value="">Australia</option>
// 											</Form.Control>

// 										</Form.Group>
// 									</div>
// 									<div className="row">
// 										<div className="form-group col-md-6">
// 											<input type="text" className="form-control" placeholder="First Name" />
// 										</div>
// 										<div className="form-group col-md-6">
// 											<input type="text" className="form-control" placeholder="Last Name" />
// 										</div>
// 									</div>
// 									<div className="form-group">
// 										<input type="text" className="form-control" placeholder="Company Name" />
// 									</div>
// 									<div className="form-group">
// 										<input type="text" className="form-control" placeholder="Address" />
// 									</div>
// 									<div className="row">
// 										<div className="form-group col-md-6">
// 											<input type="text" className="form-control" placeholder="Apartment, suite, unit etc." />
// 										</div>
// 										<div className="form-group col-md-6">
// 											<input type="text" className="form-control" placeholder="Town / City" />
// 										</div>
// 									</div>
// 									<div className="row">
// 										<div className="form-group col-md-6">
// 											<input type="text" className="form-control" placeholder="State / County" />
// 										</div>
// 										<div className="form-group col-md-6">
// 											<input type="text" className="form-control" placeholder="Postcode / Zip" />
// 										</div>
// 									</div>
// 									<div className="row">
// 										<div className="form-group col-md-6">
// 											<input type="email" className="form-control" placeholder="Email" />
// 										</div>
// 										<div className="form-group col-md-6">
// 											<input type="text" className="form-control" placeholder="Phone" />
// 										</div>
// 									</div>
// 									<h4>
// 										<button className="btn-link text-black" type="button" data-toggle="collapse" data-target="#create-an-account">Create an account
// 											<i className="fa fa-angle-down"></i>
// 										</button>
// 									</h4>
// 									<div id="create-an-account" className="collapse">
// 										<p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
// 										<div className="form-group">
// 											<input type="password" className="form-control" placeholder="Password" />
// 										</div>
// 									</div>
// 								</div>
// 								<div className="col-lg-6 col-md-12 m-b30 m-md-b0">
// 									<h3><button className="btn-link text-black" type="button" data-toggle="collapse" data-target="#different-address">Ship to a different address <i className="fa fa-angle-down"></i></button></h3>
// 									<div id="different-address" className="collapse">
// 										<p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing & Shipping section.</p>
// 										<div className="form-group">
// 											<Form.Group controlId="exampleForm.ControlSelect1">

// 												<Form.Control as="select" >
// 													<option value="">Åland Islands</option>
// 													<option value="">Afghanistan</option>
// 													<option value="">Albania</option>
// 													<option value="">Algeria</option>
// 													<option value="">Andorra</option>
// 													<option value="">Angola</option>
// 													<option value="">Anguilla</option>
// 													<option value="">Antarctica</option>
// 													<option value="">Antigua and Barbuda</option>
// 													<option value="">Argentina</option>
// 													<option value="">Armenia</option>
// 													<option value="">Aruba</option>
// 													<option value="">Australia</option>
// 												</Form.Control>

// 											</Form.Group>
// 										</div>
// 										<div className="row">
// 											<div className="form-group col-md-6">
// 												<input type="text" className="form-control" placeholder="First Name" />
// 											</div>
// 											<div className="form-group col-md-6">
// 												<input type="text" className="form-control" placeholder="Last Name" />
// 											</div>
// 										</div>
// 										<div className="form-group">
// 											<input type="text" className="form-control" placeholder="Company Name" />
// 										</div>
// 										<div className="form-group">
// 											<input type="text" className="form-control" placeholder="Address" />
// 										</div>
// 										<div className="row">
// 											<div className="form-group col-md-6">
// 												<input type="text" className="form-control" placeholder="Apartment, suite, unit etc." />
// 											</div>
// 											<div className="form-group col-md-6">
// 												<input type="text" className="form-control" placeholder="Town / City" />
// 											</div>
// 										</div>
// 										<div className="row">
// 											<div className="form-group col-md-6">
// 												<input type="text" className="form-control" placeholder="State / County" />
// 											</div>
// 											<div className="form-group col-md-6">
// 												<input type="text" className="form-control" placeholder="Postcode / Zip" />
// 											</div>
// 										</div>
// 										<div className="row">
// 											<div className="form-group col-md-6">
// 												<input type="email" className="form-control" placeholder="Email" />
// 											</div>
// 											<div className="form-group col-md-6">
// 												<input type="text" className="form-control" placeholder="Phone" />
// 											</div>
// 										</div>
// 										<p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
// 									</div>
// 									<div className="form-group">
// 										<textarea className="form-control" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
// 									</div>
// 								</div>
// 							</div>
// 						</form>
// 						<div className="dlab-divider bg-gray-dark text-gray-dark icon-center"><i className="fa fa-circle bg-white text-gray-dark"></i></div>
// 						<div className="row">
// 							<div className="col-lg-6">
// 								<h3>Your Order</h3>
// 								<table className="table-bordered check-tbl">
// 									<thead>
// 										<tr>
// 											<th>IMAGE</th>
// 											<th>PRODUCT NAME</th>
// 											<th>TOTAL</th>
// 										</tr>
// 									</thead>
// 									<tbody>
// 										<tr>
// 											<td><img src={require('./../../images/product/item1.jpg')} alt="" /></td>
// 											<td>Cup Cake</td>
// 											<td className="product-price">$28.00</td>
// 										</tr>
// 										<tr>
// 											<td><img src={require('./../../images/product/item2.jpg')} alt="" /></td>
// 											<td>Pizza</td>
// 											<td className="product-price">$36.00</td>
// 										</tr>
// 										<tr>
// 											<td><img src={require('./../../images/product/item3.jpg')} alt="" /></td>
// 											<td>Burger</td>
// 											<td className="product-price">$28.00</td>
// 										</tr>
// 										<tr>
// 											<td><img src={require('./../../images/product/item4.jpg')} alt="" /></td>
// 											<td>Chow Mein</td>
// 											<td className="product-price">$36.00</td>
// 										</tr>
// 										<tr>
// 											<td><img src={require('./../../images/product/item5.jpg')} alt="" /></td>
// 											<td>Pizza</td>
// 											<td className="product-price">$28.00</td>
// 										</tr>
// 									</tbody>
// 								</table>
// 							</div>
// 							<div className="col-lg-6">
// 								<form className="shop-form">
// 									<h3>Order Total</h3>
// 									<table className="table-bordered check-tbl">
// 										<tbody>
// 											<tr>
// 												<td>Order Subtotal</td>
// 												<td className="product-price">$125.96</td>
// 											</tr>
// 											<tr>
// 												<td>Shipping</td>
// 												<td>Free Shipping</td>
// 											</tr>
// 											<tr>
// 												<td>Coupon</td>
// 												<td className="product-price">$28.00</td>
// 											</tr>
// 											<tr>
// 												<td>Total</td>
// 												<td className="product-price-total">$506.00</td>
// 											</tr>
// 										</tbody>
// 									</table>
// 									<h4>Payment Method</h4>
// 									<div className="form-group">
// 										<input type="text" className="form-control" placeholder="Name on Card" />
// 									</div>
// 									<div className="form-group">
// 										<Form.Group controlId="exampleForm.ControlSelect1">

// 											<Form.Control as="select" >
// 												<option value="">Credit Card Type</option>
// 												<option value="">Another option</option>
// 												<option value="">A option</option>
// 												<option value="">Potato</option>
// 											</Form.Control>

// 										</Form.Group>
// 									</div>
// 									<div className="form-group">
// 										<input type="text" className="form-control" placeholder="Credit Card Number" />
// 									</div>
// 									<div className="form-group">
// 										<input type="text" className="form-control" placeholder="Card Verification Number" />
// 									</div>
// 									<div className="form-group">
// 										<button className="btn button-lg btnhover btn-block" type="button">Place Order Now </button>
// 									</div>
// 								</form>
// 							</div>
// 						</div>
// 				   </div>

// 				</div>

// 			</div>

// 			<Footer />
// 			</>
// 		)

// 	}
// }

// export default Shopchekout;

import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Form } from "react-bootstrap";
import api from "../../constants/api";
import { getUser } from "../../common/user";
import imageBase from "../../constants/imageBase";

const bnr = require("./../../images/banner/bnr1.jpg");

const ShopCheckout = () => {
  const location = useLocation();
  const cartItems = location.state || {};
  const history = useHistory();

  const [orderDetail, setOrderDetail] = useState({});
  const [allCountries, setAllCountries] = useState([]);

  console.log("cartItems", cartItems);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    api
      .get("/commonApi/getCountry")
      .then((res) => setAllCountries(res.data.data))
      .catch((error) => console.error("Error fetching countries:", error));
  };

  const handleOrderDetail = (e) => {
    setOrderDetail({ ...orderDetail, [e.target.name]: e.target.value });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  console.log("getTotalPrice", getTotalPrice());

  const user = getUser();
  const userContactId = user?.contact_id;

  const removeBasket = async () => {
    try {
      await api.post("/orders/deleteBasketContact", {
        contact_id: userContactId,
      });
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const placeOrder = () => {
    api
      .post("/orders/insertorders", {
        ...orderDetail,
        contact_id: userContactId,
      })
      .then((response) => {
        if (response.status === 200) {
          const orderId = response.data.data.insertId;
          Promise.all(
            cartItems.map((item) =>
              api.post("/orders/insertOrderItem1", {
                qty: item.qty,
                unit_price: item.price,
                contact_id: userContactId,
                order_id: orderId,
                cost_price: item.qty * item.price,
                item_title: item.title,
                product_id: item.product_id,
              })
            )
          )
            .then((responses) => {
              if (responses.every((res) => res.status === 200)) {
                sendEmail();
                removeBasket();
              } else {
                console.error("Error placing order items");
              }
            })
            .catch((error) =>
              console.error("Error placing order items:", error)
            );
        } else {
          console.error("Order placement error");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const sendEmail = () => {
    api
      .post("/commonApi/sendUseremail", {
        to: orderDetail.shipping_email,
        subject: "Order Confirmed",
        phone: orderDetail.shipping_phone,
        names: orderDetail.shipping_first_name,
        address: orderDetail.shipping_address1,
        city: orderDetail.shipping_address_city,
        state: orderDetail.shipping_address_state,
        Country: orderDetail.shipping_address_country_code,
        TotalAmount: getTotalPrice(),
        code: orderDetail.shipping_address_po_code,
      })
      .then((response) => {
        if (response.status === 200) {
          window.confirm("Orders Sent successfully on your mail.");
          history.push("/Shop");
        } else {
          console.error("Error sending email");
        }
      });
  };

  const handlePaymentSuccess = (data) => {
    console.log("Payment Successful:", data);
    placeOrder();
  };

  const handlePaymentFailure = (error) => {
    console.error("Payment Failed:", error);
  };

  const onPaymentPress = () => {
    if (
      !orderDetail.shipping_first_name ||
      !orderDetail.shipping_email ||
      !orderDetail.shipping_phone ||
      !orderDetail.shipping_address1
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const totalAmount = getTotalPrice();
    const amountInPaise = totalAmount * 100;

    const options = {
      key: "rzp_test_yE3jJN90A3ObCp",
      key_secret: "tt8BnBOG7yRvYZ6TSB28RXJy",
      amount: amountInPaise,
      currency: "INR",
      name: "United",
      description: "Purchase Description",
      image: "",
      handler: handlePaymentSuccess,
      prefill: {
        name: orderDetail.shipping_first_name,
        email: orderDetail.shipping_email,
        contact: orderDetail.shipping_phone,
      },
      notes: { address: "Corporate Office" },
      theme: { color: "#532C6D" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    rzp.on("payment.failed", handlePaymentFailure);
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Checkout</h1>

              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"./"}>Home</Link>
                  </li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full content-inner">
          <div className="container">
            <form className="shop-form">
              <div className="row">
                <div className="col-lg-6 col-md-12 m-b30">
                  <h3>Billing & Shipping Address</h3>
                  <div className="form-group">
                    <Form.Control
                      as="select"
                      onChange={handleOrderDetail}
                      name="shipping_address_country_code"
                      value={orderDetail?.shipping_address_country_code || ""}
                    >
                      {allCountries?.map((country, index) => (
                        <option key={index} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </Form.Control>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        value={orderDetail && orderDetail.shipping_first_name}
                        onChange={handleOrderDetail}
                        name="shipping_first_name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        name="shipping_last_name"
                        value={orderDetail && orderDetail.shipping_last_name}
                        onChange={handleOrderDetail}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                      name="selling_company"
                      value={orderDetail && orderDetail.selling_company}
                      onChange={handleOrderDetail}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      name="shipping_address1"
                      value={orderDetail && orderDetail.shipping_address1}
                      onChange={handleOrderDetail}
                    />
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apartment, suite, unit etc."
                        name="shipping_address2"
                        value={orderDetail && orderDetail.shipping_address2}
                        onChange={handleOrderDetail}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Town / City"
                        name="shipping_address_city"
                        value={orderDetail && orderDetail.shipping_address_city}
                        onChange={handleOrderDetail}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="State / County"
                        name="shipping_address_state"
                        value={
                          orderDetail && orderDetail.shipping_address_state
                        }
                        onChange={handleOrderDetail}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Postcode / Zip"
                        name="shipping_address_po_code"
                        value={
                          orderDetail && orderDetail.shipping_address_po_code
                        }
                        onChange={handleOrderDetail}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="shipping_email"
                        value={orderDetail && orderDetail.shipping_email}
                        onChange={handleOrderDetail}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        name="shipping_phone"
                        value={orderDetail && orderDetail.shipping_phone}
                        onChange={handleOrderDetail}
                      />
                    </div>
                  </div>
                  <h4>
                    {/* <button
                      className="btn-link text-black"
                      type="button"
                      data-toggle="collapse"
                      data-target="#create-an-account"
                    >
                      Create an account
                      <i className="fa fa-angle-down"></i>
                    </button> */}
                  </h4>
                  <div id="create-an-account" className="collapse">
                    <p>
                      Create an account by entering the information below. If
                      you are a returning customer please login at the top of
                      the page.
                    </p>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 m-b30 m-md-b0">
                  <h3>
                    <button
                      className="btn-link text-black"
                      type="button"
                      data-toggle="collapse"
                      data-target="#different-address"
                    >
                      Ship to a different address{" "}
                      <i className="fa fa-angle-down"></i>
                    </button>
                  </h3>
                  <div id="different-address" className="collapse">
                    <p>
                      If you have shopped with us before, please enter your
                      details in the boxes below. If you are a new customer
                      please proceed to the Billing & Shipping section.
                    </p>
                    <div className="form-group">
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select">
                          <option value="">Åland Islands</option>
                          <option value="">Afghanistan</option>
                          <option value="">Albania</option>
                          <option value="">Algeria</option>
                          <option value="">Andorra</option>
                          <option value="">Angola</option>
                          <option value="">Anguilla</option>
                          <option value="">Antarctica</option>
                          <option value="">Antigua and Barbuda</option>
                          <option value="">Argentina</option>
                          <option value="">Armenia</option>
                          <option value="">Aruba</option>
                          <option value="">Australia</option>
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, suite, unit etc."
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Town / City"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="State / County"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Postcode / Zip"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <p>
                      Create an account by entering the information below. If
                      you are a returning customer please login at the top of
                      the page.
                    </p>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Notes about your order, e.g. special notes for delivery"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
            <div className="dlab-divider bg-gray-dark text-gray-dark icon-center">
              <i className="fa fa-circle bg-white text-gray-dark"></i>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <h3>Your Order</h3>
                <table className="table-bordered check-tbl">
                  <thead>
                    <tr>
                      <th>IMAGE</th>
                      <th>PRODUCT NAME</th>
                      {/* <th>PRICE</th>
					  <th>QUANTITY</th> */}
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.map((product, index) => (
                      <tr>
                        <td>
                          <img src={`${imageBase}${product.images}`} alt="" />
                        </td>
                        <td>{product.title}</td>
                        <td className="product-price">{product.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6">
                <form className="shop-form">
                  <h3>Order Total</h3>
                  <table className="table-bordered check-tbl">
                    <tbody>
                      <tr>
                        <td>Order Subtotal</td>
                        <td className="product-price"> {getTotalPrice()}</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>Free Shipping</td>
                      </tr>
                      {/* <tr>
                        <td>Coupon</td>
                        <td className="product-price">$28.00</td>
                      </tr> */}
                      <tr>
                        <td>Total</td>
                        <td className="product-price-total">
                          {" "}
                          {getTotalPrice()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h4>Payment Method</h4>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name on Card"
                    />
                  </div>
                  <div className="form-group">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Control as="select">
                        <option value="">Credit Card Type</option>
                        <option value="">Another option</option>
                        <option value="">A option</option>
                        <option value="">Potato</option>
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Credit Card Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Card Verification Number"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn button-lg btnhover btn-block"
                      type="button"
                      onClick={onPaymentPress}
                    >
                      Place Order Now{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopCheckout;
