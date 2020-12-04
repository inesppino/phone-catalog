import React, { useEffect, useState } from "react";
import "../assets/css/catalog.css";
import { getPhones } from "../services/fakePhoneService";
import Card from "./Card";

function Catalog() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    setPhones(getPhones());
  },[phones])

  return (
    <main className="container">
      <h1 className="mb-4 h1 mb-4 text-center">Phone Catalog</h1>
      <ul className="catalog-list p-0">
        {phones.map((phone) => (
          <Card key={phone.id} phone={phone} />
        ))}
      </ul>
    </main>
  );
}

export default Catalog;
