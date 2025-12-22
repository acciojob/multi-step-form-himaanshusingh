import React from "react";

const Step = ({ step, formData, nextStep, prevStep, onChange, onSubmit }) => {
  return (
    <div className="form-card">
      {/* STEP 1 */}
      <form id="step1" style={{ display: step === 1 ? "block" : "none" }}>
        <h3>Customer Details</h3>

        <label htmlFor="first_name">First Name</label>
        <input
          id="first_name"
          value={formData.first_name}
          onChange={onChange}
        />

        <label htmlFor="last_name">Last Name</label>
        <input id="last_name" value={formData.last_name} onChange={onChange} />

        <button type="button" onClick={nextStep}>
          Next
        </button>
      </form>

      {/* STEP 2 */}
      <form id="step2" style={{ display: step === 2 ? "block" : "none" }}>
        <h3>Car Details</h3>

        <label htmlFor="model">Car Model</label>
        <input id="model" value={formData.model} onChange={onChange} />

        <label htmlFor="car_price">Car Price</label>
        <input id="car_price" value={formData.car_price} onChange={onChange} />

        <button type="button" onClick={prevStep}>
          Previous
        </button>
        <button type="button" onClick={nextStep}>
          Next
        </button>
      </form>

      {/* STEP 3 */}
      <form id="step3" style={{ display: step === 3 ? "block" : "none" }}>
        <h3>Payment Details</h3>

        <label htmlFor="card_info">Card Information</label>
        <input id="card_info" value={formData.card_info} onChange={onChange} />

        <label htmlFor="expiry_date">Expiry Date</label>
        <input
          id="expiry_date"
          value={formData.expiry_date}
          onChange={onChange}
        />

        <button type="button" onClick={prevStep}>
          Previous
        </button>
        <button type="button" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Step;
