import React from "react";

export const SearchBar = (props) => {
    return (
        <div>


            <div className="form-group">
                <label htmlFor="language">Search Term:</label>
                <input
                    onChange={e => props.onChange(e.target.value)}
                    value={props.search}
                    name="term"
                    list="term"
                    type="text"
                    className="form-control"
                    placeholder="Type in a search term"
                    id="term"
                />
            </div>
            <button onClick={() => props.handleFormSubmit()}>Search</button>
        </div>
    );
}