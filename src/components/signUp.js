import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

import {signUp} from '../auth/authReducer'

function SignUp() {
  

 
  const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

  

   
    const dispatch = useDispatch();

  return (
    <div>
      signUp
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
      <button onClick={() => dispatch(signUp(email, password))}> sign up</button>
    </div>
  );
}

export default SignUp