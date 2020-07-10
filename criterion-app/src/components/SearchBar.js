import React from "react";
import "./style.css";


function SearchForm(props) {
    return (

        <div className="form-group">
            <label htmlFor="language">Search Term:</label>
            <input
                value={props.search}
                onChange={props.handleInputChange}
                name="term"
                list="term"
                type="text"
                className="form-control"
                placeholder="Type in a search term"
                id="term"
            />
            <button onClick={() => props.onClick()}>Searvh</button>
        </div>
    );
}

export default SearchForm;
