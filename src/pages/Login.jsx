import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (u) =>
                u.email === loginData.email &&
                u.password === loginData.password
        );

        if (user) {

            localStorage.setItem("loggedInUser", JSON.stringify(user));

            alert("Login Successful");

            navigate("/appointment");

        } else {

            alert("Invalid Email or Password");

        }

    };

    return (

        <div className="login-container">

            <form
                onSubmit={handleSubmit}
                className="login-form"
            >

                <h2>Client Login</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Login
                </button>

                <div className="signup-link">
                    <p>
                        <Link to="/signup">Don't have an account?</Link>
                    </p>
                </div>

            </form>

        </div>

    );

}

export default Login;