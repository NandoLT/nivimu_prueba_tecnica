import { Link } from "react-router-dom";
import nivimuLogo from "assets/images/logos/nivimu-logo.svg"

import './Header.css';

const Header = () => {

    return (
        <header className="header">
            <div className="header_logo">
                <Link to="/">
                    <img src={nivimuLogo} alt="nivimu_logo" />
                </Link>
            </div>
            <div className="header_nav">
            </div>
        </header>
    )
};

export default Header;
