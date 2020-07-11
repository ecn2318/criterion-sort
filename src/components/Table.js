import React from "react";
import "../App.css";

export const TableHeader = (props) => {
    return <th onClick={(e) => props.onClick(e)} value={props.value} scope="col" className="no-decor">{props.value}</th>
}

export const Table = (props) => {
    return <table className="table table-hover">
        <thead>
            <tr>
                {props.headers.map(header => {
                    return <TableHeader onClick={props.onClick} value={header} />
                })}
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
    </table>
}
