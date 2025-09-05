import React from 'react'
import logo from "../assets/Tedx-logo.svg";
import tickdemo from "../assets/tickdem.svg";
import whitelogo from "../assets/whitelogo.svg";
const TicketDemo = () => {
  return (
    <>
    <div className="demo-ticket">
        <div className="ticket">
            <div className="ticket-text">
                <img src={tickdemo} alt="" />
                <h1>Get Your <br /> Pass Today</h1> 
                <div className="venue-ticket">
                    <p>June 11, 2022 </p>
                    <p><span>KP Nautiyal Auditorium </span> <br /> Graphic Era Hill University <br /> Dehradun, Uttarakhand</p>
                </div>
                <div className="logo-ticket">
                    <img src={whitelogo} alt="" />
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default TicketDemo