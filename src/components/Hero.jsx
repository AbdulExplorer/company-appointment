import "../styles/hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

        <h1>
            Book Your Appointment
            Online Easily
        </h1>

        <p>
            Schedule appointments with just a few clicks.
        </p>

        <Link to="/appointment">
            <button>
                Book Now
            </button>
        </Link>

    </section>
  );
}

export default Hero;