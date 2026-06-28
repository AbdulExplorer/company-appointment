import { useState } from "react";
import "../styles/appointment.css";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function Appointment() {

    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedUser) {
        return <Navigate to="/login" />;
    }

    const navigate = useNavigate();

    const [appointment, setAppointment] = useState({
        patientName: loggedUser.name,
        phone: "",
        businessType: "",
        service: "",
        budget: "",
        date: "",
        time: "",
        projectDescription: ""
    });

    const handleChange = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const appointments =
            JSON.parse(localStorage.getItem("appointments")) || [];

        appointments.push({
            ...appointment,
            email: loggedUser.email,
            status: "Pending"
        });

        localStorage.setItem(
            "appointments",
            JSON.stringify(appointments)
        );

        alert("Consultation Request Submitted Successfully!");

        navigate("/");
    };

    return (
        <>
        <Navbar />

            <div className="appointment-container">

                <form
                    className="appointment-form"
                    onSubmit={handleSubmit}
                >

                    <h2>Book Free Consultation</h2>


                    <input
                        type="text"
                        name="patientName"
                        value={appointment.patientName}
                        readOnly
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={appointment.phone}
                        onChange={handleChange}
                        required
                    />

                    {/* Business Type */}

                    <select
                        name="businessType"
                        value={appointment.businessType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Business Type</option>
                        <option>Startup</option>
                        <option>Small Business</option>
                        <option>Medium Enterprise</option>
                        <option>Large Enterprise</option>
                        <option>E-Commerce</option>
                        <option>Educational Institute</option>
                        <option>Healthcare</option>
                        <option>Government Organization</option>
                        <option>NGO</option>
                        <option>Freelancer</option>
                    </select>

                    {/* Service */}

                    <select
                        name="service"
                        value={appointment.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Service Required</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>Software Development</option>
                        <option>UI/UX Design</option>
                        <option>Cloud Solutions</option>
                        <option>AI Automation</option>
                        <option>Digital Marketing</option>
                    </select>

                    {/* Budget */}

                    <select
                        name="budget"
                        value={appointment.budget}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Project Budget</option>

                        <option>Below ₹25,000</option>
                        <option>₹25,000 - ₹50,000</option>
                        <option>₹50,000 - ₹1,00,000</option>
                        <option>₹1,00,000 - ₹5,00,000</option>
                        <option>₹5,00,000 - ₹10,00,000</option>
                        <option>Above ₹10,00,000</option>

                        <option>Not Decided Yet</option>
                    </select>

                    {/* Date */}

                    <input
                        type="date"
                        name="date"
                        value={appointment.date}
                        onChange={handleChange}
                        required
                    />

                    {/* Time */}

                    <input
                        type="time"
                        name="time"
                        value={appointment.time}
                        onChange={handleChange}
                        required
                    />

                    {/* Project Description */}

                    <textarea
                        name="projectDescription"
                        placeholder="Describe your project requirements..."
                        value={appointment.projectDescription}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Book Appointment
                    </button>

                </form>

            </div>
<Contact />
      <Footer />
        </>
    );
}

export default Appointment;