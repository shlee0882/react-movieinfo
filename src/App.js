import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'


class App extends Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()   
  componentWillMount(){
    console.log('will mount')
  }

  componentDidMount(){
    console.log('did mount')

    setTimeout(()=>{
      // this.state.greeting = 'something' 
      this.setState({
        greeting: 'Hello again!'
      })
    }, 2000)

    setTimeout(()=>{
      this.setState({
        movies: [
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
          }
        ]
      })
      console.log('hello')
    },3000)
  }

  state = {
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    console.log('did render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
