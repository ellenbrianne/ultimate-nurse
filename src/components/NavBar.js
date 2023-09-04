import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/">Bio</NavLink>
            <NavLink to="/work-history">Work History</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
        </div>
    )
};

export default NavBar;