import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="header-container">
      <nav>
        <div>
          <Link className="title" to="/">
            Smart Calculator
            <span className="subtitle">The smart calculator drone</span>
          </Link>
          <div className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
