import { useContext } from "react"
import React, { useEffect } from 'react';
import PokemonsContext from "../../context/pokemons"

export default function Home() {

    // aca importo el contexto que se va a usar en este componente con useContext
    const { getPokemons, pokemons } = useContext(PokemonsContext);
    
    
    useEffect(() => {
        getPokemons().catch(null)
    }, [])

    console.log(pokemons)

    return (
        <div>
            <h2>Hola desde Home</h2>
        </div>
    )
}
