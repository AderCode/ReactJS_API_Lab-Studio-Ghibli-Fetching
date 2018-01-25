import React from 'react';
import './App.css';
import 'isomorphic-fetch';
import 'es6-promise';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      ghibliFilms: []
    }

  }
  
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(res => res.json())
    .then(studioGhibli => this.setState({ ghibliFilms: studioGhibli }))
  }
  
  render() {
    console.log(this.state.ghibliFilms)
    return (
      <div>
        <div className="container">
            
        </div>
      </div>
    );
  }
}

export default App;
