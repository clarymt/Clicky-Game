import React from "react";
import "./Card.css";

const Card = props => (
    
    <div className="card" onClick={() => props.clickCount(props.id)}>
        <div className="img-container">
            <img class="card-img" alt={props.name} src={props.image} />
        </div>
    </div>
);
/*<div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4" className="card" onClick={() => props.clickCount(props.id)}>
    <div class="card"className="img-container">
    <img class="card-img" alt={props.name} src={props.image} />
     
    </div>
  </div></div>
  */

export default Card;