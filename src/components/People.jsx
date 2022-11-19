import React from "react";

const People = (props) => {
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

              <p className=" m-5 card-text "></p>
              <div className="d-flex justify-content-between mx-2"></div>
            </div>
            <div className="d-flex justify-content-around mt-5">
              <button
                className="btn btn-info"
                onClick={() => props.setCardLoaded("films")}
              >
                Film
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row col-12 justify-content-around p-5">
        {props.people.map((person) => (
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
              <p className=" m-2 card-text ">Hair Color: {person.hair_color}</p>
              <div className="d-flex justify-content-between mx-2">
                <h6 className=" text-muted d-flex card-text fst-italic">
                  Gender: {person.gender}
                </h6>
                <a
                  target="_blank"
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
};

export default People;
