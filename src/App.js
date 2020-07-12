import React, { useState, useEffect, Fragment } from 'react';
import Wrapper from "./components/Wrapper";
import { Table } from "./components/Table";
import { TableRow } from "./components/TableRow";
import { SearchInput } from "./components/SearchInput";
import criterion from "./criterion.json";

export const App = (props) => {

    const [films, setFilms] = useState({
        data: criterion,
        headers: ["#", "Type", "Spine", "Title", "Director"
            , "Country", "Year", "Duration"],
        sorted: "desc"
    });
    const [search, setSearch] = useState("");
    const [filtered, setFiltered] = useState([]);


    //toggle between desc and asc sort
    const runSort = (event) => {
        // get table header (property of data)
        const property = event.target.innerHTML

        if (films.sorted === "desc") {
            // access property (header) of object
            // objectName["propertyName"]
            // sorting strings -  String.localeCompare compare characters so they appear in the right order
            setFilms({ data: films.data.sort((a, b) => b[property].localeCompare(a[property])), headers: films.headers, sorted: "asc" })
        } else {
            setFilms({ data: films.data.sort((a, b) => a[property].localeCompare(b[property])), headers: films.headers, sorted: "desc" })
        }
    }

    useEffect(() => {
        setFiltered(
            films.data.filter(f => f.Director.toLowerCase().includes(search.toLowerCase()))
        );
    }, [search, films])


    return (
        <div className="wrapper">
            <Wrapper />

            <SearchInput
                onChange={setSearch}
            />

            <Table headers={films.headers} onClick={runSort}>
                {filtered.map((film) => (

                    <TableRow
                        id={film.ID}
                        key={film.ID}
                        title={film.Title}
                        director={film.Director}
                        country={film.Country}
                        year={film.Year}
                        duration={film.Duration}
                        type={film.Type}
                        spine={film.Spine}
                        {...film}
                    />

                ))}

            </Table>


        </div >

    );
}

