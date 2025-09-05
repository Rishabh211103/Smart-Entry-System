import React from "react";

const Heading = ({heading,content})=>{
    return(
        <div className="speakers-component ">
            <div className="speaker-heading">
                <div className="red-marker"></div>
                <h1>{heading}</h1>
            </div>
            <div className="color-grey t-align" dangerouslySetInnerHTML={{__html:content}}></div>
        </div>
    )
}

export default Heading