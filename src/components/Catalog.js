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

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await getPhones();
      setPhones(response.data);
    } catch (ex) {
      console.log(ex);
      setMessage('Ha ocurrido un error');
    }
    setIsLoading(false);
  };
  
  useEffect(() => {
    async function populateComponent() {
      await fetchData();
    }
    populateComponent();
  }, []);

  return (
    <main>
      <LoadingMask loading={isLoading} text={"loading..."} className="h-100 w-100">
        <div className="container d-flex flex-column">
          <h1 className="h1 p-4 text-center">Phone Catalog</h1>
          {message && <p>{message}</p>}
          <ul className="catalog-list p-0">
            {phones.map((phone) => (
              <li key={phone.id}>
                <Card phone={phone} />
              </li>
            ))}
          </ul>
        </div>
      </LoadingMask>
    </main>
  );
}

export default Catalog;
