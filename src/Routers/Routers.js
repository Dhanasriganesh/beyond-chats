import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SetupOrganization from '../pages/SetupOrganization';
import Login from '../pages/Login';
import Registration from "../pages/Registration"
import ForgotPassword from '../pages/ForgotPassword';
import Chatbotintegration from '../pages/Chatbotintegration';
function Routers() {
  return (
    <>
    {/* <Header/> */}
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
    <Route path='/setuporganization' element={<SetupOrganization/>}/>
    <Route path='/chatbotintegration' element={<Chatbotintegration/>}/>
    </Routes>
    </>
  )
}

export default Routers