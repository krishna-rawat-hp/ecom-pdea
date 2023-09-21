//Import the necessary modules for React, form components, and styles.
import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import "./index.css";

//Create and export a functional React component called `Registration`.
export default function Registration() {
  //Create a state variable called `form` using the `useState` hook to manage the form fields (name, email, password, phone).
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // Import the `Link` component and `useNavigate` hook from React Router for navigation.
  const navigate = useNavigate();

  // Implement a function called `onInputChange` to handle input changes and update the `form` state.

  const onInputChange = (e) => {
    e.preventDefault();
    const inputType = e.target.name;
    const inputValue = e.target.value;

    console.log(inputType + " : " + inputValue);

    setForm({ ...form, [inputType]: inputValue });
  };

  // Implement a function called `resetForm` to reset the form fields.
  const resetForm =(e)=>{
    e.preventDefault();
    setForm({
        name: "",
        email: "",
        password: "",
        phone: "",
      })

  }

  //Implement a function called `registerUser` to handle form submission and display an alert upon submission.
  const registerUser = async (e) => {
    e.preventDefault();
    alert("submitted");
  };



  return (

    //Create a container div with class "reg-box-container"
    <div className="reg-box-container">
      {/* Inside the container div, create a div with class "reg-box" for the registration box. */}
      <div className="reg-box">
        {/* Add a heading "Registration" with class "login-heading" */}
        <h2 className="mb-4 login-heading">Registration</h2>
        {/* Create a form with an onSubmit event handler calling the `registerUser` function */}
        <Form onSubmit={registerUser}>
          {/*  Define form fields for name, email, password, and phone. */}
          <Form.Group
            className="reg-input-field-group"
            controlId="name"
          >
            <label htmlFor="name" className="form-label">
              Username:
            </label>
            <Form.Control
              type="text"
              value={form.name}
              onChange={onInputChange}
              className="reg-input-field"
              name="name"
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group
            className="reg-input-field-group"
            controlId="email"
          >
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <Form.Control
              type="email"
              onChange={onInputChange}
              value={form.email}
              className="reg-input-field"
              name="email"
              placeholder="Enter Email"
            />
          </Form.Group>
          <Form.Group
            className="reg-input-field-group"
            controlId="password"
          >
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <Form.Control
              type="password"
              value={form.password}
              onChange={onInputChange}
              className="reg-input-field"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group
            className="reg-input-field-group"
            controlId="phone"
          >
            <label htmlFor="phone" className="form-label">
              Phone:
            </label>
            <Form.Control
              type="phone"
              value={form.phone}
              onChange={onInputChange}
              className="reg-input-field"
              name="phone"
              placeholder="Enter Phone"
            />
          </Form.Group>

          {/* Add buttons for "Reset" and "Register" with appropriate classes. */}
          <div className="button-right mt-3">
              <Button className="btn btn-danger reg-btn" onClick={resetForm}>reset</Button>
            &nbsp;
            <Button className="btn btn-success reg-btn" type="submit">
              Register
            </Button>
          </div>
          {/* Include a link to the login page for users who already have an account */}
          <div className="reg-already-acc-div mt-3">
          <Link className="reg-link-already-acc" to={"/login"}>
              Already have Account? Login here.
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
