import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
  return (
    
    <nav className="Navigation">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
                
    </nav>
  );
}

export default Navigation;