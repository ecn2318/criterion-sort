import React from 'react';
import Table from "./components/Table";
import Wrapper from "./components/Wrapper";
import criterion from "./criterion.json";


class App extends React.Component {
    state = { criterion }

    render() {
        return (
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

            </Wrapper>);
    }

}


export default App;