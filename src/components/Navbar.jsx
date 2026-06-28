import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const [menuOpen, setMenuOpen] = useState(false);

    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const handleLogout = () => {

        localStorage.removeItem("loggedInUser");

        alert("Logged Out Successfully");

        navigate("/");

        setMenuOpen(false);

    };

    return (

        <nav className="navbar">

            <div className="logo">
                <Link to="/">BookAppointment.com</Link>
            </div>

            {/* Hamburger */}

            <div
                className="menu-icon"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                </li>

                <li>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                </li>

                <li>
                    <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                </li>

                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </li>

                {loggedUser && (

                    <li>
                        <Link to="/admin" onClick={() => setMenuOpen(false)}>
                            Admin
                        </Link>
                    </li>

                )}

                {!loggedUser ? (

                    <>

                        <li>
                            <Link
                                to="/login"
                                className="login-btn"
                                onClick={() => setMenuOpen(false)}
                            >
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/signup"
                                className="signup-btn"
                                onClick={() => setMenuOpen(false)}
                            >
                                Sign Up
                            </Link>
                        </li>

                    </>

                ) : (

                    <>

                        <li className="welcome-user">
                            Welcome, {loggedUser.name}
                        </li>

                        <li>

                            <button
                                className="logout-btn"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>

                        </li>

                    </>

                )}

            </ul>

        </nav>

    );

}

export default Navbar;