import React from "react";
import "../App.css";


export const Wrapper = (props) => {
    return <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Criterion Channel</h1>
                <p className="lead">List of videos on Criterion Channel (as of 06.21.2019)</p>
                <hr></hr>
                <p>data source: @morbusiff</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </div>
    </div>
}



export const TableHeader = (props) => {
    return <th onClick={(e) => props.onClick(e)} value={props.value} scope="col" className="no-decor">{props.value}</th>
}

export const Table = (props) => {
    return <table className="table">
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
