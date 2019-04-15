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

    this._getMovies();
  }

  state = {
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={index} />
    })
    return movies
  }

  _getMovies = async() => {
    // _callApi 를 불러올때까지 기달려라 응답을 받고나면 그다음줄 실행
    const movies= await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(potato => potato.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
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
