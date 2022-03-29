import React, {useState, useEffect, useRef} from "react";
import Card from "./Card";
import { key } from "../key";
import {v4 as uuid} from 'uuid';

function MarvelCharacters(props)
{
   const {level, score, highscore, handleClick, gameStart} = props;
   const [list, setList] = useState([]);
   const [showcase, setShowcase] = useState([]);
   const firstRender = useRef(false);
    const params = new URLSearchParams({
        ts: key.ts,
        apikey: key.apikey,
        hash: key.hash,
        limit: key.limit, 
        
    });
    let characters = [];
    const listFunc =  async (data) => await
        setList(data);
    
    let marvelList =  async () => await
    fetch(`https://gateway.marvel.com/v1/public/characters?${params}`, {
        method: "GET",
        
    }).then( response => {
        return response.json();
    }).then(data => {
        listFunc(data.data.results);
        let holder = data.data.results;
        for(let i = 0; i < 5; i++)
        {
            let random = Math.floor(Math.random() * (holder.length + 1));
            const data = holder[random];
            characters = [...characters, {key: uuid(), data: data}]
        }
        setShowcase(characters);
            
    });
    const shuffleArray = (array) => {
        array.sort((a, b) => 0.5 - Math.random());
    }

    useEffect( () =>
    {
        marvelList();
    }, []);

    useEffect(() =>{
        console.log("test");
        let shuffle = [...showcase];
        shuffleArray(shuffle);
        setShowcase(shuffle);
    }, [score, highscore])

    useEffect(() =>
    {
        if(firstRender.current)
        {
            const updated = newArray();
            setShowcase(updated);
    
        }
        else
        {
            firstRender.current = true;
        }
    

    }, [level])

     function newArray ()
    {
        let array = [];
        let holder = [...list];
        for(let i = 1; i <= (level * 5); i++)
        {
            const ran = Math.floor(Math.random() * (holder.length + 1));
            const data = holder[ran];
            console.log(data);
            if(typeof data === "undefined")
            {
                console.log(ran + " data index");
                continue;
            }
            array = [...array, {key: uuid(), data: data}];
        }
        return array;
    }




    const style = {
        display: "grid",
        width: "100%",
        height: "70vh",
        gridTemplateColumns: `repeat(5, 1fr)`,
        gridTemplateRows: `auto`,
        justifyContent: "center"
    };
  
    return(
    <div className="Card-Grid" style={style}>
      {showcase.map((card) =>
      (<Card key={card.key} level={level} score={score} highscore={highscore} data={card.data} handleClick={handleClick}/>))}
    </div>)
}

export default MarvelCharacters;