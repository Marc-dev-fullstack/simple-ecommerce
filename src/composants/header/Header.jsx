import React from 'react'
import "./header.css";

const Header = () => {
  return (
       <header className="header-page">
      <div className="logo"> Chap-Chap</div>
      <nav>
        <a href="/">Accueil</a>
        <a href="/product">Product</a>
        <a href="/category">Category</a>
      </nav>
    </header>
  )
}

export default Header;
