import "../styles/admin.css";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Admin() {

    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedUser) {
        return <Navigate to="/login" />;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    return (
        <>
            <Navbar />

            <div className="admin-container">

                <h1>Admin Dashboard</h1>

                <h2>Registered Clients</h2>

                <div className="table-container">

                    <table>

                        <thead>
                            <tr>
                                <th>Client Name</th>
                                <th>Company</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>State</th>
                                <th>City</th>
                            </tr>
                        </thead>

                        <tbody>

                            {users.length === 0 ? (

                                <tr>
                                    <td colSpan="6">
                                        No Registered Clients
                                    </td>
                                </tr>

                            ) : (

                                users.map((user, index) => (

                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.company}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.state}</td>
                                        <td>{user.city}</td>
                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

                <h2>Consultation Requests</h2>

                <div className="table-container">

                    <table>

                        <thead>

                            <tr>
                                <th>Client</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Business Type</th>
                                <th>Service</th>
                                <th>Budget</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Project Description</th>
                                <th>Status</th>
                            </tr>

                        </thead>

                        <tbody>

                            {appointments.length === 0 ? (

                                <tr>
                                    <td colSpan="10">
                                        No Consultation Requests Found
                                    </td>
                                </tr>

                            ) : (

                                appointments.map((appointment, index) => (

                                    <tr key={index}>

                                        <td>{appointment.patientName}</td>
                                        <td>{appointment.email}</td>
                                        <td>{appointment.phone}</td>
                                        <td>{appointment.businessType}</td>
                                        <td>{appointment.service}</td>
                                        <td>{appointment.budget}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.time}</td>
                                        <td>{appointment.projectDescription}</td>

                                        <td>
                                            <span
                                                className={
                                                    appointment.status === "Approved"
                                                        ? "status approved"
                                                        : appointment.status === "Rejected"
                                                        ? "status rejected"
                                                        : "status pending"
                                                }
                                            >
                                                {appointment.status}
                                            </span>
                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </>
    );
}

export default Admin;