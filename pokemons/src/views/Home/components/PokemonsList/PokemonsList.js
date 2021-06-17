import { Fragment } from "react";
import PokemonsItem from "../PokemonsItem/PokemonsItem";


export default function PokemonsList({ pokemons }) {

    return (
        <Fragment>
            {pokemons?.map((pokemon, index) => (
                <PokemonsItem key={index} {...pokemon}/>
            ))}
        </Fragment>
    )
}
