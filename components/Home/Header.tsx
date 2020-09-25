import React from 'react';

const Header = () => {
  return (
    <header className="flex">
      <h1 className="text-3xl text-green-400">conduit</h1>
      <ul className="flex">
        <li>Home</li>
        <li>Sign in</li>
        <li>Sign up</li>
      </ul>
    </header>
  );
};

export default Header;
