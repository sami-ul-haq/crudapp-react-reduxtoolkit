import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addStudent } from "../redux/studentSlice";
import { v4 as uuidv4 } from "uuid";

const AddStudent = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  });

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
      id: uuidv4(),
    });
  };

  const formHandler = (e) => {
    e.preventDefault();

    dispatch(addStudent(data));

    history.push("/");
  };

  const goBack = () => {
    history.push("/");
  };

  return (
    <form onSubmit={formHandler}>
        <h1>Add Student</h1>
        <label htmlFor="">First Name: </label>
      <input
        type="text"
        name="firstName"
        className="input-field"
        value={data.firstName}
        onChange={inputHandler}
        placeholder="enter first name"
      />
      <label htmlFor="">Last Name: </label>
      <input
        type="text"
        name="lastName"
        className="input-field"
        value={data.lastName}
        onChange={inputHandler}
        placeholder="enter last anem"
      />
      <label htmlFor="">Phone: </label>
      <input
        type="phone"
        name="phone"
        className="input-field"
        value={data.phone}
        onChange={inputHandler}
        placeholder="enter phone"
      />
      <label htmlFor="">Email: </label>

      <input
        type="email"
        name="email"
        className="input-field"
        value={data.email}
        onChange={inputHandler}
        placeholder="enter email"
      />
      <label htmlFor="">Address: </label>
      <input
        type="text"
        name="address"
        className="input-field"
        value={data.address}
        onChange={inputHandler}
        placeholder="enter address"
      />

      <button className="form-btn" type="submit">Add Student</button>
      <br />
      <br />
      <button className="form-btn" onClick={goBack}>Go Back</button>
    </form>
  );
};

export default AddStudent;
