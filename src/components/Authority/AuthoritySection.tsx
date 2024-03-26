import React from 'react';
import { Authority } from "../../types";

const AuthoritySection = ({ type, status, age }:{type:Authority["type"],status:Authority["status"],age:Authority["age"]}) => {
    return (
      <div className="authority-section">
        <div className="authority-field">
          Authority
          <span>{type}</span>
        </div>
        <div className="authority-field">
          Operating Status
          <span>{status}</span>
        </div>
        <div className="authority-field">
          Age
          <span>{age}</span>
        </div>
      </div>
    );
};

export default AuthoritySection;