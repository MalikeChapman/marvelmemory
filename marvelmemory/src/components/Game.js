import React, {useState, useEffect} from "react";
import Header from "./Header";
import MarvelCharacters from "./MarvelCharacters";
import Victory from "./Victory";

function Game(){
    const [win, setWin] = useState(false);
    const [score, setScore] = useState(0);
    const [highscore, setHighScore] = useState(0);
    const [clicked, setClicked] = useState([]);
    const [level, setLevel] = useState(1);
    
    const updateScore = async () => await setScore(prev => prev + 1);
    const updateHighScore = async () => await setHighScore(score + 1);
    const updateLevel = async () => await setLevel(prev => prev + 1);
    const handleClick = (event) =>
    {
        console.log(event.target);
        if(clicked.includes(event.target))
        {
            console.log("got it");
            setClicked([]);
            setScore(0);
            setLevel(1);
        }
        else
        {
            setClicked([...clicked, event.target]);
            updateScore();
            if (score >= highscore) 
            {
                updateHighScore();
            }
        }
    }
    useEffect(() =>
    {
        switch(level)
        {
            case 1:
                {
                    if(score === 5)
                    {
                        updateLevel();
                        console.log("ok");
                        
                    }
                    break;
                }
            case 2:
                {
                    break;
                }
            case 3:
                {
                    break;
                }
            case 4:
                {
                    break;
                }
            default:

        }

    }, [score, highscore])

    return(
        <div className="Main">
            {win && <Victory/>}
            <Header level={level} score={score} highscore={highscore}/>
            <MarvelCharacters level={level} score={score} highscore={highscore} handleClick={handleClick}/>

        </div>
    )
}
export default Game;