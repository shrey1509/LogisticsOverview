import React from "react";
import { Address } from "../../types";


const AddressDetails = ({addressLines,country}:{addressLines:Address["addressLines"],country:Address["country"]}) => {
    return (
        <div className="address-section">
            {addressLines.length>0&&addressLines.map((address)=><div>{address}</div>)}
            <span>{country}</span>
        </div>
    );
}

export default AddressDetails;