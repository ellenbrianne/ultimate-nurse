import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Bio</Link>
            <Link to="/work-history">Work History</Link>
            <Link to="/certifications">Certifications</Link>
        </div>
    )
};

export default NavBar;