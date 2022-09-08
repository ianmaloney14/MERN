import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const createUser = (e) => {
    e.preventDefault();

    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setHasBeenSubmitted(true);

    // const submitHandler = (e) => {
    //   e.preventDefault()
    //   if(firstName && lastName && email && password %% confirmPassword) {
    //     console.log(obj)
    //   }
    // }
  };

  return (
    <div>
      <form onSubmit={createUser}>
        {hasBeenSubmitted ? (
          <h3>Thank you for submitting the form!</h3>
        ) : (
          <h3>Welcome, please submit the form.</h3>
        )}
        <div>
          <label>First Name </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          {firstName && firstName.length < 2 ? (
            <p>First name must be more than 2 characters!</p>
          ) : null}
        </div>
        <div>
          <label>Last Name </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          {lastName && lastName.length < 2 ? (
            <p>Last name must be more than 2 characters!</p>
          ) : null}
        </div>
        <div>
          <label>Email </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {email && email.length < 2 ? (
            <p>Email must be more than 2 characters!</p>
          ) : null}
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {password && password.length < 8 ? (
            <p>Password must be 8 characters!</p>
          ) : null}
        </div>
        <div>
          <label>Confirm Password </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          {confirmPassword === password ? null : <p>Passwords must match!</p>}
        </div>
        <input type="submit" value="Submit" />
      </form>
      <h1>Your Form Data</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {password}</p>
    </div>
  );
};

export default Form;
