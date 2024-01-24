import {createSlice} from '@reduxjs/toolkit';
import {BigNumber} from 'alchemy-sdk';
const tokens = [
  {id: 1, name: 'Ethereum',amount:0.007, icon: require('../assets/ethereum.png')},
  {id: 2, name: 'BNB', amount: 0.08, icon: require('../assets/binance.png')},
];
const INITIAL_STATE = {
  walletAddress: '',
  userTokens: [],
  tokenBalance: {},
  availableTokens: tokens,
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
      const decimalValue = BigNumber.from(state.tokenBalance);
      console.log('value' + decimalValue);
    },
  },
});
export const {addWallets, addTokenBalance, addTokens} = appReducer.actions;
export default appReducer.reducer;
