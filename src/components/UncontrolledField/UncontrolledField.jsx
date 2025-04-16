import React, { useRef, useState } from "react";

const UncontrolledField = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email);
    console.log(password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Your Mail"
          required
        />
        <br />
        <input
        ref={passwordRef}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      {/* <p style={{ color: "red" }}>
        <small>{error}</small>
      </p> */}
    </div>
  );
};

export default UncontrolledField;
