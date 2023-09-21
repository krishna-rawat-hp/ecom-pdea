// Import the necessary modules for React, form components, and styles.
import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Form } from "react-bootstrap";
import "./index.css";

//Create and default export a functional React component called `Login`.
export default function Login() {
  //Create a state variable called `form` using the `useState` hook to manage the form fields (email, password).
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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
        email: "",
        password: ""
      })

  }

  //Implement a function called `loginUser` to handle form submission and display an alert upon submission.
  const loginUser = async (e) => {
    e.preventDefault();
    alert("submitted");
  };

  //return a jsx form that contains all these fields and form should be a box which hover on shadow and background should be light grey and should be in center of the page and width will be 30% of whole page size
  return (
    // Create a container div with class "log-box-container".
    <div className="log-box-container">
      {/* Inside the container div, create a div with class "log-box" for the login box. */}
      <div className="log-box">
        {/* Add a heading "Login" with class "login-heading". */}
        <h2 className="mb-4 login-heading">Login</h2>
        {/* Create a form with an onSubmit event handler calling the `loginUser` function. */}
        <Form onSubmit={loginUser}>
          {/* Define form fields for email and password. */}
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

          {/* Add buttons for "RESET" and "LOGIN" with appropriate classes. */}
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
          {/* Include links for "Forgot Password?" and "Don't have an Account? Create here." to navigate to the respective pages. */}
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
