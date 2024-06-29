import React from 'react';
import bgimage from "../../assets/original.png";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen w-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* Content of your home page */}
    </div>
  );
};

export default Home;
