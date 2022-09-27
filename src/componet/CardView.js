import React from "react";
import "./card.css";

const CardView = ({ product }) => {
  const { id, userId, title,abc} = product;
  return (
    <div className="col-12 col-md-6 col-lg-4 mt-2 cardView">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{id}</h5>
          <p> joy {abc}</p>
          <p>  {userId}</p>
          <h5 className="card-title"></h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardView;
