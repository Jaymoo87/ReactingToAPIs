import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles.css";
import { normalizeUnits } from "moment/moment";
import FilmCard from "./components/FilmCard";

const App = () => {
  const [CardLoaded, setCardLoaded] = useState("main");
  //const [filmsLoaded, setFilmsLoaded] = useState(false);

  useEffect(() => {
    getPerson();
    getFilm();
  }, []);

  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);

  const getPerson = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  };

  const getFilm = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  };

  if (CardLoaded === "main") {
    return (
      <main>
        <div>
          <div className="  row col-12 justify-content-around">
            <div className=" d-block col-12 col-md-6 col-sm-12 mt-4">
              <div className=" bg-primary card shadow-lg">
                <div className="row card-body">
                  <img
                    src={require("./components/ghibliPhoto.jpg")}
                    className=""
                    style={{ aspectRatio: 2 / 1 }}
                    alt="Studio Ghibli Mural"
                  />
                </div>
                <h3 className="card-title text-center mx-3"></h3>

                <p className=" m-5 card-text "></p>
                <div className="d-flex justify-content-between mx-2">
                  <h6 className=" text-muted d-flex card-text fst-italic"></h6>
                  <h6 className=" text-muted d-flex card-text fst-italic"></h6>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-5">
                <button
                  className="btn btn-info"
                  onClick={() => setCardLoaded("films")}
                >
                  Film
                </button>
                <button
                  className="btn btn-info"
                  onClick={() => setCardLoaded("person")}
                >
                  People
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  } else if (CardLoaded === "films") {
    return (
      <main>
        <div>
          <div className="  row col-12 justify-content-around">
            <div className=" d-block col-12 col-md-6 col-sm-12 mt-4">
              <div className=" bg-primary card shadow-lg">
                <div className="row card-body">
                  <img
                    src={require("./components/ghibliPhoto.jpg")}
                    className=""
                    style={{ aspectRatio: 2 / 1 }}
                    alt="Studio Ghibli Mural"
                  />
                </div>
                <h3 className="card-title text-center mx-3"></h3>

                <p className=" m-5 card-text "></p>
              </div>
              <div className="d-flex justify-content-around mt-5">
                {/* <button className="btn btn-info" onClick={() => getFilm()}>
                Film
              </button> */}
                <button
                  className="btn btn-info"
                  onClick={() => setCardLoaded("person")}
                >
                  People
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row col-12 d-flex justify-content-around">
          {films.map((film) => (
            <div
              key={`film-card-${film.id}`}
              className=" d-block col-12 col-md-6 col-sm-12 mt-4"
            >
              <div className="mb-2 card shadow-lg">
                <img
                  className="border border-dark rounded-circle"
                  style={{ aspectRatio: 2 / 1 }}
                  src={film.movie_banner}
                />
                <div className="row card-body"></div>
                <h3 className="card-title text-center mx-3">{film.title}</h3>

                <p className=" m-5 card-text ">{film.description}</p>
                <div className="d-flex justify-content-between mx-2">
                  <h6 className=" text-muted d-flex card-text fst-italic">
                    Year Released: {film.release_date}
                  </h6>
                  <h6 className=" text-muted d-flex card-text fst-italic">
                    Rotten Tomatoes: {film.rt_score}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  } else if (CardLoaded === "person") {
    return (
      <main>
        <div>
          <div className="  row col-12 justify-content-around">
            <div className=" d-block col-12 col-md-6 col-sm-12 mt-4">
              <div className=" bg-primary card shadow-lg">
                <div className="row card-body">
                  <img
                    src={require("./components/ghibliPhoto.jpg")}
                    className=""
                    style={{ aspectRatio: 2 / 1 }}
                    alt="Studio Ghibli Mural"
                  />
                </div>
                <h3 className="card-title text-center mx-3"></h3>

                <p className=" m-5 card-text "></p>
                <div className="d-flex justify-content-between mx-2">
                  <h6 className=" text-muted d-flex card-text fst-italic"></h6>
                  <h6 className=" text-muted d-flex card-text fst-italic"></h6>
                </div>
              </div>
              <div className="d-flex justify-content-around mt-5">
                <button
                  className="btn btn-info"
                  onClick={() => setCardLoaded("films")}
                >
                  Film
                </button>
                {/* <button className="btn btn-info" onClick={() => getPerson()}>
                  People
                </button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row col-12 justify-content-around">
          {people.map((person) => (
            <div
              key={`person-card-${person.id}`}
              className="d-block col-12 col-md-6 col-sm-12 mt-4"
            >
              <div className="mb-2 card shadow-lg">
                <span className=" d-flex justify-content-end text-muted card-text fst-italic mx-2 mt-1">
                  Age {person.age}
                </span>
                <div className="row card-body"></div>
                <h3 className="card-title mx-3 text-center">{person.name}</h3>
                <p className=" m-2 card-text ">Eye Color: {person.eye_color}</p>
                <p className=" m-2 card-text ">
                  Hair Color: {person.hair_color}
                </p>
                <div className="d-flex justify-content-between mx-2">
                  <h6 className=" text-muted d-flex card-text fst-italic">
                    Gender: {person.gender}
                  </h6>
                  <a
                    href={person.url}
                    className="text-decoration-none text-primary d-flex card-text fst-italic"
                  >
                    API: {person.name}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
};

export default App;
//**** need to make person.url and name with a hyperlink to press */
//****  className={text === 'foo' ? styles.class1 : styles.class2 }  syntax for rotten tomatoes score color */
//{film.rt_score > 75 ? style.class1 : styles.class2}
