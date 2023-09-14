import { useState } from "react";  
import { Link } from "react-router-dom";
const Login = () => {
  
  const [logInFailed,setLogInFailed]=useState(false)
  function afterLogIn(){
    window.location.href='/resource'
  }
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: ""
  });

  function handleStringChange(e){
    setLoginDetails({... loginDetails, [e.target.name] : e.target.value})
  }

  function tryLogin() {
    fetch("http://localhost:4000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    }).then((res)=>{
        if(res.ok)afterLogIn()
        else setLogInFailed(true)
    });
  }

  return (
    <>
        <input placeholder="Username" name="username"  onChange={handleStringChange}/>
        <br/><br/>
        <input type="password" placeholder="Password" name="password"  onChange={handleStringChange}/>
        <br/><br/>
        <button onClick={() => {tryLogin()}}>
          LogIn
        </button>
        
      {
        logInFailed && <p>Invalid Credentials</p>
      }
    </>
  );
};

export default Login;