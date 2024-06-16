import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import cartReducer from "../slices/cartSlice";
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage
};
const persistedCartReducer = persistReducer(persistConfig, cartReducer);
const store = configureStore({
  reducer: {
    cartSlice: persistedCartReducer,
  },
});
export const persistor = persistStore(store);
export default store;
