import { Fragment, useContext } from "react"
import React, { useEffect } from 'react';
import PokemonsContext from "../../context/pokemons"
import PokemonsList from "./components/PokemonsList/PokemonsList";
import Loading from "../../components/Loading/Loading";
import ErrorMesage from "../../components/ErrorMesage";

export default function Home() {

    // aca importo el contexto que se va a usar en este componente con useContext
    const { 
        getPokemons, 
        pokemons, 
        isLoading, 
        hasError,
        errorMesage, 
    } = useContext(PokemonsContext);
    
    
    useEffect(() => {
        getPokemons().catch(null)
    }, []) 

    // console.log(pokemons)

    if(isLoading){
        return (
            <Loading />
        )
    }

    return(
        <Fragment>
            {hasError ? <ErrorMesage mesage={errorMesage} /> : <PokemonsList pokemons={pokemons} />}
        </Fragment>
    )
}
