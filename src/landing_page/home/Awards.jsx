import React from "react";

const Awards=()=>{
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-6 p-5">

                    <img src="media/images/largestBroker.svg" alt="Awards Image" className="img-fluid"/>
                    </div>
                    <div className="col-6 p-5 mt-5">
                       <h1>Largest stock broker in India</h1>
                       <p>1.6+ crore customers trust it with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                       <div className="row mb-4">
                        <div className="col-6">
                        <ul>
                        <li>
                            <p>Futures and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivates</p>
                        </li>

                       </ul>
                       </div>
                       <div className="col-6">
                          <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt. Securities </p>
                        </li>
                          </ul>
                       </div>
                       </div>
                       <img src="media/images/pressLogos.png" alt="pressLogo" />
                    </div>
                
                </div>
        </div>
    )
}
export default Awards;