import React from "react";
import "../App.css";


function Wrapper(props) {
    return <div className="wrapper">
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
        <br></br>

        {props.children}

    </div>
}


/*
function Wrapper(props) {
    return <div className="wrapper">
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
        <br></br>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Type</th>
                    <th scope="col">Spine</th>
                    <th scope="col">Title</th>
                    <th scope="col">Director</th>
                    <th scope="col">Country</th>
                    <th scope="col">Year</th>
                    <th scope="col">Duration</th>
                </tr>
            </thead>

            <tbody>

                {props.children}

            </tbody>
        </table>
    </div>
}
*/


export default Wrapper;