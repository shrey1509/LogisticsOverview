import React from "react";
import { Recommendation } from "../../types";

const RecommendationDetails = ({ recommended }:{ recommended:Recommendation["recommended"] }) => {
    const getRecommended = () => {
        if(recommended){
            return "We recommend to use this carrier"
        }else{
            return "Do not use this carrier"
        }
    }
    return (
        <div className="status-indicator">
        {recommended===true ?
          <img className="status-icon" src="check-icon.svg" alt="check"/>
        :
          <img className="status-icon" src="cross-icon.svg" alt="cross"/>
        }
        <span>{getRecommended()}</span>
      </div>
    );
}

export default RecommendationDetails;