import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import logger from "./root-reducer";
import rootReducer from "./root-reducer";

const middleWares = [logger];

const store = configureStore(rootReducer, applyMiddleware(...middleWares));
export default store;
