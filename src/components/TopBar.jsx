import { Link } from "react-router-dom";
import { Webhook, Menu, X } from "lucide-react";
import { useState } from "react";
import '../styles/TopBar.css';

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="top-bar">
      <div className="logo">
        <Webhook className="h-8 w-8 text-legal-beige" />
        <span className="ml-2 text-2xl font-serif text-legal-beige">Web</span>
      </div>
    
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <Link to="">Home</Link>
        <Link to="">About Us</Link>
        <Link to="">Project</Link>
        <Link to="">Content</Link>
      </div>
    </nav>
  );
};

export default TopBar;
