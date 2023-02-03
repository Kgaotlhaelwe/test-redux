import React from 'react'
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {SignIn} from '../auth/authReducer'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      Login
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
      <button onClick={() => dispatch(SignIn(email, password))}>
        {" "}
        sign up
      </button>
    </div>
  );
}

export default Login