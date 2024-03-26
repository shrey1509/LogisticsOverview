import React from 'react';
import Card from "./Card";
import { TitleContentPair } from "../types";

const CardGroup = ({ cards }:{cards:TitleContentPair[][]}) => {
    const getClassNames = (index:number) => {
      let classNames = ""
      if(index===0){
        classNames = classNames.concat(" card-first")
      }
      if(index===cards.length-1){
        classNames = classNames.concat(" card-last")
      }
      return classNames
    } 
    return (
      <div className="card-group">
        {cards.map((card,index)=>
            <React.Fragment key={`card-${index}`}>
              <Card titleContentPairs={card} classNames={getClassNames(index)}/>
              {cards.length>0 && index<cards.length - 1 && <hr className="card-separator" />}
            </React.Fragment>  
        )}
      </div>
    );
};

export default CardGroup;