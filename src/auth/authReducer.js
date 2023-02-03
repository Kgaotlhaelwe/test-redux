import { createSlice } from "@reduxjs/toolkit";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../config/firebase'
export const authSlice = createSlice({
  name: 'user',
  initialState: {
    user:{
      email:"",
      password:""
    }
  
  },
  
  reducers:{
    signUp:(state, action)=>{
      createUserWithEmailAndPassword(auth,action.payload, action.payload)
        .then((userCredential) => {
          // Signed in

          alert("Registeed successfully")
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log(action.payload)
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          console.log(errorCode)
          // ..
        });
    } ,

   SignIn:(state, action)=>{
    signInWithEmailAndPassword(auth, action.payload, action.payload).then(()=>{
      alert("Logged in successfully")

    }).catch((error)=>{
       const errorMessage = error.message;
       console.log(errorMessage);
      

    })

   }
  }
  
})

export const { signUp, SignIn } = authSlice.actions;

export default authSlice.reducer;