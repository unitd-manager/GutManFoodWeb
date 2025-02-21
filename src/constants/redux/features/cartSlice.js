import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCartAPI, addToCartAPI, deleteFromCartAPI, updateCartAPI, clearCartAPI } from '../services/api';

// Fetch Cart
export const fetchCart = createAsyncThunk('cart/fetchCart', async (userId, { rejectWithValue }) => {
  try {
    return await fetchCartAPI(userId);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Add to Cart
export const addToCart = createAsyncThunk('cart/addToCart', async ({ userId, product }, { rejectWithValue }) => {
  try {
    return await addToCartAPI(userId, product);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Delete from Cart
export const deleteFromCart = createAsyncThunk('cart/deleteFromCart', async ({ userId, productId }, { rejectWithValue }) => {
  try {
    return await deleteFromCartAPI(userId, productId);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Update Cart Item
export const updateCart = createAsyncThunk('cart/updateCart', async ({ userId, productId, quantity }, { rejectWithValue }) => {
  try {
    return await updateCartAPI(userId, productId, quantity);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Clear Cart
export const clearCart = createAsyncThunk('cart/clearCart', async (userId, { rejectWithValue }) => {
  try {
    return await clearCartAPI(userId);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteFromCart.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.meta.arg.productId);
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.meta.arg.productId);
        if (index !== -1) {
          state.items[index].quantity = action.meta.arg.quantity;
        }
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default cartSlice.reducer;
