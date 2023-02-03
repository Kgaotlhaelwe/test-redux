import React from 'react'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { create } from "../firestore/firestoreReducer";
function Add() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const add =  (()=>{
    dispatch(create({
      email:email,
      password:password
    }))
   })
  return (
    <div>
      Add
      <input
        type="text"
        placeholder="Enter email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        onChange={(event) => setPassword(event.target.value)}
      />
      

      <button onClick={add}>   add </button>
    </div>
  );
}

export default Add