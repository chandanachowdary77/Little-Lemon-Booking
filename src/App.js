import React from "react";
import "./App.css"; // 👈 Import the CSS here

function App() {
  return (
    <main className="container">
      <h1>Little Lemon Table Booking</h1>
      <form aria-label="Booking form" className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date*</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time*</label>
          <input type="time" id="time" name="time" required />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of Guests*</label>
          <input type="number" id="guests" name="guests" min="1" max="10" required />
        </div>
        <div className="form-group">
          <label htmlFor="requests">Special Requests</label>
          <textarea id="requests" name="requests" rows="3"></textarea>
        </div>
        <button type="submit" className="submit-button">Book Table</button>
      </form>
    </main>
  );
}

export default App;
