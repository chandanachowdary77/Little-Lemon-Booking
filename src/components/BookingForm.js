import React, { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
    requests: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Validate form fields
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.date) errors.date = "Date is required";
    if (!formData.time) errors.time = "Time is required";
    if (!formData.guests || formData.guests < 1 || formData.guests > 10)
      errors.guests = "Guests must be between 1 and 10";
    return errors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      // Here you can handle form submission e.g., API call
      setSubmitted(true);
      console.log("Booking submitted:", formData);
    }
  };

  if (submitted) {
    return <p role="alert">Thank you for your booking, {formData.name}!</p>;
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Booking form">
      <div>
        <label htmlFor="name">Name*</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          aria-describedby="nameError"
          aria-invalid={errors.name ? "true" : "false"}
          required
        />
        {errors.name && (
          <span id="nameError" style={{ color: "red" }}>
            {errors.name}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="date">Date*</label>
        <input
          id="date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          aria-describedby="dateError"
          aria-invalid={errors.date ? "true" : "false"}
          required
        />
        {errors.date && (
          <span id="dateError" style={{ color: "red" }}>
            {errors.date}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="time">Time*</label>
        <input
          id="time"
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
          aria-describedby="timeError"
          aria-invalid={errors.time ? "true" : "false"}
          required
        />
        {errors.time && (
          <span id="timeError" style={{ color: "red" }}>
            {errors.time}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="guests">Number of Guests*</label>
        <input
          id="guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          aria-describedby="guestsError"
          aria-invalid={errors.guests ? "true" : "false"}
          required
        />
        {errors.guests && (
          <span id="guestsError" style={{ color: "red" }}>
            {errors.guests}
          </span>
        )}
      </div>

      <div>
        <label htmlFor="requests">Special Requests</label>
        <textarea
          id="requests"
          name="requests"
          value={formData.requests}
          onChange={handleChange}
          rows="3"
        />
      </div>

      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
