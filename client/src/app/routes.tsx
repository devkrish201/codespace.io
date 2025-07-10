import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '@/auth/pages/Login';
import Register from '@/auth/pages/Register';
// other imports...

const RoutesComponent = () => {
  return (
    <Routes>
      {/* Your existing routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* Add the home route below */}
    </Routes>
  );
};

export default RoutesComponent;
