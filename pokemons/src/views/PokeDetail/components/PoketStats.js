import { Fragment } from "react"

export default function PoketStats({stats}) {
    return (
        <Fragment>
            {stats.map(({stat:{ name }, base_stat}, index) => (
                <div key={index} style={{ display: "flex" }}>
                    <p>{name}</p>
                    <p>{`: ${base_stat}%`}</p>
                </div>
            ))}
        </Fragment>
    )
}
