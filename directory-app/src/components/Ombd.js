import React, { Component } from "react";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class OmdbContainer extends Component {
    state = {
        result: {},
        title: ""
    };

    searchMovies = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    //grab title

    grabTitle = event => {
        const { name, value } = event.target;
        console.log(event);
        console.log(event.target);
        this.setState({
            [name]: value
        });
        this.searchMovies(this.state.title);
    }

    render() {
        return (
            <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
            />
        );
    }
}

export default OmdbContainer;
