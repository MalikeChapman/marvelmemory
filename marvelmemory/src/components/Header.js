import React, {useEffect, useState} from "react";
import MarvelLogo from "../Images/MLogo.png"

function Header(props)
{
    const {level, score, highscore} = props;
    return(
        <div className="Header-Container">
            <div className="Marvel-Logo-Container">
                <img className="Marvel-Img"
                src={MarvelLogo}
                alt="" />
            </div>
            <div className="Score-Container">
                <h4 className="Score-Headers">Level: {level}</h4>
                <h4 className="Score-Headers">Score: {score}</h4>
                <h4 className="Score-Headers">HighScore: {highscore}</h4>
            </div>
        </div>
    )
}

export default Header;