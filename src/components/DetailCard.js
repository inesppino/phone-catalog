import React, { useEffect, useState } from "react";
import { getPhone } from "../services/fakePhoneService";
import '../assets/css/catalog.css';

const DetailCard = (props) => {
  const [details, setDetails] = useState({});

  const getDetails = async () => {
    const idPhone = props.match.params.id;
    try {
      const response = await getPhone(idPhone);
      setDetails(response.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  };

  const {
    name,
    manufacturer,
    color,
    description,
    price,
    screen,
    processor,
    ram,
  } = details;

  useEffect(() => {
    async function populateComponent() {
      await getDetails();
    }
    populateComponent();
  }, []);

  return (
    <div className="container pt-4">
      <div className="d-flex flex-column mt-4 align-items-center">
        <div className="card shadow-sm">
          <div className="card-body">
            img
            <h3 className="h3">{name}</h3>
            <h5 className="h5">{manufacturer}</h5>
            <p>{price} €</p>
            <small className="text-muted">{color}</small>
          </div>
          <div className="card-body pt-0">
            <div className="d-flex flex-column mb-2">
              <span>
                <b>Description:</b>
              </span>
              <p className="card-text">{description}</p>
            </div>
            <span className="mb-2">
              <b>Screen:</b> {screen}
            </span>
            <div className="d-flex flex-column mb-2">
              <span>
                <b>Processor:</b> {processor}
              </span>
              <span>
                <b>Ram:</b> {ram}
              </span>
            </div>
          </div>
        </div>
        <div className="btn-group mt-4">
          <button type="button" className="btn btn-sm btn-outline-secondary">
            Edit
          </button>
          <button type="button" className="btn btn-sm btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
