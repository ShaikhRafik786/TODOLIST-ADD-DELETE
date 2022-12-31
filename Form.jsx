import React, { useState } from "react";

const Form = () => {
  const [formvalue, setFormValue] = useState({
    name: "",
    lname: "",
    mobile: "",
    pancard: "",
    email: "",
    password: "",
  });

  const handle = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormValue({ ...formvalue, [name]: value });
    console.log(formvalue)
  };

  return (
    <div style={{backgroundColor:"green"}}>
      <h1>
        <mark>Form Validation</mark></h1>
      <form style={{backgroundColor:"grey" , padding:"20px" , margin:"5px"}}>
        <label>F-Name</label>
        <input
          type="text"
          name="name"
          value={formvalue.name}
          onChange={handle}
        />
        <br />
        <label>L-Name</label>
        <input
          type="text"
          name="lname"
          value={formvalue.lname}
          onChange={handle}
        />
        <br />
        <label>Contact</label>
        <input
          type="text"
          name="mobile"
          value={formvalue.mobile}
          onChange={handle}
        />
        <br />
        <label>Pancard</label>
        <input
          type="text"
          name="pancard"
          value={formvalue.pancard}
          onChange={handle}
        />
        <br />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formvalue.email}
          onChange={handle}
        />
        <br />
        <label>Password</label>
        <input
          type="number+text+hide"
          name="password"
          value={formvalue.password}
          onChange={handle}
        />
        <button onClick={handle}>Submit</button>
      </form>
    </div>
  );
};
export default Form;
