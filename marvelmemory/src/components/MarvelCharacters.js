import React, {useState, useEffect} from "react";
import Card from "./Card";
import { key } from "../key";

function MarvelCharacters(props)
{
   const {level, score, highscore, handleClick} = props;
   const [list, setList] = useState([]);
   const [showcase, setshowcase] = useState([]);
    const params = new URLSearchParams({
        ts: key.ts,
        apikey: key.apikey,
        hash: key.hash,
        limit: key.limit, 
        
    });
    let characters = [];
    const listFunc = async (data) => await 
        setList(data);
    
    let marvelList = async () => await
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
            characters = [...characters, 
            <Card key={i} level={level} score={score} handleClick={handleClick} data={data}/>]
        }
        setshowcase(characters);
            
    });
    const shuffleArray = (array) => {
        array.sort((a, b) => 0.5 - Math.random());
    }

    useEffect(() =>
    {
        marvelList();
    }, []);
    useEffect(() =>{
        let shuffle = [...showcase];
        shuffleArray(shuffle);
        setshowcase(shuffle);
    }, [score])


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
        {showcase}
    </div>)
}

export default MarvelCharacters;