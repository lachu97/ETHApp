import {configureStore} from '@reduxjs/toolkit';
import AppReactotron from '../DevConfig/Reactotron';
import appReducer from "./AppReducer";
const rootReducer = {
  reducer: appReducer
};
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}),
  devTools: true,
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(AppReactotron.createEnhancer()),
});
export default store;
