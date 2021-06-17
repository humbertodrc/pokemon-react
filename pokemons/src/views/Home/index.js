import { useContext } from "react"
import React, { useEffect } from 'react';
import PokemonsContext from "../../context/pokemons"
import PokemonsList from "./components/PokemonsList/PokemonsList";
import Loading from "../../components/Loading/Loading";

export default function Home() {

    // aca importo el contexto que se va a usar en este componente con useContext
    const { getPokemons, pokemons, isLoading } = useContext(PokemonsContext);
    
    
    useEffect(() => {
        getPokemons().catch(null)
    }, [])

    // console.log(pokemons)

    if(isLoading){
        return (
            <Loading />
        )
    }

    return <PokemonsList pokemons={pokemons} />
}
