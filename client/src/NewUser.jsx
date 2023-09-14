import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const NewUser = () => {
  const [signInSucessful,setSignInSucessful]=useState(false)
  function afterSignIn(){
    setSignInSucessful(true)
    setTimeout(()=>{
      setSignInSucessful(false)}, 3000);
  }
  function putData() {
    fetch("http://localhost:4000/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})
  .then(() => {
    afterSignIn()
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  }
  const [formData, setFormData] = useState(
    {
      "name": "",
      "email": "",
      "username": "",
      "password": ""
  });

  const handleStringChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <>
      
  <h2>REGISTER !</h2>
      <input type="text" placeholder="Name" name = "name" onChange={handleStringChange}/>
        
      <br></br>

      <br></br>
      
      <input type="text" placeholder="Email" name = "email" onChange={handleStringChange}/>
      
      <br></br>

      <br></br>

      <input type="text" placeholder="Username" name = "username" onChange={handleStringChange}/>
      
      <br></br>

      <br></br>

      <input type="password" placeholder="Password" name = "password" onChange={handleStringChange}/>
      
      <br></br>

      <br></br>
        
      <button onClick={() => {putData();}}>
        Register
      </button>
      
      {
        signInSucessful && <p>SIGN IN SUCCESSFULL</p>
      }

      <br/><br/>
      <Link to="/signin">Login</Link>
    </>
  );
};

export default NewUser;
