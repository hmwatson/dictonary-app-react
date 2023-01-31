import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map(function(photo, index) {
          return (
            <div key={index}>
              <a
                href={photo.src.original}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  src={photo.src.portrait}
                  alt="#"
                  className="display-image"
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
