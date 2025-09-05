import React from "react";
import { speakers } from '../constants/speaker';
import Speaker from "../assets/speaker.svg";
import Heading from './Heading'

const Speakers = () => {
    return(
        <div id="speaker-section">
            <Heading
                heading={'Speakers'}
                content={'<p>TED is shaped by the world’s most inspired thinkers coming together to spread and seed ideas that matter – those whose role is to nurture, plant seeds, remove a few weeds, and marvel at life and creativity. The TED garden is still young. And the strengths of curiosity, knowledge sharing, and global connectedness are still the unbridled, powerful forces in the new TEDx world.</p>'}
            />
            <div className="speaker-card-container">
                <div className="speaker-card">
                    {speakers.map((speaker) => (
                        <div className="speaker-card-content" style={{textAlign:'left'}}>
                            <img src={speaker.image} alt="Speaker Image" fallback={Speaker}/>
                            <h3 style={{width:300,justifyContent:'flex-start'}}>{speaker.name}</h3>
                            <p style={{width:250}}>{speaker.designation}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="coming-soon ">
                <h3>{'More Revealing Soon...'}</h3>
            </div> */}
        </div>
    )
}

export default Speakers;