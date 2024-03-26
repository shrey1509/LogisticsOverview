import React from "react";
import { OverviewData } from "../../types";


const WebsiteDetails = ({links}:{links:OverviewData["details"]["links"]}) => {
    return (
        <div className="website-section">
            {links.map((link,index)=>
                <a href={link} key={'link-'+index} target="_blank">{link}</a>
            )}
        </div>
    );
}

export default WebsiteDetails;