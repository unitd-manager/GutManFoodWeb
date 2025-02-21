import api from "../../constants/api";

export const FETCH_CART_DATA_REQUEST = 'FETCH_CART_DATA_REQUEST';
export const FETCH_CART_DATA_SUCCESS = 'FETCH_CART_DATA_SUCCESS';
export const FETCH_CART_DATA_FAILURE = 'FETCH_CART_DATA_FAILURE';

export const INSERT_CART_DATA_REQUEST = 'INSERT_CART_DATA_REQUEST';
export const INSERT_CART_DATA_SUCCESS = 'INSERT_CART_DATA_SUCCESS';
export const INSERT_CART_DATA_FAILURE = 'INSERT_CART_DATA_FAILURE';

export const UPDATE_CART_DATA_REQUEST = 'UPDATE_CART_DATA_REQUEST';
export const UPDATE_CART_DATA_SUCCESS = 'UPDATE_CART_DATA_SUCCESS';
export const UPDATE_CART_DATA_FAILURE = 'UPDATE_CART_DATA_FAILURE';

export const REMOVE_CART_DATA_REQUEST = 'REMOVE_CART_DATA_REQUEST';
export const REMOVE_CART_DATA_SUCCESS = 'REMOVE_CART_DATA_SUCCESS';
export const REMOVE_CART_DATA_FAILURE = 'REMOVE_CART_DATA_FAILURE';

export const CLEAR_CART_DATA_REQUEST = 'CLEAR_CART_DATA_REQUEST';
export const CLEAR_CART_DATA_SUCCESS = 'CLEAR_CART_DATA_SUCCESS';
export const CLEAR_CART_DATA_FAILURE = 'CLEAR_CART_DATA_FAILURE';

export const EMPTY_CART_DATA_REQUEST = 'EMPTY_CART_DATA_REQUEST';
export const EMPTY_CART_DATA_SUCCESS = 'EMPTY_CART_DATA_SUCCESS';
export const EMPTY_CART_DATA_FAILURE = 'EMPTY_CART_DATA_FAILURE';

export const fetchCartData = (userInfo) => {
    return (dispatch) => {
      dispatch(fetchDataRequest({contact_id:userInfo.contact_id}));
     
      // Make the API call
      api.post('/contact/getCartProductsByContactId',{contact_id:userInfo.contact_id})
        .then((res) => {
          res.data.data.forEach(element => {
            element.images=String(element.images).split(',')
          });
          dispatch(fetchDataSuccess(res.data.data))})
        .catch((error) => {dispatch(fetchDataFailure(error))});
    };
  };
  
  export const insertCartData = (data) => {
    
    return (dispatch) => {
      dispatch(insertCartDataRequest(data));
  
      // Make the API call with error handling
      api.post('/contact/addToCart', data)
        .then((response) => {
          if (response && response.data) {
            dispatch(insertCartDataSuccess(response.data));
          } else {
            dispatch(insertCartDataFailure('Invalid response format'));
          }
        })
        .catch((error) => {
          console.error('Add to cart error:', error);
          dispatch(insertCartDataFailure(
            error.response?.data?.message || 'Network error occurred'
          ));
        });
    };
  };

  export const emptyCartData = () => {
    return (dispatch) => {
      dispatch(emptyCartDataRequest());
      dispatch(emptyCartDataSuccess([])); // Empty the cart locally
    };
  };
  
  export const updateCartData = (data) => {
    
    return (dispatch) => {
      dispatch(updateCartDataRequest(data));
  console.log('updatecall');
      // Make the API call
      api
      .post("/contact/update-cart", data)
        .then((response) => {
          if (response?.data?.success) {
            dispatch(updateCartDataSuccess(data));
          } else {
            dispatch(updateCartDataFailure(response?.data?.message || 'Invalid response format'));
          }
          })
        .catch((error) => {
          console.error('Update cart error:', error);
          dispatch(updateCartDataFailure(
            error.response?.data?.message || 'Network error occurred'
          ));
        });
    };
  };

  export const removeCartData = (Item) => {
 
    return (dispatch) => {
      dispatch(removeCartDataRequest({ basket_id: Item.basket_id }));
      console.log('rem',Item)
      // Make the API call
      api
      .post("/contact/deleteCartItem", { basket_id: Item.basket_id })
        .then(() => {dispatch(removeCartDataSuccess(Item));
         })
        .catch((error) => dispatch(removeCartDataFailure(error)));
    };
  };

  export const clearCartData = (user) => {
    return (dispatch) => {
      dispatch(clearCartDataRequest({ contact_id: user.contact_id }));
  
      // Make the API call
      api
      .post("/contact/clearCartItems", { contact_id: user.contact_id })
        .then((res) => {dispatch(clearCartDataSuccess(res.data.data));
          })
        .catch((error) => dispatch(clearCartDataFailure(error)));
    };
  };


  export const fetchDataRequest = () => ({
    type: FETCH_CART_DATA_REQUEST,
  });
  
  export const fetchDataSuccess = (data) => ({
    type: FETCH_CART_DATA_SUCCESS,
    payload: data,
  });
  
  export const fetchDataFailure = (error) => ({
    type: FETCH_CART_DATA_FAILURE,
    payload: error,
  });

  
  export const insertCartDataRequest = () => ({
    type: INSERT_CART_DATA_REQUEST,
  });
  
  export const insertCartDataSuccess = (data) => ({
    type: INSERT_CART_DATA_SUCCESS,
    payload: data,
  });
  
  export const insertCartDataFailure = (error) => ({
    type: INSERT_CART_DATA_FAILURE,
    payload: error,
  });

  export const updateCartDataRequest = () => ({
    type: UPDATE_CART_DATA_REQUEST,
  });
  
  export const updateCartDataSuccess = (data) => ({
    type: UPDATE_CART_DATA_SUCCESS,
    payload: data,
  });
  
  export const updateCartDataFailure = (error) => ({
    type: UPDATE_CART_DATA_FAILURE,
    payload: error,
  });

  export const removeCartDataRequest = () => ({
    type: REMOVE_CART_DATA_REQUEST,
  });
  
  export const removeCartDataSuccess = (data) => ({
    type: REMOVE_CART_DATA_SUCCESS,
    payload: data,
  });
  
  export const removeCartDataFailure = (error) => ({
    type: REMOVE_CART_DATA_FAILURE,
    payload: error,
  });

  export const clearCartDataRequest = () => ({
    type: CLEAR_CART_DATA_REQUEST,
  });
  
  export const clearCartDataSuccess = (data) => ({
    type: CLEAR_CART_DATA_SUCCESS,
    payload: data,
  });
  
  export const clearCartDataFailure = (error) => ({
    type: CLEAR_CART_DATA_FAILURE,
    payload: error,
  });

  export const emptyCartDataRequest = () => ({
    type: EMPTY_CART_DATA_REQUEST,
  });
  
  export const emptyCartDataSuccess = (data) => ({
    type: EMPTY_CART_DATA_SUCCESS,
    payload: data,
  });
  
  export const emptyCartDataFailure = (error) => ({
    type: EMPTY_CART_DATA_FAILURE,
    payload: error,
  });