import React from 'react';

const Navigation = () => {
  return (
    <header className="flex container mx-auto">
      <h1 className="flex-1 text-3xl text-green-400">conduit</h1>
      <ul className="flex">
        <li className="text-gray-500 text-sm self-center mr-3">Home</li>
        <li className="text-gray-500 text-sm self-center mr-3">Sign in</li>
        <li className="text-gray-500 text-sm self-center mr-3">Sign up</li>
      </ul>
    </header>
  );
};

export default Navigation;
