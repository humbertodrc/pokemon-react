import { useParams } from "react-router";
import React, { useEffect, useContext } from 'react'
import PokemonsContext from "../../context/pokemons";
import PoketStats from "./components/PoketStats";
import Loading from "../../components/Loading/Loading";


export default function PokeDetail() {

    const { getPokemonsDetail, pokemonDetail, isLoading } = useContext(PokemonsContext);

    const { id } = useParams()

    
    useEffect(() => {
        // cada que se cargue la pantalla o cada que cambie el id solicitar el detalle del pokemon
        getPokemonsDetail(id).catch(null);

    }, [])

    // console.log(pokemonDetail);

    if(isLoading){
        return (
            <Loading />
        )
    }

    return (
        <div>
            <h3 style={{ marginTop: 15, marginBotton: 15 }}>Informacion General</h3>
            <p>{`name: ${pokemonDetail?.name}`}</p>
            <p>{`peso: ${pokemonDetail?.weight}`}</p>
            <p>{`altura: ${pokemonDetail?.height}`}</p>
            <div>
                <h3 style={{ marginTop: 30, marginBotton: 15}}>Habilidades</h3>
                <PoketStats stats={pokemonDetail?.stats ?? []} />
            </div>
        </div>
    )
}
