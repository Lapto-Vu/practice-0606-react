import React from "react";
import axios from "axios";
import Movie from "./Moive";
import "./App.css"

class App extends React.Component{
  state = {
    isLoading:true
  }

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    
    return <div className="inner"> {isLoading ? "Loading..." : movies.map(movie => (
      <Movie 
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image} />))} </div>;
  }
}


export default App;
