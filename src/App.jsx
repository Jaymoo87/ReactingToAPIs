
import { React, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/styles.css"
import { normalizeUnits } from 'moment/moment';


const App = () => {
    const [films, setFilms]  = useState([])
    const [people, setPeople] = useState([])

    const getPerson = () => {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(res => res.json())
        .then(data => setPeople(data))
    }

        const getFilm = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(data => setFilms(data))
        }

  return (
        <main>
            <button onClick={() => getFilm()}>Film</button>
            <div className="row col-12 justify-content-around">
            {films.map(film => 
                <div  className="d-block col-12 col-md-6 col-sm-12 mt-4">
                    <div  className="mb-2 card shadow-lg">
                        <img className="border-color black rounded" style={{ aspectRatio: 2/1 }} src={film.movie_banner} />
                        <div className="row card-body"></div>
                            <h3 className="card-title mx-3">{film.title}</h3>
                            
                            <p className=" m-5 card-text ">{film.description}</p>
                            <div className= 'd-flex justify-content-between mx-2'>
                            <h6 className=" text-muted d-flex card-text fst-italic">Year Released: {film.release_date}</h6>
                            <h6 className=" text-muted d-flex card-text fst-italic ">Rotten Tomatoes: {film.rt_score}</h6>
                            </div>
                    </div>
              </div>
              
 )}</div>
 <button onClick={() => getPerson()}>People</button>
 <div className="row col-12 justify-content-around">
            {people.map(person => 
                <div  className="d-block col-12 col-md-6 col-sm-12 mt-4">
                    <div  className="mb-2 card shadow-lg">
                    <span className=" d-flex justify-content-end text-muted card-text fst-italic mx-2 mt-1">Age {person.age}</span>
                        <div className="row card-body"></div>
                            <h3 className="card-title mx-3">{person.name}</h3>
                            <p className=" m-2 card-text ">Eye Color: {person.eye_color}</p>
                            <p className=" m-2 card-text ">Hair Color: {person.hair_color} Eye Color: {person.eye_color}</p>
                            <div className= 'd-flex justify-content-between mx-2'>
                            <h6 className=" text-muted d-flex card-text fst-italic">Gender: {person.gender}</h6>
                            <h6 className=" text-muted d-flex card-text fst-italic "></h6>
                            </div>
                    </div>
              </div>
             
            )} </div> </main>
            );
        };
        
        export default App;
        //<img className="border-color black rounded" style={{ aspectRatio: 2/1 }} src={person.movie_banner} />