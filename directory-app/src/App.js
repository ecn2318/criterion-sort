import React from 'react';
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import criterion from "./criterion.json";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { selectFilter, textFilter } from 'react-bootstrap-table2-filter';



const selectOptions = [
  { value: 'feature', label: 'feature' },
  { value: 'supplement', label: 'supplement' },
  { value: 'short', label: 'short' },
  { value: 'trailer', label: 'trailer' }
];

const columns = [{
  dataField: 'ID',
  text: 'ID',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Type',
  text: 'Type',
  sort: true,
  filter: selectFilter({
    options: selectOptions
  })
}, {
  dataField: 'Title',
  text: 'Film Title',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Director',
  text: 'Director',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Country',
  text: 'Country',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Year',
  text: 'Year',
  sort: true,
  filter: textFilter()
}, {
  dataField: 'Duration',
  text: 'Duration',
  sort: true,
  filter: textFilter()
}];

const defaultSorted = [{
  dataField: 'Title',
  order: 'asc'
}];

const expandRow = {
  renderer: row => (
    <div>
      <h5>Synopsis</h5>
      <p>{row.Description}</p>
    </div>
  ),
  showExpandColumn: true,
  expandHeaderColumnRenderer: ({ isAnyExpands }) => {
    if (isAnyExpands) {
      return <b>-</b>;
    }
    return <b>+</b>;
  },
  expandColumnRenderer: ({ expanded }) => {
    if (expanded) {
      return (
        <b>-</b>
      );
    }
    return (
      <b>...</b>
    );
  }
};

class App extends React.Component {
  state = { criterion }

  render() {
    return (<Wrapper>

      <BootstrapTable
        bootstrap4
        keyField="ID"
        data={criterion}
        columns={columns}
        defaultSorted={defaultSorted}
        pagination={paginationFactory()}
        filter={filterFactory()}
        expandRow={expandRow}
      />

    </Wrapper>

    );
  }

}


export default App;

/*
<Wrapper>
{this.state.criterion.map(film => (
  <Table
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

    </Wrapper>

  */