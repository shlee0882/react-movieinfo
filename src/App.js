import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie'



const movies = [
  {
    title: "The Load of the Rings",
    poster: "https://images-na.ssl-images-amazon.com/images/I/51uGVkvLkCL.jpg"
  },
  {
    title: "Harry Potter",
    poster: "http://imgc.allpostersimages.com/img/posters/harry-potter-candles_u-L-F9DGY50.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://imgc.allpostersimages.com/img/print/u-g-F8G58H0.jpg?w=300&h=450"
  },
  {
    title: "I am Sam",
    poster: "https://m.media-amazon.com/images/M/MV5BMjE2Mzk5MTAxMV5BMl5BanBnXkFtZTcwNDQyMjgyMQ@@._V1_.jpg"
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
