import React from "react";
import FilmCard from "./FilmCard";

const Films = (props) => {
  return (
    <main>
      <div>
        <div className="  row col-12 justify-content-around">
          <div className=" d-block col-12 col-md-6 col-sm-12 mt-4">
            <div className=" bg-primary card shadow-lg">
              <div className="row card-body">
                <img
                  src={require("./ghibliPhoto.jpg")}
                  className=""
                  style={{ aspectRatio: 2 / 1 }}
                  alt="Studio Ghibli Mural"
                />
              </div>
              <h3 className="card-title text-center mx-3"></h3>

              <p className=" m-5 card-text "></p>
            </div>
            <div className="d-flex justify-content-around mt-5">
              <button
                className="btn btn-info"
                onClick={() => props.setCardLoaded("person")}
              >
                People
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row col-12 d-flex justify-content-around p-5">
        {props.films.map((film) => (
          <FilmCard key={`film-card-${film.id}`} film={film} />
        ))}
      </div>
    </main>
  );
};

export default Films;
