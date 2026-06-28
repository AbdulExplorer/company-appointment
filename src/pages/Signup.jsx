import { useState } from "react";
import "../styles/signup.css";
import { Link, useNavigate } from "react-router-dom";
import { State, City } from "country-state-city";

function Signup() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        password: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find(
            (u) => u.email === user.email
        );

        if (existingUser) {
            alert("Email already registered");
            return;
        }

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration Successful!");

        navigate("/login");

    };

    const states = State.getStatesOfCountry("IN");

    const cities = user.state
        ? City.getCitiesOfState("IN", user.state)
        : [];

    return (

        <div className="signup-container">

            <form
                onSubmit={handleSubmit}
                className="signup-form"
            >

                <h2>Register as a Client</h2>

                <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    placeholder="Company Name"
                    name="company"
                    value={user.company}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    required
                />

                <select
                    name="state"
                    value={user.state}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select State</option>

                    {states.map((state) => (
                        <option
                            key={state.isoCode}
                            value={state.isoCode}
                        >
                            {state.name}
                        </option>
                    ))}

                </select>

                <select
                    name="city"
                    value={user.city}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select City</option>

                    {cities.map((city) => (
                        <option
                            key={city.name}
                            value={city.name}
                        >
                            {city.name}
                        </option>
                    ))}

                </select>

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Register
                </button>

                <div className="login-link">
                    <p>
                        <Link to="/login">Already have an account?</Link>
                    </p>
                </div>

            </form>

        </div>

    );

}

export default Signup;