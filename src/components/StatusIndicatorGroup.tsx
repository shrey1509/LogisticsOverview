import React from 'react';
import StatusIndicator from "./StatusIndicator";
import { Check } from "../types";

const StatusIndicatorGroup = ({ statuses }:{ statuses:Check[] }) => {
    return (
      <div className="status-indicator-group">
        {statuses.map((status,index)=>
          <StatusIndicator key={'status-'+index} status={status} />
        )}
      </div>
    );
};

export default StatusIndicatorGroup;