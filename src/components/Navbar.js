import { Link } from "react-router-dom"

export const Navbar = () => {
    return(
        <div className="Navbar border-gray-600 shadow-xl relative">
            <div id="logo"><Link to="/" id="link">LOGO</Link></div>
            <div id="nav-components">
                    <ul id="nav-links">
                        <li><Link to="/Men" id="link">Men</Link></li>
                        <li><Link to="/Women" id="link">Women</Link></li>
                        <li>About</li>
                        <li><Link to="/grocery" id="link">GROCERY</Link></li>
                    </ul>
            </div>
        </div>
    )
}