import React, { useState } from "react";
import PictureCard from "./PictureCard";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const handleSearch = () => {
    fetch(`https://images-api.nasa.gov/search?q=${search}`)
      .then((result) => result.json())
      .then((data) => setData(data.collection.items.slice(1, 11)));
  };
  return (
    <>
      <h2 className="ui center aligned header">Nasa Media Search</h2>
      <div>
        <input
          type="text"
          className="ui right aligned"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="ui inverted primary button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {data !== [] &&
        data.map((image) => {
          if (image.links) {
            return (
              <PictureCard
                imgSource={image?.links[0].href}
                title={image.data[0].title}
                date={image.data[0].date_created.substring(0, 10)}
              />
            );
            // console.log(image.links[0].href);
          }
        })}
      {/* <Link className="home-link" to="/nasaphoto">See into the stars!</Link> */}
    </>
  );
};

export default Home;
