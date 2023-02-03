import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
import authSlice from '../auth/authReducer'
import firestoreSlice  from'../firestore/firestoreReducer'
export default configureStore({
  reducer: {
    counter:counterReducer,
    authentication:authSlice,
    firestoreSlice:firestoreSlice
  },
});
