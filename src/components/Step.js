import React, { useState } from "react";

const Step = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [last, setLast] = useState("");

  function handleStep1(e) {
    e.preventDefault();
    setFirst(false);
    setSecond(true);
  }

  function handleStep2(e) {
    e.preventDefault();
    setSecond(false);
    setThird(true);
  }

  function handleStep3(e) {
    e.preventDefault();
    setThird(false);
    setLast("Your Form has been submitted successfully.");
  }

  function handlePrev2(e) {
    e.preventDefault();
    setSecond(false);
    setFirst(true);
  }

  function handlePrev3(e) {
    e.preventDefault();
    setThird(false);
    setSecond(true);
  }

  return (
    <form>
      <div id="step1">
        {first && (
          <div id="step1Data">
            <h2>Customer Details</h2>
            <input type="text" placeholder="First Name" id="first_name" />
            <input type="text" placeholder="Last Name" id="last_name" />
            <button type="button" onClick={handleStep1}>Next</button>
          </div>
        )}
      </div>
      <div id="step2">
        {second && (
          <div id="step2Data">
            <h2>Car Details</h2>
            <input type="text" placeholder="Model" id="model" />
            <input type="text" placeholder="Car Price" id="car_price" />
            <button type="button" onClick={handlePrev2}>Previous</button>
            <button type="button" onClick={handleStep2}>Next</button>
          </div>
        )}
      </div>
      <div id="step3">
        {third && (
          <div id="step3Data">
            <h2>Payment Details</h2>
            <input type="text" placeholder="Card Info" id="card_info" />
            <input type="text" placeholder="Expiry Date" id="expiry_date" />
            <button type="button" onClick={handlePrev3}>Previous</button>
            <button type="button" onClick={handleStep3}>Submit</button>
          </div>
        )}
      </div>
      {last}
    </form>
  ); // prettier-ignoreg
};

export default Step;
