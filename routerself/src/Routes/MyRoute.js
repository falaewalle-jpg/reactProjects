import React, { useContext, useEffect } from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import {Home , About , Contact , Login} from '../pages';
import ExtraPage from '../components/ExtraPage';
import User from '../components/User';
import { Email, LinkedIn, Mobile } from '../pages/Via';
import { contextAPI } from '../pages/Login';
function MyRoute() {
  const {login , setLogin} = useContext(contextAPI)
  useEffect(() => {
    console.log(login);
  })
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/About' element = {login?
          <About/>:
          < Navigate to={'/login'}/>
        }/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path='/Contact' element = {<Contact/>}>
          <Route path='email' element = {<Email/>}/>
          <Route path='linkedin' element = {<LinkedIn/>}/>
          <Route path='mobile' element = {<Mobile/>}/>
        </Route>
        <Route path='/extra' element = {<ExtraPage/>}/>
        <Route path='/user/:id' element = {<User/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />

    </Routes>
  )
}

export default MyRoute;