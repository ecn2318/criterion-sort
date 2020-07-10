import React, { useState, useEffect } from 'react';
import Row from "./components/Row";
import { Wrapper, Table } from "./components/Wrapper";
import { SearchBar } from "./components/inputs";
import criterion from "./criterion.json";

export const App = (props) => {
  const [search, setSearch] = useState("");
  const [films, setFilms] = useState({
    data: criterion,
    headers: ["#", "Type", "Spine", "Title", "Director"
      , "Country", "Year", "Duration"],
    sorted: "descending"
  });

  //.reverse()? .toggle()
  const runFilter = (event) => {
    const property = event.target.innerHTML
    //descending sort
    if (films.sorted === "descending") {
      setFilms({ data: films.data.sort((a, b) => b[property].localeCompare(a[property])), headers: films.headers, sorted: "ascending" })
    } else {
      setFilms({ data: films.data.sort((a, b) => a[property].localeCompare(b[property])), headers: films.headers, sorted: "descending" })
    }
  }

  useEffect(() => {
    if (!search) {
      return;
    } //match with films data?

  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
    console.log(search)
  };

  const handleFormSubmit = () => {
    console.log(search)
    setFilms({ data: films.data.filter(f => f.Title.toLowerCase().includes(search.toLowerCase())), headers: films.headers, sorted: films.sorted })

  };

  return (
    <div className="wrapper">
      <Wrapper />
      <SearchBar
        handleFormSubmit={handleFormSubmit}
        onChange={setSearch}
        results={search}
      />
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