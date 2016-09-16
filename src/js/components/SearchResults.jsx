import React from 'react'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import * as actions from '../redux/actions'
import MovieTile from './MovieTile'

class searchResults extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let moviesToDisplay = [];

        // For some reason ! does not work!
        if (typeof this.props.searchResults === 'undefined') {
            return null;
        }

        // @TODO: Move this map function to a seperate file so both home and searchResults
        // can use it or refactor the components so you don't need both home and
        // searchResults
        moviesToDisplay = this.props.searchResults.map((movie) => {
            let imageURL = this.props.baseURL + this.props.posterSize + movie.poster_path;

            // Set a not found image, for the movies that do not have
            // a poster file path
            if (!movie.poster_path) {
                imageURL = 'https://c1.staticflickr.com/1/186/382004453_f4b2772254.jpg';
            }

            return <MovieTile key={movie.id} movieId={movie.id} title={movie.title} moviePoster={imageURL}/>
        });

        return (
            <div>
                <h1 className="text-center" style={{
                    "paddingBottom": "2%"
                }}>Search Results</h1>
                <div className="row">
                    {moviesToDisplay}
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state, props) => {
    return {
      searchResults: state.movieList.searchResults,
      posterSize: state.movieList.posterSize,
      baseURL: state.movieList.baseURL};
};

export default connect(mapStateToProps)(searchResults)
