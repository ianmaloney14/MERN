import { useState, useEffect } from "react";

const Pokemon = () => {
    const [getPokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=865')
            .then(response => {
                return response.json()
            })
            .then(response => {
                return setPokemon(response.results)
            })
            .catch((err) => {
                console.log(err)
            })
    },[]);

    return (
        <div>
            <ul>
            {getPokemon.map((pokemon, index)=>{
                return(<li key={index}>{pokemon.name}</li>)
            })}
            </ul>
        </div>
    )
}
export default Pokemon