import React from "react";
import './Success.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";
const Success = () => {
  return (
    <div className="payment-success-container">
      <div className="payment-success-message">
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase. Your transaction has been completed successfully.</p>
        <Link to="/products" className="back-to-shop">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default Success;
