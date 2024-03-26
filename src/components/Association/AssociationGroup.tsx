import React from "react";
import AssociationDetails from "./AssociationDetails";
import { Association } from "../../types";

const AssociationGroup = ({associations}:{associations:Association[]}) => {
    return (
        <div className="association-group">
            {associations.map((association,index)=>
                <AssociationDetails key={'association-'+index} association={association} />
            )}
        </div>
    );
}

export default AssociationGroup;