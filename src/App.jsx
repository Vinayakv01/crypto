import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routing from './route/route';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routing />
    </div>
  );
};

export default App;
