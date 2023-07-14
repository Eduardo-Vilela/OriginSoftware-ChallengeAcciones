"use client"
import React,{useState} from 'react';
import axios  from 'axios';

function RegisterPrueba() {

  const [registerUsername, setRegisterUsername] = useState('')
  const [ registerPassword, setRegisterPassword ] = useState('')

  const register = () => {
      axios({
        method: 'post',
        data: {
          username: registerUsername,
          password: registerPassword
        },
        withCredentials: true,
        url: 'http://localhost:3001/register'
      }).then(res => {console.log(res)}).catch(err => {console.log(err)})
    }

  return (
    <>
    <div>
                <h1>Register</h1>
                <input type="text" name="username" placeholder="username" onChange={e => setRegisterUsername(e.target.value )}/>
                <input type="password" name="password" placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
                <button onClick={register}>Submit</button>
            </div>
    </>
  )
}

export default RegisterPrueba;