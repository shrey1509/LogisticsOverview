import React from "react";
import SpecialtyTag from "../SpecialtyTag";
import { Tag } from "../../types";

const SpecialtyTagGroup = ({tags}:{tags:Tag[]}) => {
    return (
        <div className="specialty-tag-group">
            {tags.map((tag,index)=>
                <SpecialtyTag key={'tag-'+index} tag={tag}/>
            )}
        </div>
    );
}

export default SpecialtyTagGroup;