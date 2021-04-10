import React, { useState, useEffect } from "react";
// import Home from "./Home";

const apiKey = "zlfyBpzdWpr5FMldcmoibaFeybuf8e3H8yz5PEzW";

const NasaPicture = () => {
  const [picInfo, setPicInfo] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((result) => result.json())
      .then((data) => setPicInfo(data));
  }, []);

  return (
    <>
      {picInfo && (
        <>
          <h1 style={{ marginLeft: "57px", display: "flex" }}>
            {picInfo.title}
          </h1>
          <img
            src={picInfo.url}
            alt={picInfo.title}
            // className="ui centered card"
            className="ui centered large image"
            style={{ height: "500px", width: "1400px", display: "flex" }}
          />

          <p
            style={{
              marginTop: "10px",
              marginRight: "4em",
              marginLeft: "57px",
              display: "flex",
            }}
          >
            {picInfo.explanation}
          </p>

          <p className="ui center aligned header">{picInfo.date}</p>
          <p className="ui center aligned header"> © Copyright</p>
        </>
      )}
    </>
  );
};

export default NasaPicture;

// export default NasaPicture;
// https://api.nasa.gov/planetary/apod?api_key=zlfyBpzdWpr5FMldcmoibaFeybuf8e3H8yz5PEzW
// zlfyBpzdWpr5FMldcmoibaFeybuf8e3H8yz5PEzW
// https://api.nasa.gov/planetary/apod?api_key=zlfyBpzdWpr5FMldcmoibaFeybuf8e3H8yz5PEzW
