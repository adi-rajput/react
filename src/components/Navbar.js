import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext"; // Ensure correct path

export const Navbar = () => {
    const user = useContext(UserContext); // Use the context value

    return (
        <div className="Navbar border-gray-600 shadow-xl relative">
            <div id="logo">
                <Link to="/" className="link">LOGO</Link>
            </div>
            <div id="nav-components">
                <ul id="nav-links">
                    <li><Link to="/Men" className="link">Men</Link></li>
                    <li><Link to="/Women" className="link">Women</Link></li>
                    <li><Link to="/grocery" className="link">GROCERY</Link></li>
                    <li className="link">About</li>
                    <li className="font-bold">Welcome! {user.name}</li>                   
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
