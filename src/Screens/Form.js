import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Faq from "../Components/Faq";
import Footer from "../Components/Footer";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false); // Manage loading state
  const navigate = useNavigate(); // React Router navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    setIsLoading(true); // Set loading state to true

    // Simulate a delay before navigating
    setTimeout(() => {
      setIsLoading(false); // Reset loading state
      navigate("/success"); // Navigate to the success screen
    }, 3000); // 3-second delay
  };

  return (
    <div>
      <Header />

      <div className="form">
        <form className="form-c" onSubmit={handleSubmit}>
          <h3>PERSONAL INFORMATION</h3>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Address" required />
          <input
            type="text"
            placeholder="Property of Interest Location (pre-set options)"
            required
          />
          <input type="text" placeholder="Country of Residence" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            required
          ></textarea>

          <div className="f-btn">
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>

      <Faq />
      <Footer />
    </div>
  );
};

export default Form;
