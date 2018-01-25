import React from "react";

class FilmStyle extends React.Component {


  render() {
    let listFilms = this.props.data.map(film => {
      return (
        <div 
        key={film.id}
        className="card col-sm-5 my-2 mx-auto d-flex justify-content-center"
        >
          <img
            className="card-img-top"
            src={require(`../srcImages/movie-banner.jpg`)}
            alt="Movie Banner"
          />
          <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <p className="card-text">{film.description}</p>
            <p>{film.people}</p>
          </div>
        </div>
      );
    });
    return <React.Fragment>{listFilms}</React.Fragment>;
  }
}

export default FilmStyle;

// api.data properties
//
// {
//   "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
//   "title": "Castle in the Sky",
//   "description": "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
//   "director": "Hayao Miyazaki",
//   "producer": "Isao Takahata",
//   "release_date": "1986",
//   "rt_score": "95",
//   "people": [
//     "https://ghibliapi.herokuapp.com/people/"
//   ],
//   "species": [
//     "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2"
//   ],
//   "locations": [
//     "https://ghibliapi.herokuapp.com/locations/"
//   ],
//   "vehicles": [
//     "https://ghibliapi.herokuapp.com/vehicles/"
//   ],
//   "url": "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
// }
