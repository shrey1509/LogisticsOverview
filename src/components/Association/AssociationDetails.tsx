import React from "react";
import { Association } from "../../types";

const AssociationDetails = ({association}:{association:Association}) => {
    return (
        <a className="association-user" href={association.link} target="_blank">
            <img src={association.image?association.image:""} alt="Associate User"/>
            <span>{association.name}</span>
            <small>{association.role}</small>
        </a>
    );
}

export default AssociationDetails;