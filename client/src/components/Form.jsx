import { useState } from "react";
import validation from "./Validation/Validation";
import { makeStyles } from '@mui/styles';
import { Grid, Paper, TextField, Button } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: theme.spacing(3),
//     backgroundColor: '#333',
//     color: '#fff',
//   },
//   input: {
//     marginBottom: theme.spacing(2),
//     color: '#fff',
//   },
//   button: {
//     backgroundColor: '#fff',
//     color: '#333',
//   },
// }));

const Form = ({login}) => {

  const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    backgroundColor: '#333',
    color: '#fff',
  },
  input: {
    marginBottom: theme.spacing(2),
    color: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    color: '#333',
  },
}));

    const handleSubmit= (event) =>{
        event.preventDefault();
        login(userData)
       }

  const [errors, setErrors] = useState({
    email: "",
    password: "",
});
  const [userData, setUserData] = useState({
    email: "",
    password: ""
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
          
      //hacer un contenedor con muiGrid para hacer un login, debe tener fondo oscuro recibir handleSubmit y en cada entrada handleChange, tambien devolver errores desde la constante errors, con errors.email y errors.password 
      <Grid container justify="center">
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              fullWidth
              error={!!errors.email}
              helperText={errors.email}
              
            />
            <TextField
              label="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              type="password"
              fullWidth
              error={!!errors.password}
              helperText={errors.password}
              
            />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
  
};

export default Form;
