import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../component/layout/layout';
import Home from '../component/home/home';
import Dashboard from '../component/dashboard/dashboard';
import TradingApp from "../component/dashboard/trade";
const Routing = () => {
  const isLoggedIn = localStorage.getItem('authToken') ? true : false;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="forexdash" element={<TradingApp />} />
        {isLoggedIn ? (
          <Route key="dashboard" path="dashboard" element={<Dashboard />} />
        ) : (
          <Route path="*" element={<Navigate to="/" />} /> // Redirect to home if not logged in
        )}
      </Route>
    </Routes>
  );
};

export default Routing;