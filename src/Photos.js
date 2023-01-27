import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function(photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="norefrrer">
                  <img src={photo.src.portrait} alt="#" className="img-fluid" />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
