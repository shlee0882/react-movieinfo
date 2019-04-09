import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movieTitles = [
  "The Load of the Rings",
  "Harry Potter",
  "Star Wars",
  "I am Sam"
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51uGVkvLkCL.jpg",
  "http://imgc.allpostersimages.com/img/posters/harry-potter-candles_u-L-F9DGY50.jpg",
  "https://imgc.allpostersimages.com/img/print/u-g-F8G58H0.jpg?w=300&h=450",
  "https://m.media-amazon.com/images/M/MV5BMjE2Mzk5MTAxMV5BMl5BanBnXkFtZTcwNDQyMjgyMQ@@._V1_.jpg"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
