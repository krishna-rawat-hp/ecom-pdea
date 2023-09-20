import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import "./index.css";

//create a registration Component using functional components and name should be Registration

export default function Registration() {
  //create a state for registration form
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const navigate = useNavigate();

  const onInputChange = (e) => {
    e.preventDefault();
    const inputType = e.target.name;
    const inputValue = e.target.value;

    console.log(inputType + " : " + inputValue);

    setForm({ ...form, [inputType]: inputValue });
  };

  const resetForm =(e)=>{
    e.preventDefault();
    setForm({
        name: "",
        email: "",
        password: "",
        phone: "",
      })

  }

  //implement registeruserMethod of form submit
  const registerUser = async (e) => {
    e.preventDefault();
    alert("submitted");
  };

  //return a jsx form that contains all these fields and form should be a box which hover on shadow and background should be light grey and should be in center of the page and width will be 30% of whole page size
  return (
    <div className="reg-box-container">
      <div className="reg-box">
        <h2 className="mb-4 login-heading">Registration</h2>
        <Form onSubmit={registerUser}>
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
          <div className="button-right mt-3">
              <Button className="btn btn-danger reg-btn" onClick={resetForm}>reset</Button>
            &nbsp;
            <Button className="btn btn-success reg-btn" type="submit">
              Register
            </Button>
          </div>
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
