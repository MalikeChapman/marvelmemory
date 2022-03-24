import React, {useEffect, useState} from "react";

function Card(props)
{
    const {data, handleClick} = props;
    return (
        <div className="Card-Div" onClick={(event) => handleClick(event)}>
            <div className="Img-Div">
                <img src={`${data.thumbnail.path}/portrait_xlarge.${data.thumbnail.extension}`} alt=""/>
            </div>
            <h3 className="Character-Name">{data.name}</h3>
        </div>
    )
}

export default Card;