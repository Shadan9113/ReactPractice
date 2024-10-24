import React from 'react';

export default function Navbar() {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="Brand Logo" />
      </div>
      <ul>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <button>Login</button>
    </nav>
  );
}
