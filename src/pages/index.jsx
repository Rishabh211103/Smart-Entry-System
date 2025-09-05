import React from "react";
import {team} from '../../constants/team'
import Heading from "../../components/Heading";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Speaker from "../../assets/speaker.svg";

const Team = () =>{
    return(
        <>
            <div className="cont">
                <Navbar />
                <div className="team-heading">
                    <Heading
                        heading={'Team Members '}
                        content={"<p>A harmonious collaboration steering towards a common goal, that’s how we define our incredible team. Bound together by a single cause of sharing ideas worth  spreading, we’re the trailblazers holding the fort for this newfound journey. Meet our ingenious, passionate and zealous team.</p>"}
                    />
                    <div className="speaker-card-container">
                        <div className="speaker-heading team-heading" >
                            <h1  className="for-reference-heading team-desg ">{'Organizer'}</h1>
                        </div>
                        <div className="speaker-card">
                            {team?.organizer.map((member) => (
                                <div className="speaker-card-content">
                                    <img src={member.cdn} alt="Speaker Image" />
                                    <h3>{member.name}</h3>
                                    {/* <p>{member.designation}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="speaker-card-container">
                        <div className="speaker-heading team-heading" >
                            <h1  className="for-reference-heading team-desg ">{'Co-Organizer'}</h1>
                        </div>
                        <div className="speaker-card">
                            {team?.coOrganizer.map((member) => (
                                <div className="speaker-card-content">
                                    <img src={member.cdn} alt="Speaker Image" />
                                    <h3>{member.name}</h3>
                                    {/* <p>{member.designation}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="speaker-card-container">
                        <div className="speaker-heading team-heading" >
                            <h1  className="for-reference-heading team-desg ">{'Curator'}</h1>
                        </div>
                        <div className="speaker-card">
                            {team?.curator.map((member) => (
                                <div className="speaker-card-content">
                                    <img src={member.cdn} alt="Speaker Image" />
                                    <h3>{member.name}</h3>
                                    {/* <p>{member.designation}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                   
                    
                    <div className="speaker-card-container">
                        <div className="speaker-heading team-heading" >
                            <h1  className="for-reference-heading team-desg ">{'Operations'}</h1>
                        </div>
                        <div className="speaker-card">
                            {team?.opeartions.map((member) => (
                                <div className="speaker-card-content">
                                    <img src={member.cdn} alt="Speaker Image" />
                                    <h3>{member.name}</h3>
                                    {/* <p>{member.designation}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="speaker-card-container">
                    <div className="speaker-card-container">
                        <div className="speaker-heading team-heading" >
                            <h1  className="for-reference-heading team-desg ">{'Technical'}</h1>
                        </div>
                        <div className="speaker-card">
                            {team?.technical.map((member) => (
                                <div className="speaker-card-content">
                                    <img src={member.cdn} alt="Speaker Image" />
                                    <h3>{member.name}</h3>
                                    {/* <p>{member.designation}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                        <div className="speaker-heading team-heading" >
                            <h1  className="for-reference-heading team-desg ">{'Motion Designer'}</h1>
                        </div>
                        <div className="speaker-card">
                            {team?.motion.map((member) => (
                                <div className="speaker-card-content">
                                    <img src={member.cdn} alt="Speaker Image" />
                                    <h3>{member.name}</h3>
                                    {/* <p>{member.designation}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="speaker-card-container">
                        <div className="speaker-heading team-heading" >
                            <h1  className="for-reference-heading team-desg ">{'Production'}</h1>
                        </div>
                        <div className="speaker-card">
                            {team?.production.map((member) => (
                                <div className="speaker-card-content">
                                    <img src={member.cdn} alt="Speaker Image" />
                                    <h3>{member.name}</h3>
                                    {/* <p>{member.designation}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    
                    <div className="speaker-card-container">
                        <div className="speaker-heading team-heading" >
                            <h1  className="for-reference-heading team-desg ">{'Marketing'}</h1>
                        </div>
                        <div className="speaker-card">
                            {team?.marketing.map((member) => (
                                <div className="speaker-card-content">
                                    <img src={member.cdn} alt="Speaker Image" fallback={Speaker}/>
                                    <h3>{member.name}</h3>
                                    {/* <p>{member.designation}</p> */}
                                </div>
                            ))}
                        </div>
                    </div> 
                    <div className="speaker-card-container">
                        <div className="speaker-heading team-heading" >
                            <h1  className="for-reference-heading team-desg ">{'Content'}</h1>
                        </div>
                        <div className="speaker-card">
                            {team?.writer.map((member) => (
                                <div className="speaker-card-content">
                                    <img src={member.cdn} alt="Speaker Image" fallback={Speaker}/>
                                    <h3>{member.name}</h3>
                                    {/* <p>{member.designation}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="speaker-card-container">
                        <div className="speaker-heading team-heading" >
                            <h1  className="for-reference-heading team-desg ">{'Member'}</h1>
                        </div>
                        <div className="speaker-card">
                            {team?.member.map((member) => (
                                <div className="speaker-card-content">
                                    <img src={member.cdn} alt="Speaker Image" />
                                    <h3>{member.name}</h3>
                                    {/* <p>{member.designation}</p> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Team;