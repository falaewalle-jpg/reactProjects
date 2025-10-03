import React from 'react'
import { createContext, useState } from 'react';
const contextAPI = createContext()

function Login() {
const [login, setLogin] = useState(false);
return (
<contextAPI.Provider value = {{login,setLogin}}>
<label>Login</label>
<input type='checkbox' checked = {login} onChange={()=>setLogin(prev=>!prev)}></input>
</contextAPI.Provider>
    
  )
}


export {contextAPI};
export default Login