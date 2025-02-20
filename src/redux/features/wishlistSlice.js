import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {  fetchWishlistAPI, addToWishlistAPI, deleteFromWishlistAPI, clearWishlistAPI } from '../services/api';

// Fetch Wishlist
export const fetchWishlist = createAsyncThunk('wishlist/fetchWishlist', async (userId, { rejectWithValue }) => {
    try {
      return await fetchWishlistAPI(userId);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });
  
  // Add to Wishlist
  export const addToWishlist = createAsyncThunk('wishlist/addToWishlist', async ({ userId, product }, { rejectWithValue }) => {
    try {
      return await addToWishlistAPI(userId, product);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });
  
  // Delete from Wishlist
  export const deleteFromWishlist = createAsyncThunk('wishlist/deleteFromWishlist', async ({ userId, productId }, { rejectWithValue }) => {
    try {
      return await deleteFromWishlistAPI(userId, productId);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });
  
  // Clear Wishlist
  export const clearWishlist = createAsyncThunk('wishlist/clearWishlist', async (userId, { rejectWithValue }) => {
    try {
      return await clearWishlistAPI(userId);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });
  
  const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: { items: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchWishlist.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchWishlist.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(fetchWishlist.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(addToWishlist.fulfilled, (state, action) => {
          state.items.push(action.payload);
        })
        .addCase(deleteFromWishlist.fulfilled, (state, action) => {
          state.items = state.items.filter(item => item.id !== action.meta.arg.productId);
        })
        .addCase(clearWishlist.fulfilled, (state) => {
          state.items = [];
        });
    },
  });
  
  export default wishlistSlice.reducer;
  