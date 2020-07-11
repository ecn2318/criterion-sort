import React from "react";

/*
export const RowExp = (props) => {
    return <tr>
        <td colSpan="12">
            <div id={props.value} className="collapse">
                <p>{props.description}</p>
            </div>
        </td>
    </tr>
}*/

export const TableRow = (props) => {
    return <tr data-toggle="collapse" data-target={props.value} className="clickable">
        <td>{props.id}</td>
        <td>{props.type}</td>
        <td>{props.spine}</td>
        <td>{props.title}</td>
        <td>{props.director}</td>
        <td>{props.country}</td>
        <td>{props.year}</td>
        <td>{props.duration}</td>
        <td>{props.description}</td>
    </tr>
}






