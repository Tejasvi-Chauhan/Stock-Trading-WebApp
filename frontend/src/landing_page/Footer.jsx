import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
           <h3>EquiTrade</h3>
            <p>
              &copy; 2020 - 2025, Not EquiTrade Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Products</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Referral programme</a>
            <br />
            <a href="">Careers</a>
            <br />
            <a href="">EquiTrade.tech</a>
            <br />
            <a href="">Press & media</a>
            <br />
            <a href="">EquiTrade cares (CSR)</a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a href="">Contact</a>
            <br />
            <a href="">Support portal</a>
            <br />
            <a href="">Z-Connect blog</a>
            <br />
            <a href="">List of charges</a>
            <br />
            <a href="">Downloads & resources</a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund transfer</a>
            <br />
            <a href="">60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
         <p>
  EquiTrade Broking Pvt. Ltd.: Member of NSE & BSE – SEBI Registration No.:
  INZ0000XXXXX. Depository services are provided through EquiTrade Securities
  Pvt. Ltd. – SEBI Registration No.: IN-DP-XXX-20XX. Commodity trading services
  are offered via EquiTrade Commodities Pvt. Ltd. – MCX: XXXXX – SEBI
  Registration No.: INZ0000XXXXX. Registered Office: EquiTrade Broking Pvt.
  Ltd., #XXX, 4th Cross, Tech Park Road, J.P Nagar Phase 4, Bengaluru – 5600XX,
  Karnataka, India. For grievances related to securities broking, please
  contact support@equitrade.com and for depository-related issues write to
  dp@equitrade.com. Investors are advised to carefully read the Risk
  Disclosure Document prescribed by SEBI.
</p>

<p>
  Procedure to lodge a complaint on SEBI SCORES: Register on the SCORES portal.
  Mandatory details required for filing a complaint include Name, PAN,
  Address, Mobile Number, and Email ID. SCORES enables effective
  communication and faster resolution of investor grievances.
</p>

<p>
  Investments in the securities market are subject to market risks. Please
  read all related documents carefully before investing.
</p>

<p>
  Prevent unauthorised transactions in your trading and demat accounts by
  updating your registered mobile number and email ID with your stock
  broker. Transaction-related information will be sent directly by the
  Exchange to your registered contact details at the end of the day. KYC is a
  one-time process carried out through a SEBI-registered intermediary
  (broker, DP, mutual fund, etc.) and does not need to be repeated for other
  intermediaries. Investors subscribing to IPOs are not required to issue a
  cheque. Kindly mention your bank account details and authorize the bank for
  payment in case of allotment. In case of non-allotment, funds will remain in
  your bank account. EquiTrade does not provide stock tips or authorize any
  individual to trade on behalf of clients. If you come across anyone
  claiming to represent EquiTrade and offering such services, please report
  the same through our official support channels.
</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;