import React from 'react';
import { TitleContentPair } from "../types";

const Card = ({ titleContentPairs, classNames }:{titleContentPairs:TitleContentPair[],classNames:string}) => {
    return (
      <div className={`card ${classNames}`}>
        {titleContentPairs.map((pair,index)=>
            <div key={'pair-'+index} className="title-content-pair">
                <h4 className="card-title">{pair.title}</h4>
                <div className="card-content">
                    {pair.content}
                </div>
            </div>
        )}
      </div>
    );
};

export default Card;