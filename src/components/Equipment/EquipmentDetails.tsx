import React from "react";
import { Equipment } from "../../types";

const EquipmentDetails = ({equipment}:{equipment:Equipment[]}) => {
    return (
        <div className="equipment-section">
            {equipment.map((equipment,index)=>
                <span key={'equip-'+index}>{equipment.value}{` `}{equipment.type}</span>
            )}
        </div>
    );
}

export default EquipmentDetails;