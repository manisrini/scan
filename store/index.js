import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {
  imageurl: '1',
};

const CapImageSlice = createSlice({
  name: 'CapImage',
  initialState: initialState,
  reducers: {
    setImageUrl(state, action) {
      state.imageurl = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {capImage: CapImageSlice.reducer},
});

export const capImageActions = CapImageSlice.actions;
export default store;
