import { useState } from "react";
import validation from "./Validation/Validation";

const Form = ({login}) => {
    const handleSubmit= (event) =>{
        event.preventDefault();
        login(userData)
       }

  const [errors, setErrors] = useState();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    
    setErrors(validation({
        ...userData,
        [event.target.name]: event.target.value,
      }));
  };

  return (
      
      <div>

      <div className="formBack">


      <form onSubmit={handleSubmit} className="Login">
       <div className="inputContainer">

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          />
        {errors && <p className="err" style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <hr />
        <div className="inputContainer">
        
        <label htmlFor="passord">Password:</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          />
        {errors && <p className="err" style={{ color: "red" }}>{errors.password}</p>}
        <hr/>
          </div>
          <div className="LoginButtonContainer"> 
            <button className="loginButton">Login</button>
          </div>
      </form>
      </div>
      </div>
  );
};

export default Form;
