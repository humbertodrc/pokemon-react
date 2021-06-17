import React, { useState } from 'react'
import PokemonsContext from "./index"
import apiCall from "../../api"

export default function PokemonProvaider({ children }) {

    // estado para guardar los pokemons resultantes de la llamada a la api
    const [pokemons, setPokemons] = useState([])


    const getPokemons = async() =>{
        try {
            const pokemonsResponse = await apiCall({ url:"https://pokeapi.co/api/v2/pokemon?limit=100"})
            setPokemons(pokemonsResponse.results);

        } catch (error) {
            setPokemons([])
        }
    }

    return (
        // aca vamos a regresar el contexto
        <PokemonsContext.Provider value={{ getPokemons, pokemons }}>
        {children}
        </PokemonsContext.Provider>
        
    )
}












// el provaider utiliza el contexto que se creo en index.js de pokemons para colocarlo en App.js