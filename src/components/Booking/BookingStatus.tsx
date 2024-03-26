import React from 'react';
import { Booking } from "../../types";

const BookingStatus = ({ timeAgo, rated }:{timeAgo:Booking["timeAgo"],rated:Booking["rated"]}) => {
    return (
      <div className="booking-section">
        <div>
          <h5>Rate this carrier</h5>
          <span>You booked this carrier {timeAgo}</span>
        </div>
        
        <img style={{'--rated': rated} as React.CSSProperties} className="rated-icon thumbs-up" src="thumbs-up.svg" alt="positive"/>
        <img style={{'--rated': rated} as React.CSSProperties} className="rated-icon thumbs-down" src="thumbs-down.svg" alt="negative"/>
        
      </div>
    );
};

export default BookingStatus;