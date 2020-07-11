import React from "react";
import "../App.css";

function Wrapper(props) {
    return <div>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Criterion Channel</h1>
                <p className="lead">List of videos on Criterion Channel (as of 06.21.2019)</p>
                <hr></hr>
                <p>data source: @morbusiff</p>
                <p className="lead">
                    <a className="btn btn-info btn-lg" href="https://www.criterionchannel.com/" target="_blank" role="button">Watch now</a>
                </p>
            </div>
        </div>
    </div>
}

export default Wrapper;
