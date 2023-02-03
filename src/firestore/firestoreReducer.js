import { createSlice } from "@reduxjs/toolkit";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

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

  reducers: {
    create: async (state, action) => {
      try {
        const docRef = await addDoc(collection(db, "users"), action.payload);

        alert("Added succefully");
      } catch (error) {}
    },

    getUsers: () => {
      try {
        const querySnapShot = getDocs(collection(db, "users"));
        return querySnapShot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {}
    },
  },
});

export const { create, getUsers } = fireStoreSlice.actions;

export default fireStoreSlice.reducer;
