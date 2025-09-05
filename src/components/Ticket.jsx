import React from 'react'
import logo from "../assets/Tedx-logo.svg";
import tick from "../assets/ticket.svg";
const Ticket = () => {
  return (
    <>
        <div className="ticket">
            <div className="ticket-text">
                <img src={tick} alt="" />
                <h1>Your Name</h1>
                <p>@username</p>
                <h2># TGEU2102</h2>
                <div className="venue-ticket">
                    <p>June 10, 2022 </p>
                    <p><span>KP Nautiyal Auditorium </span> <br /> Graphic Era Hill University <br /> Dehradun, Uttarakhand</p>
                </div>
                <div className="logo-ticket">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Ticket