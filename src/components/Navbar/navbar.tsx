import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    const { pathname } = useLocation();

    return (
        <nav className="navbar">
            <p className="nav-brand"> 
                <Link to="/">
                    <span className='nav-brand-lock'>⚿</span> WW2 Cryptography
                </Link>
            </p>
            <ul className="nav-links">
                <li><Link to="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                <li><Link to="/enigma" className={`nav-link ${pathname === '/enigma' ? 'active' : ''}`}>Enigma</Link></li>
                <li><Link to="/bletchley-park" className={`nav-link ${pathname === '/bletchley-park' ? 'active' : ''}`}>Bletchley Park</Link></li>
                <li><Link to="/purple" className={`nav-link ${pathname === '/purple' ? 'active' : ''}`}>Purple</Link></li>
                <li><Link to="/sigaba" className={`nav-link ${pathname === '/sigaba' ? 'active' : ''}`}>SIGABA</Link></li>
            </ul>
        </nav>
    );
}