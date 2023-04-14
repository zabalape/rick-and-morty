import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
        <div className="navBar">
            <div className="buttonContainer">

              <button className="loginButton" variant="outlined" color="inherit" size="small">
                <Link to="/About">About</Link>
              </button>
              <button className="loginButton" variant="outlined" color="inherit" size="small">
                <Link to="/Home">Home</Link>
              </button>
            </div>
                <SearchBar onSearch={onSearch} />
           
        </div>
             
    
    
  );
};

export default Nav;
