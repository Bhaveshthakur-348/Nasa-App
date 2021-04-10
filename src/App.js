import React from "react";
import Home from "./components/Home";
import PictureCard from "./components/PictureCard";
import { useState } from "react";
import NasaPicture from "./components/NasaPicture";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = () => {
    fetch(`https://images-api.nasa.gov/search?q=${search}`)
      .then((result) => result.json())
      .then((data) => setData(data.collection.items));
  };

  return (
    <>
      <h2 className="ui center aligned header" style={{ marginTop: "1em" }}>
        Nasa Media Search
      </h2>
      <div style={{ float: "right", display: "flex" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="ui inverted secondary button"
          style={{ marginLeft: "10px", marginRight: "5em", display: "flex" }}
          onClick={handleSearch}
        >
          {" "}
          Search
        </button>
      </div>
      {search === "" ? (
        <NasaPicture />
      ) : (
        data !== [] &&
        data.map((image) => {
          if (image.links) {
            return (
              <PictureCard
                title={image.data[0].title}
                imgSource={image?.links[0].href}
                // title={image.data[0].title}
                date={image.data[0].date_created.substring(0, 10)}
              />
            );
          }
        })
      )}
      {}

      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /> */}
      {/* <Link className="home-link" to="/nasaphoto">See into the stars!</Link> */}
    </>
  );
}

export default App;
