import React, { useState } from "react";

const ControlledFeild = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password bust be 6 character or longer");
    } else setError("");
  };
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    // if(password.length<6){
    //     setError('Password bust be 6 character or longer')
    // }
    // else setError('')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Your Mail" required />
        <br />
        <input
          type="password"
          onChange={handleOnChange}
          defaultValue={password}
          name="password"
          placeholder="Password"
          required
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledFeild;
