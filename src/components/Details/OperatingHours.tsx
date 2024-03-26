import React from "react";
import { OverviewData } from "../../types";

const OperatingHours = ({timePeriod,status}:{timePeriod:OverviewData["details"]["operatingHours"]["timePeriod"],status:OverviewData["details"]["operatingHours"]["status"]}) => {
    return (
        <div className="operating-hours-section">
            <span>{timePeriod.from}-{timePeriod.to}</span>
            <span>{status?"Open":"Closed"}</span>
        </div>
    );
}

export default OperatingHours;