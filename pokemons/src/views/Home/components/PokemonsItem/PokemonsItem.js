import { Fragment } from "react";
import { Link } from 'react-router-dom'


export default function PokemonsItem({ url, name }) {

    const getID = () => url.split("/")[6];

    return (
        <Fragment>
            <p>{name}</p>
            <button>
                <Link to={`pokemon/${getID()}`}>
                    Mas detalle
                </Link>
            </button>
        </Fragment>
    )
}
