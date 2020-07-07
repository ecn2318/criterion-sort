import React from "react";

function Table(props) {
    return <tr><td>{props.id}</td>
        <td>{props.type}</td>
        <td>{props.spine}</td>
        <td>{props.title}</td>
        <td>{props.director}</td>
        <td>{props.country}</td>
        <td>{props.year}</td>
        <td>{props.duration}</td>
    </tr>
}

export default Table;



