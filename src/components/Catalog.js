import React from "react";
import "../assets/css/catalog.css";

function Catalog() {
  const phones = [
    {
      id: 0,
      name: "Iphone 7",
      manufacturer: "Apple",
      description: "lorem ipsum dolor sit amet consectetur",
      color: "black",
      price: 769,
      imageFileName: "Iphone_7.png",
      screen: "4,7 inch IPS",
      processor: "A10 Fusion",
      ram: 2,
    },
    {
      id: 1,
      name: "Iphone 8",
      manufacturer: "Apple",
      description: "lorem ipsum dolor sit amet",
      color: "grey",
      price: 969,
      imageFileName: "Iphone_8.png",
      screen: "4,7 inch IPS",
      processor: "A11 Fusion",
      ram: 3,
    },
    {
      id: 2,
      name: "Galaxy A41",
      manufacturer: "Samsung",
      description: "dolor sit amet consectetur",
      color: "blue",
      price: 200,
      imageFileName: "Galaxy_A41.png",
      screen: "5,7 inch IPS",
      processor: "A11 Fusion",
      ram: 3,
    },
    {
      id: 3,
      name: "Blade A7",
      manufacturer: "ZTE",
      description: "amet consectetur",
      color: "blue",
      price: 149,
      imageFileName: "Blade_A7.png",
      screen: "4,7 inch IPS",
      processor: "A12 Fusion",
      ram: 3,
    },
    {
      id: 4,
      name: "Iphone SE",
      manufacturer: "Apple",
      description: "lorem ipsum dolor sit amet consectetur",
      color: "black",
      price: 769,
      imageFileName: "Iphone_SE.png",
      screen: "4,7 inch IPS",
      processor: "A10 Fusion",
      ram: 2,
    },
  ];

  return (
    <main className="container">
      <h1 className="mb-4 h1 mb-4 text-center">Phone Catalog</h1>
      <ul className="catalog-list p-0">
        {phones.map((phone) => (
          <li key={phone.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                img
                <h3>{phone.name}</h3>
                <h5>{phone.manufacturer}</h5>
                <small className="text-muted">{phone.color}</small>
              </div>
              <div className="card-body">
                <p className="card-text">{phone.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <button type="button" className="btn btn-sm btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Catalog;
