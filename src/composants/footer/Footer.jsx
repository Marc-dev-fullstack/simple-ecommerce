import React from 'react'
import "./footer.css";
const Footer = () => {
  return (
    <footer className="ecommerce-footer">
    <div className="footer-info">
      <h3>Contactez-nous</h3>
      <p>Email : contact@ecommerce.com</p>
      <p>Téléphone : (123) 456-7890</p>
    </div>
    <div className="footer-links">
      <h3>Liens utiles</h3>
      <ul>
        <li><a href="/about">À Propos</a></li>
        <li><a href="/terms">Termes et Conditions</a></li>
        <li><a href="/privacy">Politique de Confidentialité</a></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer;
