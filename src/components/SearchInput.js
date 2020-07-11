import React from "react";
import "../App.css";



export const SearchInput = (props) => {
    return (
        <div>
            <div className="form-group">
                <label htmlFor="language">Search Director:</label>
                <input
                    onChange={e => props.onChange(e.target.value)}
                    value={props.search}
                    name="term"
                    list="term"
                    type="text"
                    className="form-control"
                    placeholder="ozu yasujiro"
                    id="term"
                />
            </div>
        </div>
    );
}