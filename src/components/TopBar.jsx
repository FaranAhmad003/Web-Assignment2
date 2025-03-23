import { Link } from "react-router-dom";
import { Scale } from "lucide-react";
import '../styles/TopBar.css'; 
const TopBar = () => {
  return (
    <nav className="top-bar">
      <div className="logo">
        <Scale className="h-8 w-8 text-legal-beige" />
        <span className="ml-2 text-2xl font-serif text-legal-beige">Legal Companion Insight</span>
      </div>
      <div className="menu">
        <Link to="">Home</Link>
        <Link to="">Chat</Link>
        <Link to="">Cases</Link>
        <Link to="">Login</Link>
      </div>
    </nav>
  );
  console.log("TopBar rendered");

};

export default TopBar;