import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles.css";
import { normalizeUnits } from "moment/moment";
import FilmCard from "./components/FilmCard";
import Films from "./components/Films";
import People from "./components/People";
import Main from "./components/Main";

const App = () => {
  const [CardLoaded, setCardLoaded] = useState("main");
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPerson();
    getFilm();
  }, []);

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

  return (
    <div>
      {CardLoaded === "main" && <Main setCardLoaded={setCardLoaded} />}
      {CardLoaded === "films" && (
        <Films films={films} setCardLoaded={setCardLoaded} />
      )}
      {CardLoaded === "person" && (
        <People people={people} setCardLoaded={setCardLoaded} />
      )}
    </div>
  );
};
export default App;

//****  className={text === 'foo' ? styles.class1 : styles.class2 }  syntax for rotten tomatoes score color maybe */
