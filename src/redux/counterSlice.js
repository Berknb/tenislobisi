import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'matchingPageDiv',
  initialState: {
    value: "ilanlar",
  },
  reducers: {
    changeIlan: (state) => {
      state.value = "ilan"
    },
    changeIlanlar: (state) => {
      state.value = "ilanlar"
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeIlan, changeIlanlar } = counterSlice.actions

export default counterSlice.reducer