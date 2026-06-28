import "../styles/services.css";

function Services() {
  return (
    <section id="services" className="services">

      <h2>Our Services</h2>

      <div className="service-container">

        <div className="card">
          <h3>Online Booking</h3>
          <p>Book appointments anytime from anywhere.</p>
        </div>

        <div className="card">
          <h3>User Profiles</h3>
          <p>Create your account and manage your appointments.</p>
        </div>

        <div className="card">
          <h3>Admin Dashboard</h3>
          <p>Manage users and appointments efficiently.</p>
        </div>

      </div>

    </section>
  );
}

export default Services;