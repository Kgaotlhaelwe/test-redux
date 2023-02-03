import { createSlice } from "@reduxjs/toolkit";

// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { db } from "../config/firebase";
import { getUsersAction } from './firestoreAsyncAction'
export const fireStoreSlice = createSlice({
  name: "user",
  initialState: {
    user: [
      {
        email: "",
        password: "",
      },
    ],
  },

  // reducers: {
  //   create: async (state, action) => {
  //     try {
  //       const docRef = await addDoc(collection(db, "users"), action.payload);

  //       alert("Added succefully");
  //     } catch (error) {}
  //   },

  //   getUsers:async ()  => {
  //     try {
  //       const querySnapShot = await getDocs(collection(db, "users"));
  //       console.log({ querySnapShot})
  //       const use = querySnapShot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       console.log({use});
  //       return use
  //     } catch (error) {
  //       console.log('catch', error)
  //     }
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(getUsersAction.fulfilled, (state, {payload}) => {
      return {
        ...state,
        user: payload,
        isLoading: false,
        isLoggedIn: true,
      };
       
    });
    builder.addCase(getUsersAction.pending, (state, {payload}) => {
      return {...state, isLoading: true};
    });
    builder.addCase(getUsersAction.rejected, (state, {payload}) => {
      return {...state, isLoading: false, };
    });
  },

});

export const { create,  getUsers } = fireStoreSlice.actions;
export default fireStoreSlice.reducer;

