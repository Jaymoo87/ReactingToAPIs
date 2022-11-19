import React from "react";

const Main = (props) => {
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
    </main>
  );
};

export default Main;
