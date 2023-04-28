import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


const Nav = ({ onSearch, logout }) => {
  const { pathname } = useLocation();
  if (pathname === "/") return;
  return (
    // <AppBar elevation={0} position="fixed" color='primary'>
    //   <Toolbar>
    //     <Typography variant="h6"></Typography>
    //   </Toolbar>
    //   <div className="buttonContainer">
    //     <button
    //       className="loginButton"
    //       variant="outlined"
    //       color="inherit"
    //       size="small"
    //     >
    //       <Link to="/About">About</Link>
    //     </button>
    //     <button
    //       className="loginButton"
    //       variant="outlined"
    //       color="inherit"
    //       size="small"
    //     >
    //       <Link to="/Home">Home</Link>
    //     </button>
    //     <button
    //       className="loginButton"
    //       variant="outlined"
    //       color="inherit"
    //       size="small"
    //     >
    //       <Link to="/favorites">Favorites</Link>
    //     </button>
    //   </div>
    //   <SearchBar onSearch={onSearch} />
    //   <button onClick={logout} className="loginButton">
    //     <CiLogout />
    //   </button>
    // </AppBar>

    <AppBar position="fixed" elevation={0} color="primary">
      <Toolbar>
        <Typography variant="h6">
          
        </Typography>
      </Toolbar>
    </AppBar>





  );
};

export default Nav;
