import {createSlice} from '@reduxjs/toolkit';
import { BigNumber } from "alchemy-sdk";
const INITIAL_STATE = {
  walletAddress: '',
  userTokens: [],
  tokenBalance: {},
};
const appReducer = createSlice({
  name: 'Reducer',
  initialState: INITIAL_STATE,
  reducers: {
    addWallets: (state, action) => {
      state.walletAddress = action.payload;
    },
    addTokens: (state, action) => {
      state.userTokens = action.payload;
    },
    addTokenBalance: (state, action) => {
      state.tokenBalance = action.payload;
      const decimalValue = BigNumber.from(state.tokenBalance)
      console.log('value' +
        decimalValue);
    },
  },
});
export const {addWallets, addTokenBalance, addTokens} = appReducer.actions;
export default appReducer.reducer;
