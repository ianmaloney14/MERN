import React,{ useState, useEffect } from "react";
import axios from 'axios'

const PokemonAPI = () => {
    const [getPokemon, setPokemon] = useState([]);
    const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/?limit=865'

    useEffect(() => {
        axios.get(pokemonAPI)
            // .then(response => {
            //     return response.json()
            // })
            .then(response => {
                return setPokemon(response.data.results)
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
export default PokemonAPI

