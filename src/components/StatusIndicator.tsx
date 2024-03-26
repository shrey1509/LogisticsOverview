import React from 'react';
import { Check } from "../types";

const StatusIndicator = ({ status }:{ status:Check }) => {
    return (
      <div className="status-indicator">
        {status.pass===true ?
          <img className="status-icon" src="check-icon.svg" alt="check"/>
        :
          <img className="status-icon" src="cross-icon.svg" alt="cross"/>
        }
        <span>{status.reason}</span>
      </div>
    );
};

export default StatusIndicator;