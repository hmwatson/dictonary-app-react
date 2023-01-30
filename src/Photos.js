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
              <div className="col-12" key={index}>
                <a
                  href={photo.src.original}
                  rel="noopener noreferrer"
                  target="_blank"
                >
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
