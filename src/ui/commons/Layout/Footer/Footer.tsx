import { Link } from 'react-router-dom';
import nivimuLogo from "assets/images/logos/nivimu-logo.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="content">
      <Link to="/">
        <img className="footer-logo" src={nivimuLogo} alt="nivimu_logo" />
      </Link>
      <h4 style={{ "color": "black" }}>&#169; Copyright 2022 Nivimu. All right reserved.</h4>
    </footer>
  )
};

export default Footer;