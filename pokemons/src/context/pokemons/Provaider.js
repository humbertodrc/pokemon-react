import React, { useState } from 'react'
import PokemonsContext from "./index"
import apiCall from "../../api"

export default function PokemonProvaider({ children }) {

    // estado para guardar los pokemons resultantes de la llamada a la api
    const [pokemons, setPokemons] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [isLoading, setIsLoading] = useState(false);


    const getPokemons = async() =>{
        try {
            setIsLoading(true)
            const pokemonsResponse = await apiCall({ url:"https://pokeapi.co/api/v2/pokemon?limit=100"})
            setPokemons(pokemonsResponse.results);

        } catch (error) {
            setPokemons([])
        }finally{
            setIsLoading(false)
        }
    }

    const getPokemonsDetail = async (id) => {

        if(!id) Promise.reject("id es requerido");

        try {
            setIsLoading(true)
            const pokemonDetail = await apiCall({ url:`https://pokeapi.co/api/v2/pokemon/${id}` })
            setPokemonDetail(pokemonDetail)

        } catch (error) {   
            setPokemonDetail({});
        }finally{
            setIsLoading(false)
        }
    };

    return (
        // aca vamos a regresar el contexto
        <PokemonsContext.Provider value={{ 
            getPokemons, 
            pokemons, 
            getPokemonsDetail, 
            pokemonDetail,
            isLoading
        }}>
        {children}
        </PokemonsContext.Provider>
        
    )
}












// el provaider utiliza el contexto que se creo en index.js de pokemons para colocarlo en App.js