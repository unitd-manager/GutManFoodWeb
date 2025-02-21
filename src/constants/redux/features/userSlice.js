import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserAPI } from '../services/api';

// Login User (Async)
export const loginUser = createAsyncThunk('user/login', async (userData, { rejectWithValue }) => {
  try {
    const user = await loginUserAPI(userData);
    localStorage.setItem('user', JSON.stringify(user)); // Save user to localStorage
    return user;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Logout User
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('user'); // Remove from localStorage
  dispatch(userSlice.actions.logout());
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null, // Load from localStorage
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
