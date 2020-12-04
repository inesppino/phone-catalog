import React, { useEffect, useState } from "react";
import "../assets/css/catalog.css";
import { getPhones } from "../services/fakePhoneService";
import Card from "./Card";

function Catalog() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getPhones();
      response ? setPhones(response.data) : setMessage('Ha ocurrido un error');
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <main className="container">
          <h1 className="mb-4 h1 mb-4 text-center">Phone Catalog</h1>
          {message && <p>{message}</p>}
          <ul className="catalog-list p-0">
            {phones.map((phone) => (
              <Card key={phone.id} phone={phone} />
            ))}
          </ul>
        </main>
      )}
    </>
  );
}

export default Catalog;
