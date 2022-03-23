import React, {useEffect, useState} from "react";

export default function Level(props)
{
    const {level} = props;

    return (
        <div className="Level-Moadel">
            <h3>You are now on Level {level}</h3>
        </div>
    )
}