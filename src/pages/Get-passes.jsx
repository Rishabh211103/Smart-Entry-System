import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import logo from "../../assets/Tedx-logo.svg";
import tick from "../../assets/ticket.svg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams, useNavigate } from 'react-router-dom';
import { getSingleTransaction, downloadPass } from '../../services/Passes';
import CircularProgress from '@mui/material/CircularProgress';

const GetPasses = () => {

  const navigate = useNavigate();
  const [qrCode, setQrCode] = useState(false);
  const [invalid, setInvalid] = useState(true);
  const [bgColor, setBgColor] = useState("000000");
  const [color, setColor] = useState("ffffff");
  const [size, setSize] = useState(250);
  const [loading, setLoading] = useState(false);
  const [passDetails, setPassDetails] = useState({
    name: "Your Name",
    email: "Your Email",
    contact: "Your Contact",
    ticketId: "Your Ticket Id",
  })
  const params = useParams();

  useEffect(() => {
    //   console.log(passDetails);
    setLoading(true);
    setInvalid(false);
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${params._id}&size=${size}x${size}&bgcolor=${bgColor}&color=${color}`);
    getSingleTransaction(params._id)
      .then(res => {
        console.log(res);
        if (res.data) {
          let data = res.data;
          setPassDetails(data);
          setLoading(false);
        }
        else {
          setInvalid(true);
          setLoading(false);
        }
      });
  }, [params._id, bgColor, color, size]);




  return (
    <>
      <div className="cont">
        <Navbar />
        <div className="final-text-getpass">
          <div className="contact-form pass-form get-ticket-container" >

            <Heading
              heading={invalid ? 'Not Booked Yet?' : 'Your Pass Details'}
              content={'<p></p>'}
            />
            {loading ? (
              <div className="loader-holder">
                <CircularProgress color="secondary" size={80} />
              </div>
            ) : (<div className="get-pass-wrapper">
              <div className="ticket final-ticket">
                <div className="ticket-text">

                  <img src={tick} alt="" />
                  <h1>{passDetails?.name}</h1>
                  <p>@{passDetails?.email?.split('@')[0]}</p>
                  <h2>#{passDetails?.transactionId}</h2>
                  <div className="venue-ticket">
                    <p>June 11, 2022 </p>
                    <p><span>KP Nautiyal Auditorium </span> <br /> Graphic Era Hill University <br /> Dehradun, Uttarakhand</p>
                  </div>
                  {/* <div className="logo-ticket">
                    <img src={logo} alt="" />
                  </div> */}
                </div>
              </div>
              {invalid ? (null) : (<div className="for-graphians" style={{ marginTop: '3%' }}>
                <div className="speaker-heading pass-heading-column" >
                  <h1 className="for-reference-heading ">
                    Get Simplified Entry with QR
                  </h1>
                  <p className="color-grey t-align">
                    Get your QR Scanned at the entry for seemless entry.
                  </p>
                </div>
                <div className="qr-parent">
                  <div className="qr-code-container">
                    <img src={qrCode} alt="" />
                  </div>
                </div>
              </div>)}
            </div>)}
          </div>
        </div>

      </div>
      <div className="pass-footer">
        <Footer />
      </div>
    </>



  )
}

export default GetPasses;