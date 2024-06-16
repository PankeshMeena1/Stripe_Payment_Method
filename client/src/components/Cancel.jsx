import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Cancel.css"; // Import CSS for styling

const Cancel = () => {
  return (
    <div className="cancel-page">
      <h1>Payment Transaction Failed</h1>
      <p>Your payment transaction could not be completed at this time.</p>
      <p>Please try again later or contact customer support for assistance.</p>
      <Link to="/products" className="dashboard-link">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default Cancel;
