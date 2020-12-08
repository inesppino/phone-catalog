import React, { useEffect, useState } from "react";
import { getPhones, deletePhone } from "../services/fakePhoneService";
import LoadingMask from "react-loadingmask";
import Card from "./Card";
import "../assets/css/catalog.scss";
import "react-loadingmask/dist/react-loadingmask.css";
import { Link } from "react-router-dom";

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
      setMessage('An error has occurred');
    }
    setIsLoading(false);
  };

  const handleDelete = async (phone) => {
    const originalPhones = phones;
    const newPhones = originalPhones.filter(p => p.id !== phone.id);
    setPhones(newPhones);
    try {
      await deletePhone(phone.id);
    } catch (ex) {
      if(ex.response && ex.response.status === 404)
      alert.error('This phone has already been deleted');
      setPhones(originalPhones);
    }
  }
  
  useEffect(() => {
    async function populateComponent() {
      await fetchData();
    }
    populateComponent();
  }, []);

  return (
    <main>
      <LoadingMask loading={isLoading} text={"loading..."} className="loading__container">
        <div className="container d-flex flex-column aling-items-center">
          <h1 className="h1 mb-4 text-center">Phone Catalog</h1>
          <div className="d-flex justify-content-around mt-2">
          <p>Showing {phones.length} phones in the database.</p>
          <Link
              to="/catalog/edit/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }} >
              New Phone
            </Link>
          </div>
          {message && <p>{message}</p>}
          <ul className="catalog-list p-0">
            {phones.map((phone) => (
              <li key={phone.id}>
                <Card phone={phone} onDelete={handleDelete}/>
              </li>
            ))}
          </ul>
        </div>
      </LoadingMask>
    </main>
  );
}

export default Catalog;
