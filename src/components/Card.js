import React from "react";
import { Link } from "react-router-dom";

const Card = ({ phone }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        img
        <h3>{phone.name}</h3>
        <h5>{phone.manufacturer}</h5>
        <small className="text-muted">{phone.color}</small>
      </div>
      <div className="card-body pt-0">
        <p className="card-text--truncate"><b>Description: </b>{phone.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary">
              <Link to={`/catalog/${phone.id}`}>View</Link>
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
            <Link to={`/catalog/edit/${phone.id}`}>Edit</Link>
            </button>
          </div>
          <button type="button" className="btn btn-sm btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
