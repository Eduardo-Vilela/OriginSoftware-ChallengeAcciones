"use client"
import React,{ useState } from 'react';
import axios from "axios";
function LoginPrueba() {

    const [loginUsername, setLoginUsername] = useState('')
    const [ loginPassword, setLoginPassword ] = useState('')

    const login = () => {
        axios({
          method: 'post',
          data: {
            username: loginUsername,
            password: loginPassword
          },
          withCredentials: true,
          url: 'http://localhost:3001/login'
        }).then(res => {console.log(res)}).catch(err => {console.log(err)})
    }



  return (
    <>
      <div>
        <div>
          <h1>Login</h1>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button onClick={login}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default LoginPrueba;
