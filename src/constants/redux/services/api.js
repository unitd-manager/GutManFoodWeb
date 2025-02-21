import api from "../../constants/api";


// Authentication APIs
export const loginUserAPI = async (userData) => {
  const response = await api.post(`/api/login`, userData);
  return response.data;
};

export const logoutUserAPI = async () => {
  const response = await api.post(`/logout`);
  return response.data;
};

// Cart APIs
export const fetchCartAPI = async (userInfo) => {
  const response = await api.get(`/contact/getCartProductsByContactId`,{contact_id:userInfo.contact_id});
  return response.data;
};

export const addToCartAPI = async (data, product) => {
  const response = await api.post(`/contact/addToCart`,data);
  return response.data;
};

export const deleteFromCartAPI = async (Item) => {
  const response = await api.delete(`/contact/deleteCartItem`, { basket_id: Item.basket_id });
  return response.data;
};

export const updateCartAPI = async (data) => {
  const response = await api.post(`/contact/update-cart`,data);
  return response.data;
};

export const clearCartAPI = async (user) => {
  const response = await api.post(`/contact/clearCartItems`,{ contact_id: user.contact_id });
  return response.data;
};

// Wishlist APIs
export const fetchWishlistAPI = async (userInfo) => {
  const response = await api.get('/contact/getFavByContactId',{contact_id:userInfo.contact_id});
  return response.data;
};

export const addToWishlistAPI = async (data) => {
  const response = await api.post('/contact/insertToWishlist',data);
  return response.data;
};

export const deleteFromWishlistAPI = async (Item) => {
  const response = await api.post("/contact/deleteWishlistItem", { wish_list_id: Item.wish_list_id });
  return response.data;
};

export const clearWishlistAPI = async (user) => {
  const response = await api.post("/contact/clearWishlistItems", { contact_id: user.contact_id });
  return response.data;
};
