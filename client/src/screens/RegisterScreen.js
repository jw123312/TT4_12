import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const RegisterScreen = () => {
  const [values, setValues] = useState({
    first_name: "First Name",
    last_name: " Last Name",
    nationality: "Singaporean",
    identification_number: "S1234567J",
    bank_acc_number: "123456789937",
    email: "anon@gmail.com",
    password: "000000",
    confirmPassword: "000000",
    buttonText: "Submit",
    error: "",
    success: false,
    loading: false,
  });

  //destructure values
  const {
    first_name,
    last_name,
    nationality,
    bank_acc_number,
    identification_number,
    email,
    password,
    confirmPassword,
    buttonText,
    error,
    success,
    loading,
  } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  //handle submit form
  const submitForm = async (e) => {
    e.preventDefault();
    setValues({
      ...values,
      buttonText: "Submitting",
      error: "",
      success: false,
      loading: true,
    });

    if (
      first_name.trim().length == 0 ||
      last_name.trim().length == 0 ||
      nationality.trim().length == 0 ||
      bank_acc_number.trim().length == 0 ||
      identification_number.trim().length == 0 ||
      email.trim().length == 0 ||
      password.trim().length == 0 ||
      confirmPassword.trim().length == 0
    ) {
      return setValues({
        ...values,
        buttonText: "Submit",
        error: "One or more missing fields. Please try again.",
      });
    }

    if (password.trim().length < 6) {
      return setValues({
        ...values,
        buttonText: "Submit",
        error: "Password should be at least 6 characters long.",
      });
    }

    if (password.trim() !== confirmPassword.trim()) {
      return setValues({
        ...values,
        buttonText: "Submit",
        error: "Passwords do not match.",
      });
    }

    try {
      const res = await axios.post("/create-user", {
        first_name,
        last_name,
        nationality,
        bank_acc_number,
        identification_number,
        email,
        password,
      });

      setValues({
        ...values,
        success: true,
        buttonText: "Submit",
        error: null,
        success: true,
        loading: false,
      });
    } catch (err) {
      console.log("hit error", err);

      setValues({
        ...values,
        buttonText: "Submit",
        error: err.response.data.error,
        loading: false,
      });
    }
  };

  const signupForm = () => (
    <form onSubmit={submitForm}>
      <h1>Register</h1>
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="form-group">
        <label className="text-muted">First Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("first_name")}
          value={first_name}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Last Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("last_name")}
          value={last_name}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Nationality</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("nationality")}
          value={nationality}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Identification Number</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("identification_number")}
          value={identification_number}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Bank Acc Number</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("bank_acc_number")}
          value={bank_acc_number}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Email Address</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange("email")}
          value={email}
        />
      </div>

      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="password"
          className="form-control"
          onChange={handleChange("password")}
          value={password}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          onChange={handleChange("confirmPassword")}
          value={confirmPassword}
        />
      </div>

      <div>
        <button className="btn btn-dark mt-3">{buttonText}</button>
      </div>
    </form>
  );

  return (
    <div className="flex-container container shadow p-5 mb-5 mt-3 rounded">
      {signupForm()}
    </div>
  );
};

export default RegisterScreen;
