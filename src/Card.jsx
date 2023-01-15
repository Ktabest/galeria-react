import React from "react";

import {Card as BCard} from "react-bootstrap"

const Card = (props) => {
const { title, description, image } = props;

return (
    <BCard className="col-3" style={{border: 'none'}}>
<BCard className="bg-success" style={{width: '20rem', border: "solid 1px green", padding: "5px", margin: "10px"}}>
    <BCard.Img variant="top" src= {image} style= {{width: '308px'}}/>
    <BCard.Body>
        <BCard.Title>{title}</BCard.Title>
        <BCard.Text>{description}</BCard.Text>
    </BCard.Body>
  </BCard> 
  </BCard> 
);
};

export default Card;