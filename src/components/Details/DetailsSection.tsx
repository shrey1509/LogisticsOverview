import React from "react";
import Card from "../Card";
import CardGroup from "../CardGroup";
import OperatingHours from "./OperatingHours";
import { getDetailsContent } from "../../utility";
import { OverviewData } from "../../types";
const DetailsSection = ({details}:{details:OverviewData["details"]}) => {
    return (
        <div className="details-section">
            <Card titleContentPairs={[{title:"Hours",content:<OperatingHours timePeriod={details.operatingHours.timePeriod} status={details.operatingHours.status}/>}]} classNames="card-first card-last"/>
            <CardGroup cards={getDetailsContent(details)}/>
        </div>
    );
}

export default DetailsSection;