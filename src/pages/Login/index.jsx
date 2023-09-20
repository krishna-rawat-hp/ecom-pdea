import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import "./index.css";

//create a login Component using functional components and name should be Login

export default function Login() {
  //create a state for login form using email and password
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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
        email: "",
        password: ""
      })

  }

  //create loginUser Method of form submit
  const loginUser = async (e) => {
    e.preventDefault();
    alert("submitted");
  };

  //return a jsx form that contains all these fields and form should be a box which hover on shadow and background should be light grey and should be in center of the page and width will be 30% of whole page size
  return (
    <div className="log-box-container">
      <div className="log-box">
        <h2 className="mb-4 login-heading">Login</h2>
        <Form onSubmit={loginUser}>
          <Form.Group
            className="log-input-field-group"
            controlId="email"
          >
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <Form.Control
              type="email"
              onChange={onInputChange}
              value={form.email}
              className="log-input-field"
              name="email"
              placeholder="Enter Email"
            />
          </Form.Group>
          <Form.Group
            className="log-input-field-group"
            controlId="password"
          >
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <Form.Control
              type="password"
              value={form.password}
              onChange={onInputChange}
              className="log-input-field"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <div className="button-right mt-3">
              <Button className="btn btn-danger log-btn" onClick={resetForm}>RESET</Button>
            &nbsp;
            <Button className="btn btn-success log-btn" type="submit">
              LOGIN
            </Button>
          </div>
          <div className="log-forgot-pass-div mt-3">
              <Link className="log-link-forget" to={"/"}>Forgot Password?</Link>
          </div>
          <div className="log-create-acc-div mt-1">
          <Link className="log-link-create-acc" to={"/registration"}>
              Don't have Account? Create here.
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
