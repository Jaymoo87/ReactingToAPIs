
import { React, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./components/styles.css"


const App = () => {
    const [films, setFilms]  = useState([])
    const [people, setPeople] = useState([])

        const getFilm = () => {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(data => setFilms(data))
        }

    return (
        <main>
            <button onClick={() => getFilm()}>Film</button>
            {films.map(film => <div className="row col-12 justify-content-around">
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
              </div>
)}</main>
    );
};

export default App;