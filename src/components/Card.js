import React from "react";
import { Link } from "react-router-dom";
import images from './Images';

const Card = ({ phone, onDelete }) => {
  const getImage = () => {
    let src = '';
    if (!images[phone.imageFileName]) {
      src = 'https://via.placeholder.com/100x185.png?text=Not+Found';
    } else {
      src = images[phone.imageFileName];
    }
    return src;
  }
  return (
    <div className="card shadow-sm">
      <div className="card-body d-flex">
        <img className="card-body__image" src={getImage()} alt={phone.name}/>
        <div className="pl-3">
        <h3>{phone.name}</h3>
        <h5>{phone.manufacturer}</h5>
        <small className="text-muted">{phone.color}</small>
        </div>
      </div>
      <div className="card-body pt-0 d-flex flex-column justify-content-between">
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
          <button onClick={() => onDelete(phone)} type="button" className="btn btn-sm btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
