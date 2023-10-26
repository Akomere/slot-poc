import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>
      This app uses React, Redux, React Router, and many other helpful
      libraries.
    </p>
    <Link to="appointments" className="btn btn-primary btn-lg">
      Book Appointment
    </Link>
    <b />
    <b />
    <Link to="services" className="btn btn-primary btn-lg">
      Our Services
    </Link>
  </div>
);

export default AboutPage;
