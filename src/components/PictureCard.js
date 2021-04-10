import React from "react";

export default function PictureCard({ imgSource, title, date }) {
  return (
    <div style={{ display: "flex", marginTop: "20px" }}>
      <div>
        <img
          src={imgSource}
          alt=""
          style={{ width: "150px", marginLeft: "30px" }}
        />
      </div>
      <div
        style={{
          marginLeft: "20px",
          color: "darkblue",
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        <p style={{ marginTop: "30px" }}>{title}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
