import React, { useEffect, useState } from "react";
import Joi from "joi-browser";
import { getPhone, savePhone } from "../services/fakePhoneService";
import Input from "./input";

const PhoneForm = (props) => {
  const [phone, setPhone] = useState({
    name: "",
    manufacturer: "",
    color: "",
    description: "",
    price: 0,
    screen: "",
    processor: "",
    ram: 0,
  });
  const [errors, setErrors] = useState({});

  const getPhoneDetails = async () => {
    const idPhone = props.match.params.id;
    try {
      const response = await getPhone(idPhone);
      setPhone(response.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        props.history.replace("/not-found");
    }
  };

  const populateComponent = () => {
    let inputs = [];
    for (let property in phone) {
      if(property !== 'id'){
        let type = "";
        typeof phone[property] === "string" ? (type = "text") : (type = "number");
        inputs.push(
          <Input
            key={property}
            name={property}
            label={property.toLowerCase()}
            value={phone[property]}
            onChange={handleChange}
            type={type}
            error={errors[property]}
          />
        );
      };
    }
    return inputs;
  };

  const handleChange = ({ currentTarget: input }) => {
    const newErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];

    const editedPhone = { ...phone };
    editedPhone[input.name] = input.value;
    setPhone(editedPhone);
    setErrors(newErrors);
  };

  const schema = {
    name: Joi.string().required().label("Name"),
    manufacturer: Joi.string().required().label("Manufacturer"),
    color: Joi.string().required().label("Color"),
    description: Joi.string().required().label("Description"),
    price: Joi.number().required().min(0).label("Price"),
    screen: Joi.string().required().label("Screen"),
    processor: Joi.string().required().label("Processor"),
    ram: Joi.number().required().min(0).max(10).label("Ram"),
    id: Joi.number(),
    imageFileName: Joi.string()
  };

  const validate = () => {
    const result = Joi.validate(phone, schema, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  useEffect(() => {
    async function getData() {
      await getPhoneDetails();
    }
    getData();
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    const errors = validate();
    setErrors({ errors: errors || {} });
    if (errors) return;
    doSubmit()
  };

  const doSubmit = async () => {
    try {
      await savePhone(phone.id, phone);
      props.history.push("/catalog");
    } catch (ex) {
      alert.error('An error has ocurred', ex.response.status)
    }
  };

  return (
    <div className="container">
      <h1 className="h1">Edit</h1>
      <form onSubmit={submitForm}>
        {populateComponent()}
        <button disabled={validate()} className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};

export default PhoneForm;
