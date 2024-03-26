import React from 'react';
import { OverviewData } from "../../types";

const OverviewImages = ({ imageSources }:{ imageSources:OverviewData["images"] }) => {
    return (
      <div className="overview-images">
        {imageSources.map((src,index) =>
            <img key={'src-'+index} src={src} alt="Carrier Image" />
        )}
      </div>
    );
};

export default OverviewImages;