import React from 'react';
import { Tag } from "../types";

const SpecialtyTag = ({ tag }:{tag:Tag}) => {
    return (
      <div style={{'--tagColor': tag.tagColor} as React.CSSProperties} className="tag">
        <span>{tag.tagName}</span>
      </div>
    );
};

export default SpecialtyTag;