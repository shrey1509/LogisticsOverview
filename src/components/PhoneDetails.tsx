import React from "react";
import { Phone } from "../types";


const PhoneDetails = ({name,callDetails}:{name:Phone["name"],callDetails:Phone["callDetails"]}) => {
    return (
        <div className="phone-section">
            <div>{name!=null?name:""}</div>
            <div>{callDetails.number}</div>
        </div>
    );
}

export default PhoneDetails;