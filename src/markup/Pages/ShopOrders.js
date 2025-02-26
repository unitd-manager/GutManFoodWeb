import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { getUser } from "../../common/user";
import imageBase from "../../constants/imageBase";
import api from "../../constants/api";
const placeholderImage = "https://via.placeholder.com/100"; // Fallback image

const bnr = require("./../../images/banner/bnr2.jpg");

const ShopOrders = () => {
  const [orders, setOrders] = useState();
  const user = getUser();
  console.log("contactId", user.contact_id);
  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    api
      .post("/Orders/getOrderHistoryByContactId", {
        contact_id: user?.contact_id,
      })
      .then((res) => setOrders(res.data.data))
      .catch((error) => console.error("Error fetching countries:", error));
  };


  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: `url(${bnr})` }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Orders</h1>
              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"./"}>Home</Link>
                  </li>
                  <li>Orders</li>
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
                        <th>Order Code</th>
                        <th>Invoice Code</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Order Date</th>
                        <th>Order Status</th>
                        <th>Payment Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders?.length > 0 ? (
                        orders.map((item) => (
                          <tr key={item.order_id} className="alert">
                         <td className="p-3">
                        <img
                          src={item.image ? `${imageBase}${item.image}` : placeholderImage}
                          alt={item.item_title}
                          className="w-16 h-16 object-cover rounded"
                        />
                      </td>
                            <td className="product-item-name">{item.order_code}</td>
                            <td className="product-item-name">{item.invoice_code}</td>
                            <td className="product-item-name">{item.item_title}</td>
                            <td className="product-item-price">
                            ₹{item.unit_price?.toFixed(2)}
                            </td>
                            <td className="product-item-name">{item.qty}</td>
                            <td className="product-item-name">
                            {new Date(item.order_date).toLocaleDateString("en-GB")}
                            </td>
                            <td className="product-item-name">
                              {item.order_status}
                            </td>
                            <td className="product-item-name">
                              {item.payment_method}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center">
                            Your orders is empty.
                          </td>
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

export default ShopOrders;
