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
            <input type="button" value="Next" onClick={handleStep1} />
          </div>
        )}
      </div>
      <div id="step2">
        {second && (
          <div id="step2Data">
            <h2>Car Details</h2>
            <input type="text" placeholder="Model" id="model" />
            <input type="text" placeholder="Car Price" id="car_price" />
            <input type="button" value="Previous" onClick={handlePrev2} />
            <input type="button" value="Next" onClick={handleStep2} />
          </div>
        )}
      </div>
      <div id="step3">
        {third && (
          <div id="step3Data">
            <h2>Payment Details</h2>
            <input type="text" placeholder="Card Info" id="card_info" />
            <input type="text" placeholder="Expiry Date" id="expiry_date" />
            <input type="button" value="Previous" onClick={handlePrev3} />
            <input type="button" value="Submit" onClick={handleStep3} />
          </div>
        )}
      </div>
      {last}
    </form>
  );
};

export default Step;
