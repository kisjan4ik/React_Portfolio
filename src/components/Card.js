import React from "react";
import CardInfo from "../components/CardInfo";

function Card(props){

return(
    <div className="t-inline-block t-card" onClick={() => props.click(props.item)}>
        <img className="t-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
    {props.item.selected && <CardInfo  title={props.item.title} subtitle={props.item.subtitle} link={props.item.link} />}
    </div>
)

}
 export default Card;