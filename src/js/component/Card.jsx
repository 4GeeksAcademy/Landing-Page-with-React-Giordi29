import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>

      </div>
    </div>
  );
};

export default Card;