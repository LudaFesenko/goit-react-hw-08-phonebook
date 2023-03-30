import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const filterReducer = filterSlice.reducer;

export const { setFilterValue } = filterSlice.actions;

export default filterReducer;
