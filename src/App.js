import "./components/Style.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Form from "./components/Form.jsx";
import Background from './components/Background'
const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "a417fc96b973.5d346bf94ed39d4f025e";

const email = "hola@gmail.com";
const password = "123asd";

function App() {
  

  const [access, setAccess] = useState(false);
  const navigate = useNavigate()
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  };
  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };
  const login = (userData) => {
    if (userData.email === email && userData.password === password) {
      setAccess(true);
      navigate('/home')
    }
  };

  useEffect(()=>{
    !access && navigate('/');
  },[access]);

 

  return (
     <div className="App">

      
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
       
        <Route path="/" element={[<Background></Background>, <Form login={login}></Form>]}></Route>
        <Route
          path="/Home"
          element={[<Background></Background>, <Cards characters={characters} onClose={onClose} />]}
          />
        <Route path="/About" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
