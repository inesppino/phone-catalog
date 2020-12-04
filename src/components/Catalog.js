import React, { useEffect, useState } from "react";
import { getPhones } from "../services/fakePhoneService";
import LoadingMask from "react-loadingmask";
import Card from "./Card";
import "../assets/css/catalog.css";
import "react-loadingmask/dist/react-loadingmask.css";

function Catalog() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await getPhones();
      response ? setPhones(response) : setMessage('Ha ocurrido un error');
      console.log(phones)
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <main>
      <LoadingMask loading={isLoading} text={"loading..."} className="h-100 w-100">
        <div className="container">
          <h1 className="mb-4 h1 mb-4 text-center">Phone Catalog</h1>
          {message && <p>{message}</p>}
          <ul className="catalog-list p-0">
            {phones.map((phone) => (
              <Card key={phone.id} phone={phone} />
            ))}
          </ul>
        </div>
      </LoadingMask>
    </main>
  );
}

export default Catalog;
