import React from "react";

const Pricing = () => {
  return (
    <div className="container pricing-section">
      <div className="row align-items-center">
        
        {/* LEFT */}
        <div className="col-md-4 pricing-left">
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">See pricing →</a>
        </div>

        {/* RIGHT */}
        <div className="col-md-8">
          <div className="row text-center pricing-right">

            <div className="col-md-4 pricing-box">
              <img src="media/images/pricing.svg" alt="₹0" />
              <p>Free account opening</p>
            </div>

            <div className="col-md-4 pricing-box">
              <img src="media/images/pricing.svg" alt="₹0" />
              <p>
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>

            <div className="col-md-4 pricing-box">
              <img src="media/images/pricing20.svg" alt="₹20" />
              <p>Intraday and F&amp;O</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
