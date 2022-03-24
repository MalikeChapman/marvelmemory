import React, {useState, useEffect} from "react";
import Header from "./Header";
import MarvelCharacters from "./MarvelCharacters";
import Victory from "./Victory";

function Game(){
    const [win, setWin] = useState(false);
    const [score, setScore] = useState(0);
    const [highscore, setHighScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [clicked, setClicked] = useState([]);
    const [savedArray, setSavedArray] = useState([]);
    
    const updateScore =  () => {setScore(score => score + 1)};
    const updateHighScore =  () => {setHighScore(score + 1)};
    const updateLevel =  () => {setLevel(prev => prev + 1)};
    const click = (event) =>
    {
        console.log(event.currentTarget);
        let array = [...savedArray, event.currentTarget];
        setSavedArray(array);
        console.log(savedArray);
        if(savedArray.includes(event.currentTarget))
        {
            setSavedArray([]);
            setScore(0);
        }
        else
        {
            setSavedArray(arr => [...arr, event.currentTarget])
            setScore(prev => prev + 1)
            if(score >= highscore)
            {
                setHighScore(prev => prev + 1);
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
                    if(score === 10)
                    {
                        updateLevel();
                        console.log("ok");
                        
                    }
                    break;
                }
            case 3:
                {
                    if(score === 15)
                    {
                        updateLevel();
                        console.log("ok");
                        
                    }

                    break;
                }
            case 4:
                {
                    if(score === 20)
                    {
                        updateLevel();
                        console.log("ok");
                        
                    }

                    break;
                }
            default:
                {
                    
                }

        }

    }, [score])

    return(
        <div className="Main">
            {win && <Victory/>}
            <Header level={level} score={score} highscore={highscore}/>
            <MarvelCharacters level={level} score={score} highscore={highscore} handleClick={click}/>

        </div>
    )
}
export default Game;