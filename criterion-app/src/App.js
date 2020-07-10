import React, { useState } from 'react';
import Row from "./components/Table";
import { Wrapper, Table } from "./components/Wrapper";
import criterion from "./criterion.json";

export const App = (props) => {

  const [films, setFilms] = useState({
    data: criterion,
    headers: ["#", "Type", "Spine", "Title", "Director"
      , "Country", "Year", "Duration"],
    sorted: false
  });


  const runFilter = (event) => {
    const property = event.target.innerHTML
    setFilms({ data: films.data.sort((a, b) => b[property].localeCompare(a[property])), headers: films.headers })
  }

  return (
    <div className="wrapper">
      <Wrapper />
      <Table headers={films.headers} onClick={runFilter}>
        {films.data.map(film => (
          <Row
            id={film.ID}
            key={film.ID}
            title={film.Title}
            director={film.Director}
            country={film.Country}
            year={film.Year}
            duration={film.Duration}
            type={film.Type}
            spine={film.Spine}
          />
        ))}
      </Table>
    </div>


  );

}