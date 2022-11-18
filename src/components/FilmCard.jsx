import React, { useState } from "react";

const FilmCard = (props) => {
  return (
    <section>
      <div className="row col-12 d-flex justify-content-around">
        <div
          key={`film-card-${props.film.id}`}
          className=" d-block col-12 col-md-6 col-sm-12 mt-4"
        >
          <div className="mb-2 card shadow-lg">
            <img
              className="border border-dark rounded-circle"
              style={{ aspectRatio: 2 / 1 }}
              src={props.film.movie_banner}
            />
            <div className="row card-body"></div>
            <h3 className="card-title text-center mx-3">{props.film.title}</h3>

            <p className=" m-5 card-text ">{props.film.description}</p>
            <div className="d-flex justify-content-between mx-2">
              <h6 className=" text-muted d-flex card-text fst-italic">
                Year Released: {props.film.release_date}
              </h6>
              <h6 className=" text-muted d-flex card-text fst-italic">
                Rotten Tomatoes: {props.film.rt_score}
              </h6>
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </section>
  );
};

export default FilmCard;
