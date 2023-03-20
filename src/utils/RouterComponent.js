import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { PrivateRoute } from 'router/PrivateRoute';
import LoginForm from '../components/SignIn/LoginForm';
import Home from '../components/Home';
import ManageCustomers from '../components/customer/ManageCustomers';
import CorporateCustomer from '../components/customer/CorporateCustomer';

const RouterComponent = () => {
  return (
<Router>
    <Routes>
      <Route exact path="/" element={<LoginForm />} />
       <Route path='/home' element={<Home />} />
       <Route path='/manage-customer' element={<ManageCustomers />} />
       <Route path='/corporate-customer' element={<CorporateCustomer />} />
    </Routes>
</Router>
    )
}

export default RouterComponent