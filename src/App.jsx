import React from "react";
import FilmStyle from "./components/FilmStyle";
import PeopleStyle from "./components/PeopleStyle";
import "./App.css";
import "isomorphic-fetch";
import "es6-promise";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ghibliFilms: [],
      filmsLoaded: false,
      peopleLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(studioGhibli => this.setState({ ghibliFilms: studioGhibli, filmsLoaded: false, peopleLoaded:false }));
  }

  handleClick() {
    if (this.state.filmsLoaded === false) {
      this.setState(prevState => ({
        filmsLoaded: !prevState.filmsLoaded
      }));
      this.setState({ peopleLoaded : false });
    } else {
      this.setState(prevState => ({
        peopleLoaded: !prevState.peopleLoaded
      }));
      this.setState({ filmsLoaded : false });
    }
  }

  render() {
    console.log(this.state.ghibliFilms);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mx-auto text-center">
              <img src={require(`./srcImages/logo.png`)} alt="Studio Ghibli" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mx-auto text-center mt-2">
            <input
              type="button"
              value={this.state.filmsLoaded ? "Load People" : "Load Films"}
              onClick={e => this.handleClick(e)}
            />
          </div>
        </div>
        <div className="row">
          {this.state.filmsLoaded ? (<FilmStyle data={this.state.ghibliFilms} />) : ""}
          {this.state.peopleLoaded ? (<PeopleStyle data={this.state.ghibliFilms} />) : ""}
        </div>
      </div>
    );
  }
}

export default App;
